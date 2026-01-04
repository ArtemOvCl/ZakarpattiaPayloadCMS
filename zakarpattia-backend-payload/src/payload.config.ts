// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { uk } from '@payloadcms/translations/languages/uk';
import { en } from '@payloadcms/translations/languages/en';

import { Users } from './modules/users/collections/Users'
import { Media } from './modules/media/Media'
import { News } from './modules/news/News'
import { NewsCategories } from './modules/news/NewsCategories'
import { Coaches } from './modules/coaches/Coaches'
import { Contacts } from './modules/contacts/Contacts'
import { About } from './modules/about/About'

import { r2Storage } from './modules/shared/storages/r2.storage'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const isProduction = process.env.NODE_ENV === 'production';
console.log('Running in', isProduction ? 'production' : 'development', 'mode.');

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname)
    },
    components: {
      graphics: {
        Icon: {
          path: './modules/shared/components/Logo.tsx',
          exportName: 'Icon',
        },
        Logo: {
          path: './modules/shared/components/Logo.tsx',
          exportName: 'Logo',
        },
      },
    },
  },
  collections: [Users, Media, News, NewsCategories, Coaches],
  globals: [Contacts, About],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: isProduction ? process.env.DATABASE_URI_PROD || '' : process.env.DATABASE_URI_DEV || '',
  }),
  sharp,
  i18n: {
    fallbackLanguage: 'uk',
    supportedLanguages: { uk, en },
  },
  plugins: [
    payloadCloudPlugin(),
    ...(isProduction ? [r2Storage] : [])
  ],
})
