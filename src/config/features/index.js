// src/config/features/index.js

const FEATURES = {
  auth: {
    emailLogin: true,
    mobileLogin: true,
    otpLogin: true,
    prIdLogin: true,
  },

  tests: {
    normalTests: true,
    weeklyCompetitive: true,
    vipFileTests: true,
    recheckAllowed: true,
    randomizeQuestions: true,
  },

  community: {
    enabled: true,
    publicRead: true,
    mediaAllowed: false,
    dmEnabled: true,
  },

  ai: {
    enabled: true,
    languages: ["hi", "en"],
    duringLiveTest: false,
  },

  rewards: {
    enabled: true,
    streaks: true,
    vipDays: true,
  },

  pdf: {
    watermark: true,
    premiumExport: true,
  },

  analytics: {
    enabled: true,
    adminOnlyDrilldown: true,
  },

  payments: {
    enabled: true,
    refunds: true,
    retryEnabled: true,
  },
};

export default FEATURES;
