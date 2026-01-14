// AI usage rules & guards (v1 + v2 strict)

export function canUseAI({ user, context, systemFlags }) {
  // Global kill switch (SuperAdmin)
  if (systemFlags?.AI_DISABLED === true) {
    return { allowed: false, reason: "AI globally disabled by SuperAdmin" };
  }

  // AI not allowed during LIVE TEST
  if (context?.mode === "LIVE_TEST") {
    return { allowed: false, reason: "AI not allowed during live test" };
  }

  // Guests not allowed
  if (!user || user.role === "GUEST") {
    return { allowed: false, reason: "Login required for AI help" };
  }

  // Rate limit (basic safety)
  if (user.aiUsageCountToday >= systemFlags.AI_DAILY_LIMIT) {
    return { allowed: false, reason: "Daily AI usage limit reached" };
  }

  return { allowed: true };
}
