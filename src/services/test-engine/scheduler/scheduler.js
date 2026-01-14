// Test scheduler (weekly / timed tests)

export function scheduleTest({
  testId,
  startTime,
  endTime,
}) {
  if (startTime >= endTime) {
    throw new Error("Invalid test time window");
  }

  return {
    testId,
    startTime,
    endTime,
    status: "SCHEDULED",
  };
}
