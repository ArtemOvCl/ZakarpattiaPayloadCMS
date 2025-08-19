import type { Block } from "payload";

import { ImageWithCaption } from "./imageWithCaption.block";

export const GalleryBlock: Block = {
  slug: 'gallery',
  labels: {
    singular: 'Галерея',
    plural: 'Галереї',
  },
  admin: {
    disableBlockName: true
  },
  fields: [
    {
      name: 'items',
      type: 'blocks', 
      blocks: [
        ImageWithCaption, 
      ],
      label: 'Зображення з підписами',
    },
  ],
};
