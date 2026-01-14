// Payment retry logic (configurable)

export function retryPayment({
  paymentId,
  attempt,
  maxAttempts,
}) {
  if (attempt >= maxAttempts) {
    return { success: false, reason: "Retry limit exceeded" };
  }

  console.log("[PAYMENT-RETRY]", {
    paymentId,
    attempt: attempt + 1,
  });

  return { success: true };
}
