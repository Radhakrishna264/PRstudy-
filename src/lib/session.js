export async function getSession() {
  // Phase-9 bootstrap session (temporary)
  return {
    user: {
      role: "superadmin", // superadmin | admin | user
      name: "Praveen Rajput",
    },
  };
}
