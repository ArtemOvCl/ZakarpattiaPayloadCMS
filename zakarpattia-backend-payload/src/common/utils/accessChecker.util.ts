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

export const isAuthenticated: Access = ({ req }) => {
  const user = req.user as PayloadUser | null;
  return !!user;
};

export const cannotEditSelf: Access = ({ req, id }) => {
  const user = req.user as PayloadUser | null;

  if (!user) return false;
  
  return user.id !== id; 
};

export const canEditOtherUsers: Access = ({ req, id }) => {
  const user = req.user as PayloadUser | null;
  if (!user) return false;

  if (user.role === Roles.Admin) return true; 

  if (user.id === id) return false; 

  return false;
};
