import { BRANDING } from "../../config/branding";

export default function Watermark({ role }) {
  if (!role) return null;

  let label = null;

  if (role === "superadmin") {
    label = `SUPERADMIN — ${BRANDING.owner}`;
  } else if (role === "admin") {
    label = "ADMIN";
  }

  if (!label) return null;

  return (
    <div className="fixed inset-0 pointer-events-none flex items-center justify-center opacity-5 z-50">
      <div className="text-6xl font-bold tracking-widest rotate-[-20deg] select-none">
        {label}
      </div>
    </div>
  );
}
