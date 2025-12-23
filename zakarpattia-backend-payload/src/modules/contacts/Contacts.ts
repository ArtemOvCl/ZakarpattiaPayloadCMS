import type { GlobalConfig } from 'payload'

const CONTACTS_SLUG = 'contacts'

export const Contacts: GlobalConfig = {
  slug: CONTACTS_SLUG,
  label: 'Контакти',
  admin: {
    description: 'Контактна інформація організації',
  },
  access: { read: () => true },
  fields: [
    {
      name: 'phones',
      label: 'Номери телефонів',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'phone',
          label: 'Номер телефону',
          type: 'text',
          required: true,
        },
        {
          name: 'contact',
          label: 'Контактна особа',
          type: 'text',
          required: false,
        },
      ],
    },
    {
      name: 'address',
      label: 'Адреса',
      type: 'text',
      required: true,
    },
    {
      name: 'emails',
      label: 'Електронні пошти',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'email',
          label: 'Email',
          type: 'email',
          required: true,
        },
        {
          name: 'contact',
          label: 'Контактна особа',
          type: 'text',
          required: false,
        },
      ],
    },
  ],
}

