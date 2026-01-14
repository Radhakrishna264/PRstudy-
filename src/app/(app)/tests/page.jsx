import { branding } from "../../../config/branding";

export const metadata = {
  title: `Tests | ${branding.name}`,
};

export default function TestsPage() {
  return (
    <section>
      <h1>Tests & Exams</h1>
      <p>{branding.slogan}</p>

      <ul>
        <li>Live exams</li>
        <li>Previous year tests</li>
        <li>Practice tests</li>
      </ul>
    </section>
  );
}
