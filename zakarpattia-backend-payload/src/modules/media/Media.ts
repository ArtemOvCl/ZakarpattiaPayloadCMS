import type { CollectionConfig } from 'payload'

const MEDIA_TEXT = 'Медіа'

export const Media: CollectionConfig = {
  slug: 'media',
  admin:{
    hideAPIURL: true,
  },
  labels: {
    singular: MEDIA_TEXT,
    plural: MEDIA_TEXT,
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'alt',
      label: 'Назва файлу',
      type: 'text',
      required: true,
    },
  ],
  upload: true
}