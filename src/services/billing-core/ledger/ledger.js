// Immutable payment ledger (CRITICAL SYSTEM)

export function recordLedgerEntry({
  userId,
  amount,
  type, // CREDIT | DEBIT | REFUND
  referenceId,
  meta = {},
}) {
  if (!userId || !amount || !type) {
    throw new Error("Invalid ledger entry");
  }

  const entry = {
    userId,
    amount,
    type,
    referenceId,
    meta,
    createdAt: Date.now(),
    immutable: true,
  };

  // Phase-11: ACTIVE (connect DB here)
  console.log("[LEDGER]", entry);

  return entry;
}
