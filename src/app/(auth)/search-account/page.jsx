import { branding } from "../../../config/branding";

export const metadata = {
  title: `${branding.name} | Search Account`,
};

export default function SearchAccountPage() {
  return (
    <div className="auth-page">
      <h1>Search Account</h1>

      <p className="auth-slogan">{branding.slogan}</p>

      <form className="auth-form">
        <input
          type="text"
          placeholder="Enter Email / Mobile to find your PR-ID"
        />
        <button type="submit">Search</button>
      </form>

      <div className="auth-links">
        <a href="/login">Back to Login</a>
      </div>
    </div>
  );
}
