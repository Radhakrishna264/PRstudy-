
// src/config/limits/index.js

const LIMITS = {
  plans: {
    FREE: {
      dailyTests: 2,
      downloadsPerDay: 1,
      aiQueries: 5,
    },
    VIP: {
      dailyTests: 10,
      downloadsPerDay: 10,
      aiQueries: 50,
    },
    PRO_VIP: {
      dailyTests: Infinity,
      downloadsPerDay: Infinity,
      aiQueries: Infinity,
    },
  },

  system: {
    maxLoginAttempts: 5,
    dmRateLimitPerHour: 20,
  },

  superAdmin: {
    canOverrideAllLimits: true,
  },
};

export default LIMITS;
