/**
 * Environment: LOCAL
 * Used for local development only
 * NEVER imported directly in runtime
 */

const localEnv = {
  APP_ENV: "local",

  APP_URL: "http://localhost:3000",

  AUTH: {
    SESSION_SECRET: "local_dev_secret_change_me",
    SESSION_EXPIRY_DAYS: 7,
  },

  DATABASE: {
    PROVIDER: "mongodb",
    URI: "mongodb://127.0.0.1:27017/prstudy_local",
  },

  PAYMENTS: {
    ENABLED: false,
    MODE: "disabled",
  },

  AI: {
    ENABLED: false,
  },

  WATERMARK: {
    ENABLED: true,
    STRENGTH: "low",
  },

  LOGGING: {
    LEVEL: "debug",
  },
};

export default localEnv;
