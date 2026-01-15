import { branding } from "../../../config/branding";

export const metadata = {
  title: `${branding.name} | Sign Up`,
};

export default function SignupPage() {
  return (
    <div className="auth-page">
      <h1>Create Account</h1>

      <p className="auth-slogan">{branding.slogan.text}</p>

      <form className="auth-form">
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="tel" placeholder="Mobile Number" />
        <input type="password" placeholder="Create Password" />
        <button type="submit">Sign Up</button>
      </form>

      <div className="auth-links">
        <a href="/login">Already have an account? Login</a>
      </div>
    </div>
  );
}
