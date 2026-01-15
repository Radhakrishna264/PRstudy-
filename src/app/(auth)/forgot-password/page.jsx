import { branding } from "../../../config/branding";

export const metadata = {
  title: `${branding.name} | Forgot Password`,
};

export default function ForgotPasswordPage() {
  return (
    <div className="auth-page">
      <h1>Forgot Password</h1>

      <p className="auth-slogan">{branding.slogan.text}</p>

      <form className="auth-form">
        <input type="text" placeholder="Email / Mobile / PR-ID" />
        <button type="submit">Send Reset Link / OTP</button>
      </form>

      <div className="auth-links">
        <a href="/login">Back to Login</a>
      </div>
    </div>
  );
}
