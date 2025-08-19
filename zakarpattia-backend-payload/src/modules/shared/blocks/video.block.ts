import type { Block } from "payload";

export const VideoBlock: Block = {
  slug: 'video',
  labels: {
    singular: 'Відео',
    plural: 'Відео',
  },
  admin: {
    disableBlockName: true
  },
  fields: [
    {
      name: 'url',
      type: 'text',
      label: 'Посилання на відео (YouTube, Vimeo тощо)',
      required: true,
    },
  ],
};
