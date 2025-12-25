import type { Block } from "payload";

export const VideoBlock: Block = {
  slug: 'video',
  labels: {
    singular: 'Ютуб відео',
    plural: 'Ютуб відео',
  },
  admin: {
    disableBlockName: true
  },
  fields: [
    {
      name: 'url',
      type: 'text',
      label: 'Посилання на відео (YouTube)',
      required: true,
    },
  ],
};
