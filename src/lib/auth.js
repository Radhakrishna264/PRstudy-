// FINAL AUTH CORE – Phase-11 READY

import { ROLES } from "./roles/index";
import { hasPermission } from "./permissions/index";
import { getCapabilities } from "./capabilities/index";

export function authorize({
  session,
  requiredPermission,
}) {
  if (!session) {
    return { allowed: false, reason: "NO_SESSION" };
  }

  if (!hasPermission(session.role, requiredPermission)) {
    return { allowed: false, reason: "NO_PERMISSION" };
  }

  return { allowed: true };
}

export function bootstrapSuperAdmin() {
  return {
    userId: "PR-SUPERADMIN",
    role: ROLES.SUPERADMIN,
    plan: "PRO_VIP",
    loggedInAt: Date.now(),
  };
}

export function resolveUserContext(session) {
  const capabilities = getCapabilities(session.plan);

  return {
    userId: session.userId,
    role: session.role,
    plan: session.plan,
    capabilities,
  };
}
