import type { CollectionConfig } from 'payload'


import { lexicalEditor, 
         FixedToolbarFeature, 
         InlineToolbarFeature,
         BlocksFeature } from '@payloadcms/richtext-lexical'

import { ImageWithCaption } from '../shared/blocks/imageWithCaption.block'
import { VideoBlock } from '../shared/blocks/video.block'
import { GalleryBlock } from '../shared/blocks/gallery.block'

export const News: CollectionConfig = {
  slug: 'news',
  labels: {
    singular: 'Новина',
    plural: 'Новини',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'headerImage', 'createdAt'],
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
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
        ...defaultFeatures,
        BlocksFeature({
            blocks: [
              ImageWithCaption,
              VideoBlock,
              GalleryBlock
            ],
          }),
        InlineToolbarFeature(),
        FixedToolbarFeature(),
    ],
  }),
    },
  ],
}
