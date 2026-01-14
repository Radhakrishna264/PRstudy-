import branding from "../../config/branding";

export default function Watermark({ role = "USER" }) {
  return (
    <div
      className="prstudy-watermark"
      data-role={role}
    >
      <span className="wm-brand">{branding.name}</span>
      <span className="wm-slogan">{branding.slogan.text}</span>
    </div>
  );
}
