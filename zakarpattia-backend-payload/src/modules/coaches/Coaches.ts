import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

import { customRichTextFeatures } from '../shared/configuration/custom-editor'
import { generateSlug } from '../shared/hooks/slug.hook'

import { redirectPreviewUtil } from '../shared/utils/redirect-preview.util'

const COACHES_SLUG = 'coaches'

export const Coaches: CollectionConfig = {
  slug: COACHES_SLUG,
  labels: { singular: 'Тренер', plural: 'Тренери' },
  admin: {
    useAsTitle: 'fullName',
    defaultColumns: ['fullName', 'photo', 'createdAt'],
    preview: (doc) => redirectPreviewUtil(doc, `/coaches`),
  },
  access: { read: () => true },
  versions: {
    maxPerDoc: 1,
    drafts: true,
  },
  fields: [
    {
      name: 'photo',
      label: 'Фото тренера',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'fullName',
      label: 'Повне імʼя',
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
        description: 'Автоматично генерується з імені',
      },
      hooks: {
        beforeValidate: [generateSlug('fullName')],
      },
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

