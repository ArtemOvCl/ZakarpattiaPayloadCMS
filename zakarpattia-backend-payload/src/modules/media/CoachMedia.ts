import type { CollectionConfig } from 'payload'

const COACH_PHOTO_TEXT = 'Фото тренера'

export const CoachPhotos: CollectionConfig = {
  slug: 'coach-photos',
  admin: {
    hideAPIURL: true,
  },
  labels: {
    singular: COACH_PHOTO_TEXT,
    plural: COACH_PHOTO_TEXT,
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
      label: 'Назва фото',
      type: 'text',
      required: true,
      admin: {
        placeholder: 'Наприклад: Іван Задорожний',
      },
    },
  ],
  upload: {
    imageSizes: [
      {
        name: 'profile',    
        width: 600,    
        height: 600,
        crop: 'smart'
      },
    ],
  },
}
