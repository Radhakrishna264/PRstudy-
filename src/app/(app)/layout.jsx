import { branding } from "../../config/branding";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Watermark from "../components/Watermark";

/*
 PRstudy — App Layout (FINAL)

 Covers:
 - User App Area
 - Dashboard
 - Files
 - Tests
 - Chat
 - Rewards
 - Profile

 IMPORTANT:
 - No auth logic here
 - No role checks here
 - No redirects here
 - Middleware controls access
*/

export const metadata = {
  title: `${branding.name} | Dashboard`,
  description: branding.description,
};

export default function AppLayout({ children }) {
  return (
    <div className="app-shell">
      {/* Top Header */}
      <Header />

      {/* Main Body */}
      <div className="app-body">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <main className="app-content">
          {/* Global Sanskrit Slogan */}
          <p className="app-slogan">
            {branding.slogan.text}
          </p>

          {/* Route Content */}
          {children}
        </main>
      </div>

      {/* Footer */}
      <Footer />

      {/* Global Dynamic Watermark */}
      <Watermark />
    </div>
  );
}
