// Placeholder session resolver (real auth comes later)
export function getSession() {
  return {
    user: {
      id: "demo",
      role: "superadmin" // TEMP for development
    }
  };
}
