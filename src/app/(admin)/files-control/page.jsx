import { redirect } from "next/navigation";
import { getSession } from "../../../lib/session";

export default async function FilesControlPage() {
  const session = await getSession();
  if (!session) redirect("/login");

  const role = session.user?.role;
  if (role !== "admin" && role !== "superadmin") redirect("/dashboard");

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Files Control</h1>

      <p className="text-sm text-gray-600 mb-6">
        Notes, Tests, Books, VIP files, Watermarked PDFs.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <Action title="Upload File" desc="PDF / Docs / Notes" />
        <Action title="Visibility Rules" desc="Free / VIP / Pro VIP" />
        <Action title="Watermarking" desc="Dynamic watermark & logging" />
        <Action title="AI File Processing" desc="SuperAdmin only" />
      </div>
    </section>
  );
}

function Action({ title, desc }) {
  return (
    <div className="border rounded p-4 bg-white">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}
