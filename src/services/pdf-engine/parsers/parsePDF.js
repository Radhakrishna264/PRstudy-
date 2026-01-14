// PDF parsing engine

export function parsePDF({ fileName, rawText }) {
  if (!rawText) {
    throw new Error("Empty PDF content");
  }

  const lines = rawText.split("\n").filter(Boolean);

  return {
    fileName,
    questions: lines.map((line, index) => ({
      id: index + 1,
      text: line.trim(),
    })),
    parsedAt: Date.now(),
  };
}
