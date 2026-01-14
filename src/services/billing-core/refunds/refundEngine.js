// Refund engine (SuperAdmin controlled)

export function processRefund({
  userId,
  paymentId,
  amount,
  reason,
  requestedBy,
}) {
  if (requestedBy !== "SUPERADMIN") {
    throw new Error("Refunds allowed only by SuperAdmin");
  }

  const refund = {
    userId,
    paymentId,
    amount,
    reason,
    status: "REFUNDED",
    refundedAt: Date.now(),
  };

  console.log("[REFUND]", refund);
  return refund;
}
