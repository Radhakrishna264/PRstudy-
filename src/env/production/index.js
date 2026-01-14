/**
 * Environment: PRODUCTION
 * FINAL LIVE ENV — NO PLACEHOLDERS
 */

const productionEnv = {
  APP_ENV: "production",

  APP_URL: "https://prstudy.app",

  AUTH: {
    SESSION_SECRET: process.env.SESSION_SECRET,
    SESSION_EXPIRY_DAYS: 15,
  },

  DATABASE: {
    PROVIDER: "mongodb",
    URI: process.env.DATABASE_URL,
  },

  PAYMENTS: {
    ENABLED: true,
    MODE: "live",
    RETRY_LIMIT: 5,
    REFUND_WINDOW_DAYS: 15,
  },

  AI: {
    ENABLED: true,
    LANGUAGES: ["hi", "en"],
  },

  WATERMARK: {
    ENABLED: true,
    STRENGTH: "high",
    INCLUDE: ["userId", "timestamp", "deviceHash"],
  },

  LOGGING: {
    LEVEL: "warn",
  },

  SECURITY: {
    FORCE_LOGOUT_ON_PASSWORD_CHANGE: true,
    GLOBAL_KILL_SWITCH: false,
  },
};

export default productionEnv;
