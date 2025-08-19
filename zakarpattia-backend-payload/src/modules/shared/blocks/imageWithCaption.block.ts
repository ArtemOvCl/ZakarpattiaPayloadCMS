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
    },
    {
      name: 'position',
      type: 'select',
      options: [
        { label: 'Full width', value: 'full' },
        { label: 'Left', value: 'left' },
        { label: 'Right', value: 'right' },
      ],
      defaultValue: 'full',
    },
    {
      name: 'size',
      type: 'number',
      min: 10,
      max: 100,
      defaultValue: 100, 
    },
  ],
}
