import Link from "next/link";
import { branding } from "../../../config/branding";

export const metadata = {
  title: `Login | ${branding.name}`,
};

export default function LoginPage() {
  return (
    <div className="auth-container">
      <h1 className="auth-title">Login</h1>
      <p className="auth-slogan">{branding.slogan}</p>

      <form className="auth-form">
        <input type="text" placeholder="Email / Mobile / PR-ID" required />
        <input type="password" placeholder="Password" required />

        <button type="submit">Login</button>
      </form>

      <div className="auth-links">
        <Link href="/forgot-password">Forgot password?</Link>
        <Link href="/search-account">Search account</Link>
        <Link href="/signup">Create new account</Link>
      </div>
    </div>
  );
}
