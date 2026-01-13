export const ROLES = {
  USER: "user",
  ADMIN: "admin",
  SUPERADMIN: "superadmin"
};

export const ROLE_ORDER = [ROLES.USER, ROLES.ADMIN, ROLES.SUPERADMIN];

export function isAtLeast(role, required) {
  return ROLE_ORDER.indexOf(role) >= ROLE_ORDER.indexOf(required);
}
