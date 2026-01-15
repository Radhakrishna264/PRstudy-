"use client";

import branding from "../../config/branding";

export default function Header() {
  return (
    <header className="prstudy-header">
      <div className="prstudy-header-inner">
        <div className="brand">
          <span className="brand-name">{branding.name}</span>
          <span className="brand-tagline">{branding.tagline.text}</span>
        </div>

        <div className="brand-slogan">
          {branding.slogan.text}
        </div>
      </div>
    </header>
  );
}
