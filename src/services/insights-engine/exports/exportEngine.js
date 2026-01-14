
// Export analytics (CSV / PDF)

export function exportReport({ format, payload }) {
  return {
    format,
    size: JSON.stringify(payload).length,
    exportedAt: Date.now(),
  };
}
