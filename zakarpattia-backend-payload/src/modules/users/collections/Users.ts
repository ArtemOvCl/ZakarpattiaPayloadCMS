import type { CollectionConfig } from 'payload'

import { Roles, RoleLabels } from '../../shared/constants/roles.constant'

import { onlyAdmin } from '../../shared/utils/accessChecker.util'

import { cannotCreateUsersIfTwoExist, cannotEditSelf } from '../utils/user-access.util'

import { USER_KEY } from '../constants/user.constants'

export const Users: CollectionConfig = {
  slug: USER_KEY,
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
    create: cannotCreateUsersIfTwoExist,
    update: async ({ req, id }) => {

      return (await cannotEditSelf({ req, id })) && onlyAdmin({ req });
    },
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