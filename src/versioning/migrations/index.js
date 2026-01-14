/*
  Migration Registry
  ------------------
  NOTE:
  - No auto-run in production
  - SuperAdmin approval required (policy layer)
*/

const migrations = {
  1: async function initialSchema() {
    // v1 base schema – already live
    return true;
  }

  /*
  Future example:
  2: async function upgradeRewardsSystem() {}
  */
};

export async function runMigration(fromVersion, toVersion) {
  if (fromVersion === toVersion) return true;

  for (let v = fromVersion + 1; v <= toVersion; v++) {
    const migrate = migrations[v];
    if (!migrate) {
      throw new Error(`Missing migration for version ${v}`);
    }
    await migrate();
  }

  return true;
}

export function hasMigration(version) {
  return !!migrations[version];
}
