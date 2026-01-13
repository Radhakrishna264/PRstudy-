export function getSession() {
  /**
   * TEMP AUTH LOGIC
   * Phase-10 me real auth replace karega
   */

  return {
    user: {
      id: "superadmin-seed",
      role: "superadmin",
      email: process.env.SUPERADMIN_EMAIL,
      name: process.env.SUPERADMIN_NAME
    }
  };
}
