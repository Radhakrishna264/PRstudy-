
// Test evaluation engine

export function evaluateTest({
  answers,
  correctAnswers,
}) {
  let score = 0;

  answers.forEach((ans, index) => {
    if (ans === correctAnswers[index]) {
      score += 1;
    }
  });

  return {
    score,
    total: correctAnswers.length,
    evaluatedAt: Date.now(),
  };
}
