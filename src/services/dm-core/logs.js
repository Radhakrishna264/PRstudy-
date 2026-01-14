// SuperAdmin read-only DM logs

export function logDMAccess({ adminId, dmId }) {
  return {
    adminId,
    dmId,
    accessType: "READ_ONLY",
    timestamp: Date.now(),
  };
}
