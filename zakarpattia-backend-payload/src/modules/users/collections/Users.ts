import type { CollectionConfig } from 'payload'

import { Roles, RoleLabels } from '../../shared/constants/roles.constant'

import { onlyAdmin } from '../../shared/utils/accessChecker.util'

export const Users: CollectionConfig = {
  slug: 'users',
  labels: {
    singular: 'Користувач',
    plural: 'Користувачі',
  },
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  access: {
    read: onlyAdmin,
    create: onlyAdmin,
    update: onlyAdmin,
    delete: onlyAdmin,
  },
  fields: [
    {
    name: 'role',
    label: 'Роль',
    type: 'select',
    required: true,
    defaultValue: Roles.Editor,
    options: Object.entries(RoleLabels).map(([value, label]) => ({
      value,
      label,
    })),
    },
  ]
}
