// System alerts (abuse, payment, AI misuse)

export function createAlert({ level, message, target }) {
  return {
    level, // INFO | WARN | CRITICAL
    message,
    target,
    createdAt: Date.now(),
  };
}
