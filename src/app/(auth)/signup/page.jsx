import Link from "next/link";
import { branding } from "../../../config/branding";

export const metadata = {
  title: `Sign Up | ${branding.name}`,
};

export default function SignupPage() {
  return (
    <div className="auth-container">
      <h1 className="auth-title">Create Account</h1>
      <p className="auth-slogan">{branding.slogan}</p>

      <form className="auth-form">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" />
        <input type="tel" placeholder="Mobile Number" />
        <input type="password" placeholder="Password" required />

        <button type="submit">Sign Up</button>
      </form>

      <div className="auth-links">
        <Link href="/login">Already have an account? Login</Link>
      </div>
    </div>
  );
}
