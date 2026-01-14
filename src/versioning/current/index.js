/*
  Current Version Descriptor
  --------------------------
  Single source of truth for:
  - App version
  - Schema version
  - Compatibility flags
*/

export const CURRENT_VERSION = {
  app: "1.0.0",          // Human-readable
  schema: 1,             // DB / data schema version
  codename: "Radha-v1",  // Internal reference

  releasedAt: "2026-01-14",

  compatibility: {
    minClient: "1.0.0",
    breaking: false
  }
};

export function getCurrentVersion() {
  return CURRENT_VERSION;
}
