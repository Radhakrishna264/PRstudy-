import Link from "next/link";
import { branding } from "../../../config/branding";

export const metadata = {
  title: `Reset Password | ${branding.name}`,
};

export default function ForgotPasswordPage() {
  return (
    <div className="auth-container">
      <h1 className="auth-title">Reset Password</h1>
      <p className="auth-slogan">{branding.slogan}</p>

      <form className="auth-form">
        <input type="text" placeholder="Email / Mobile / PR-ID" required />
        <button type="submit">Send Reset Link</button>
      </form>

      <div className="auth-links">
        <Link href="/login">Back to Login</Link>
      </div>
    </div>
  );
}
