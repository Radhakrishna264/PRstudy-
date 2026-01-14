// Report system (no auto delete)

export function reportPost({ postId, reason, reportedBy }) {
  return {
    postId,
    reason,
    reportedBy,
    reportedAt: Date.now(),
  };
}
