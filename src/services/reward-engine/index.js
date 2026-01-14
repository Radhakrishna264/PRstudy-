// Reward Engine – FINAL (Phase-11)

const rewardConfig = {
  pointsPerTest: 10,
  streakBonus: 5,
  maxDailyPoints: 100,
};

export function calculateRewards({
  userId,
  testsAttempted,
  correctAnswers,
  streakDays,
}) {
  if (!userId) {
    throw new Error("User not found for rewards");
  }

  let points =
    testsAttempted * rewardConfig.pointsPerTest +
    correctAnswers * 2;

  if (streakDays >= 3) {
    points += rewardConfig.streakBonus;
  }

  if (points > rewardConfig.maxDailyPoints) {
    points = rewardConfig.maxDailyPoints;
  }

  return {
    userId,
    pointsEarned: points,
    streakDays,
    calculatedAt: Date.now(),
  };
}

export function redeemRewards({ userId, points }) {
  if (points <= 0) {
    throw new Error("Invalid reward points");
  }

  return {
    userId,
    redeemedPoints: points,
    status: "REDEEMED",
    redeemedAt: Date.now(),
  };
}
