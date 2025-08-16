import type { CollectionConfig } from 'payload'

import { Roles, RoleLabels } from '../common/constants/roles.constant'

import { onlyAdmin } from '../common/utils/accessChecker.util'

export const Users: CollectionConfig = {
  slug: 'users',
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
