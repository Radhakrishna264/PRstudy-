import Link from "next/link";
import { branding } from "../../../config/branding";

export const metadata = {
  title: `Search Account | ${branding.name}`,
};

export default function SearchAccountPage() {
  return (
    <div className="auth-container">
      <h1 className="auth-title">Search Your Account</h1>
      <p className="auth-slogan">{branding.slogan}</p>

      <form className="auth-form">
        <input
          type="text"
          placeholder="Enter Email / Mobile / PR-ID"
          required
        />
        <button type="submit">Search</button>
      </form>

      <div className="auth-links">
        <Link href="/login">Back to Login</Link>
      </div>
    </div>
  );
}
