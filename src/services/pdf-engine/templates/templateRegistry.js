// PDF templates registry

const templates = {
  STANDARD: {
    name: "Standard",
    margin: "normal",
  },
  PREMIUM: {
    name: "Premium",
    margin: "wide",
  },
  EXAM: {
    name: "Exam Sheet",
    margin: "compact",
  },
};

export function getTemplate(templateKey) {
  return templates[templateKey] || templates.STANDARD;
}
