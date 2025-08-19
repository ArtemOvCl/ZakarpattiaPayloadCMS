import type { CollectionConfig } from 'payload'

export const News: CollectionConfig = {
  slug: 'news',
  labels: {
    singular: 'Новина',
    plural: 'Новини',
  },
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true
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
    },
    {
      name: 'content',
      label: 'Контент',
      type: 'richText',
      required: true,
    },
  ],
}
