// Core AI Tutor Engine (learning-only)

export async function getAITutorResponse({
  prompt,
  language = "auto",
}) {
  // Language auto detect (simple)
  const detectedLanguage =
    language === "auto"
      ? /[अ-ह]/.test(prompt)
        ? "hi"
        : "en"
      : language;

  // ⚠️ STRICT: Learning help only (NO answers)
  const systemInstruction =
    detectedLanguage === "hi"
      ? "Sirf concept samjhao, direct answer mat do."
      : "Explain concepts only. Do not give direct answers.";

  // Placeholder for real LLM call
  // In production this connects to actual AI provider
  const responseText =
    detectedLanguage === "hi"
      ? "Main aapko is topic ka concept simple shabdon me samjhaata hoon..."
      : "Let me explain the concept step by step in a simple way...";

  return {
    language: detectedLanguage,
    content: responseText,
    systemInstruction,
  };
}
