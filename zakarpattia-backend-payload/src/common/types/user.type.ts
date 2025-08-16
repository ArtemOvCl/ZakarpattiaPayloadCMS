import { Role } from "../constants/roles.constant"

export interface PayloadUser {
  id: string
  email: string
  role: Role
}