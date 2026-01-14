import { branding } from "../../../config/branding";

export const metadata = {
  title: `Profile | ${branding.name}`,
};

export default function ProfilePage() {
  return (
    <section>
      <h1>My Profile</h1>
      <p>{branding.slogan}</p>

      <p>User details, plan, history, settings.</p>
    </section>
  );
}
