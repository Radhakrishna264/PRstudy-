// Admin / SuperAdmin moderation

export function moderatePost({
  postId,
  action,
  moderatorRole,
}) {
  if (moderatorRole !== "ADMIN" && moderatorRole !== "SUPERADMIN") {
    throw new Error("Unauthorized moderation");
  }

  return {
    postId,
    action, // HIDE | DELETE
    moderatedAt: Date.now(),
  };
}
