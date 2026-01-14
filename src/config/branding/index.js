/*
 PRstudy – Branding Configuration (FINAL)

 Locked Scope:
 - v1 Phase 1–9
 - v2 Phase 1–10

 NOTE:
 - This file is the SINGLE SOURCE OF TRUTH for branding
 - Any UI, metadata, watermark, SEO, or PDF engine must read from here
*/

const branding = {
  name: "PRstudy",

  tagline: "Smart Learning & Test Platform",

  slogan: {
    text: "भवत: लक्ष्यं भवत: जीवनम् अस्ति।",
    language: "sanskrit",
    meaning: "Your goal is your life.",
    locked: true
  },

  owner: {
    role: "SUPERADMIN",
    name: "Praveen Rajput"
  },

  usage: {
    header: true,
    footer: true,
    landingPage: true,
    authPages: true,
    dashboard: true,
    certificates: true,
    pdfs: true,
    watermark: true,
    seo: true
  },

  protection: {
    editableBy: ["SUPERADMIN"],
    mutable: false
  }
};

export default branding;
