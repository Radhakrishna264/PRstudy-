
/*
  Version Guards
  --------------
  Ensures:
  - Old data doesn't break new logic
  - Future migrations stay safe
*/

import { CURRENT_VERSION } from "../current";

export function isSchemaCompatible(schemaVersion) {
  if (schemaVersion == null) return false;

  return schemaVersion === CURRENT_VERSION.schema;
}

export function assertSchemaCompatibility(schemaVersion) {
  if (!isSchemaCompatible(schemaVersion)) {
    throw new Error(
      `Schema mismatch: expected ${CURRENT_VERSION.schema}, got ${schemaVersion}`
    );
  }
}

/*
  Used by:
  - test-engine
  - billing-core
  - pdf-engine
  - migrations runner
*/
