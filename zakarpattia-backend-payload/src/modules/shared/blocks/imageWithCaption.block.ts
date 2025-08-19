import { Block } from 'payload'

export const ImageWithCaption: Block = {
  slug: 'imageWithCaption',
  labels: {
    singular: 'Зображення з підписом',
    plural: 'Зображення з підписами',
  },
  admin: {
    disableBlockName: true,
  },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'caption',
      type: 'text',
      required: false,
    }
  ],
}
