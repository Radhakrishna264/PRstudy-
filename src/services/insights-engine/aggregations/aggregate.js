// Analytics aggregation engine

export function aggregateMetrics({ type, data }) {
  return {
    type,
    count: data.length,
    generatedAt: Date.now(),
  };
}
