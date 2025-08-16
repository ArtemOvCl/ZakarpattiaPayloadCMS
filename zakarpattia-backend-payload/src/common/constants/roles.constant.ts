export const Roles = {
  Admin: 'admin',
  Editor: 'editor',
} as const

export type Role = typeof Roles[keyof typeof Roles]

export const RoleLabels: Record<Role, string> = {
  [Roles.Admin]: 'Адміністратор',
  [Roles.Editor]: 'Редактор',
}