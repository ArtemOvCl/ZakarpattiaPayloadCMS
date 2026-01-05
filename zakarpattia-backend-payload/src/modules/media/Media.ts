import type { CollectionConfig } from 'payload'

const MEDIA_TEXT = 'Медіа'

export const Media: CollectionConfig = {
  slug: 'media',
  admin: { hideAPIURL: true },
  labels: { singular: MEDIA_TEXT, plural: MEDIA_TEXT },
  access: { read: () => true, create: () => true, update: () => true, delete: () => true },
  fields: [
    { name: 'alt', label: 'Назва файлу', type: 'text', required: true },
  ],
  hooks: {
    beforeChange: [
      async ({ data, req }) => {
        const file = data.file
        if (!file) return data

        if (file.width && file.width > 1920) {
          data.resizeOptions = { width: 1920, fit: 'inside' }
        } else {
          console.log('No resizing needed for file width:', file.width)
          data.resizeOptions = undefined
        }
        return data
      }
    ]
  },
  upload: {
    resizeOptions: { width: 1920, fit: 'inside' }, // обов’язково TS типізація
    formatOptions: { format: 'webp' },
  }
}
