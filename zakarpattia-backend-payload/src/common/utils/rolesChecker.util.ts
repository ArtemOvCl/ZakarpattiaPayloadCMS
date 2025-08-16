import { Access } from "payload";

import { PayloadUser } from "../types/user.type";

import { Role, Roles } from "../constants/roles.constant";

export const hasRole =
  (role: Role): Access =>
  ({ req }) => {
    const user = req.user as PayloadUser | null;
    return user?.role === role;
  };

export const onlyAdmin = hasRole(Roles.Admin);
