// Watermark engine (final)

export function applyWatermark({
  pdfId,
  role,
  userId,
}) {
  return {
    pdfId,
    watermarkText:
      role === "SUPERADMIN"
        ? "PRSTUDY | Praveen Rajput"
        : `PRSTUDY | ${userId}`,
    appliedAt: Date.now(),
  };
}
