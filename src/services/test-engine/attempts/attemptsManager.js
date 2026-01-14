// Test attempt control

export function createAttempt({
  userId,
  testId,
  maxAttempts,
  usedAttempts,
}) {
  if (usedAttempts >= maxAttempts) {
    throw new Error("Attempt limit reached");
  }

  return {
    userId,
    testId,
    attemptNumber: usedAttempts + 1,
    startedAt: Date.now(),
  };
}
