import { branding } from "../../../config/branding";

export const metadata = {
  title: `Files Hub | ${branding.name}`,
};

export default function FilesPage() {
  return (
    <section>
      <h1>Files Hub</h1>
      <p>{branding.slogan}</p>

      <p>Notes, PDFs, practice material, downloads.</p>
    </section>
  );
}
