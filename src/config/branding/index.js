// src/config/branding/index.js

const BRANDING = {
  name: "PRstudy",
  legalName: "PRstudy Learning Platform",
  owner: "Praveen Rajput",

  logo: {
    primary: "/brand/logo.svg",
    icon: "/brand/icon-neon.svg",
  },

  theme: {
    primaryColor: "#7C3AED", // violet
    accentColor: "#22D3EE",  // cyan
    darkModeDefault: true,
  },

  watermark: {
    enabled: true,
    text: "PRstudy",
    dynamic: true, // userId + timestamp injected later
  },

  contact: {
    email: "support@prstudy.in",
    website: "https://prstudy.in",
  },
};

export default BRANDING;
