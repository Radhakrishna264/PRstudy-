import { branding } from "../../../config/branding";

export const metadata = {
  title: `${branding.name} | Login`,
};

export default function LoginPage() {
  return (
    <div className="auth-page">
      <h1>Login</h1>

      <p className="auth-slogan">{branding.slogan}</p>

      <form className="auth-form">
        <input type="text" placeholder="Email / Mobile / PR-ID" />
        <input type="password" placeholder="Password / OTP" />
        <button type="submit">Login</button>
      </form>

      <div className="auth-links">
        <a href="/forgot-password">Forgot password?</a>
        <a href="/signup">Create new account</a>
        <a href="/search-account">Search account</a>
      </div>
    </div>
  );
}
