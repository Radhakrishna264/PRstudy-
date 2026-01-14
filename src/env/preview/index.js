/**
 * Environment: PREVIEW
 * Used for staging / vercel preview builds
 */

const previewEnv = {
  APP_ENV: "preview",

  APP_URL: "https://preview.prstudy.app",

  AUTH: {
    SESSION_SECRET: process.env.SESSION_SECRET,
    SESSION_EXPIRY_DAYS: 7,
  },

  DATABASE: {
    PROVIDER: "mongodb",
    URI: process.env.DATABASE_URL,
  },

  PAYMENTS: {
    ENABLED: false, // preview me OFF
    MODE: "sandbox",
  },

  AI: {
    ENABLED: true,
  },

  WATERMARK: {
    ENABLED: true,
    STRENGTH: "medium",
  },

  LOGGING: {
    LEVEL: "info",
  },
};

export default previewEnv;
