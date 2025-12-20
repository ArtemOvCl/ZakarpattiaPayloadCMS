import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

import { customRichTextFeatures } from '../shared/configuration/custom-editor'
import { generateSlug } from '../shared/hooks/slug.hook'
import { enforceSingleFeatured } from './hooks/featured.hook'

const NEWS_SLUG = 'news'

export const News: CollectionConfig = {
  slug: NEWS_SLUG,
  labels: { singular: 'Новина', plural: 'Новини' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'featured', 'createdAt'],
  },
  access: { read: () => true },
  hooks: {
    beforeChange: [
      enforceSingleFeatured,
    ],
  },
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
      unique: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
        description: 'Автоматично генерується з назви',
      },
      hooks: {
        beforeValidate: [generateSlug('title')],
      },
    },
    {
      name: 'category',
      label: 'Категорія',
      type: 'relationship',
      relationTo: 'news-categories',
      required: true,
      hasMany: false,
    },
    {
      name: 'featured',
      label: 'Головна новина',
      type: 'checkbox',
      defaultValue: false
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