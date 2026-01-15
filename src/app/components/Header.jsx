"use client";

import branding from "../config/branding";

export default function Header() {
  return (
    <header className="prstudy-header">
      <div className="prstudy-header-inner">
        <div className="brand">
          <img
            src="/brand/logo.svg"
            alt="PRstudy Logo"
            className="brand-logo"
          />

          <div className="brand-text">
            <span className="brand-name">{branding.name}</span>
            <span className="brand-tagline">{branding.tagline}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
