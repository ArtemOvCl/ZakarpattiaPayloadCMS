import { LinkFeature } from '@payloadcms/richtext-lexical'

export const CustomLinkFeature = LinkFeature({
  fields: () => [
    {
      name: 'url',
      label: 'Посилання',
      type: 'text',
      required: true,
    },
    {
      name: 'openInNewTab',
      label: 'Відкривати в новій вкладці',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
})
