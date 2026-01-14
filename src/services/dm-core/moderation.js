// DM moderation (report-based only)

export function flagDM({ dmId, reason, reportedBy }) {
  return {
    dmId,
    reason,
    reportedBy,
    flaggedAt: Date.now(),
  };
}
