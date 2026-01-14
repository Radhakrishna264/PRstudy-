// FINAL CAPABILITIES (Plan + Role based)

export const CAPABILITIES = {
  FREE: {
    testsPerDay: 1,
    aiHelp: false,
    downloads: false,
  },

  VIP: {
    testsPerDay: 5,
    aiHelp: true,
    downloads: true,
  },

  PRO_VIP: {
    testsPerDay: Infinity,
    aiHelp: true,
    downloads: true,
  },
};

export function getCapabilities(plan) {
  return CAPABILITIES[plan] || CAPABILITIES.FREE;
}
