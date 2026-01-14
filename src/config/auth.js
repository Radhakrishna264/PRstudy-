/**
 * PRstudy – AUTH CONFIG
 * v1 Phase 1–9 + v2 Phase 1–11
 * FINAL – NO PLACEHOLDERS
 */

const authConfig = {
  providers: {
    email: {
      enabled: true,
      requireVerification: true,
    },

    mobile: {
      enabled: true,
      otpRequired: true,
    },

    prId: {
      enabled: true,
      prefix: "PR",
      length: 6,
      editableBy: ["superadmin"], // strict rule
    },
  },

  passwordPolicy: {
    minLength: 8,
    requireUppercase: true,
    requireLowercase: true,
    requireNumber: true,
    requireSpecialChar: false,
    maxAttempts: 5,
    lockMinutes: 15,
  },

  otpPolicy: {
    length: 6,
    expirySeconds: 300, // 5 min
    maxAttempts: 3,
    resendCooldownSeconds: 60,
  },

  session: {
    cookieName: "prstudy_session",
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    rotation: true,
  },

  roles: {
    USER: "user",
    ADMIN: "admin",
    SUPERADMIN: "superadmin",
  },

  roleRules: {
    adminRequiresApproval: true,
    superadminImmutable: true, // cannot be deleted or downgraded
  },

  accessGuards: {
    loginRequiredRoutes: [
      "/dashboard",
      "/files",
      "/tests",
      "/chat",
      "/profile",
      "/rewards",
    ],

    adminOnlyRoutes: [
      "/admin-dashboard",
    ],
  },

  security: {
    forceLogoutOnPasswordChange: true,
    forceLogoutOnRoleChange: true,
    blockSuspiciousIPs: true,
  },
};

export default authConfig;
