import branding from "../../config/branding";

export default function Footer() {
  return (
    <footer className="prstudy-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <strong>{branding.name}</strong>
        </div>

        <div className="footer-slogan">
          {branding.slogan.text}
        </div>

        <div className="footer-copy">
          © {new Date().getFullYear()} {branding.owner.name}
        </div>
      </div>
    </footer>
  );
}
