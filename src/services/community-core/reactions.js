// Likes / reactions

export function reactToPost({ postId, userId, type }) {
  return {
    postId,
    userId,
    type, // LIKE | UPVOTE
    reactedAt: Date.now(),
  };
}
