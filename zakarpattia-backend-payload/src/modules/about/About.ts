import type { GlobalConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

import { customRichTextFeatures } from '../shared/configuration/custom-editor'

import { redirectPreviewUtil } from '../shared/utils/redirect-preview.util'

const ABOUT_SLUG = 'about'

export const About: GlobalConfig = {
  slug: ABOUT_SLUG,
  label: 'Про нас',
  admin: {
    description: 'Інформація про організацію',
    preview: (doc) => redirectPreviewUtil(doc, '/about'),
  },
  versions: {
    drafts: true,
  },
  access: { read: () => true },
  fields: [
    {
      name: 'content',
      label: 'Контент',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        features: customRichTextFeatures,
      }),
    },
  ],
}

