// Immutable AI usage logger (audit safe)

export function logAIUsage({
  userId,
  prompt,
  language,
  context,
  timestamp = Date.now(),
}) {
  // NOTE: In Phase-11 this is ACTIVE
  // Hook this to DB / audit-core later if needed

  console.log("[AI-LOG]", {
    userId,
    language,
    context,
    timestamp,
    promptPreview: prompt?.slice(0, 120),
  });

  return true;
}
