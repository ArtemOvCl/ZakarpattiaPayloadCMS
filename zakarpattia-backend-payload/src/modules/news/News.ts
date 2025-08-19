import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

import { customRichTextFeatures } from '../shared/configuration/custom-editor'

const NEWS_SLUG = 'news'

export const News: CollectionConfig = {
  slug: NEWS_SLUG,
  labels: { singular: 'Новина', plural: 'Новини' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'headerImage', 'createdAt'],
  },
  access: { read: () => true },
  fields: [
    {
      name: 'headerImage',
      label: 'Шапка новини',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'title',
      label: 'Назва новини',
      type: 'text',
      required: true,
    },
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