// Community post engine

export function createPost({ userId, content }) {
  return {
    id: crypto.randomUUID(),
    userId,
    content,
    createdAt: Date.now(),
  };
}
