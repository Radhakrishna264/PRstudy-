import { branding } from "../../../config/branding";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

export const metadata = {
  title: `Dashboard | ${branding.name}`,
  description: branding.tagline,
};

export default function DashboardLayout({ children }) {
  return (
    <div className="dashboard-shell">
      {/* Top Header */}
      <Header />

      {/* Body */}
      <div className="dashboard-body">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="dashboard-content">
          {/* Global Sanskrit Slogan (Brand Rule) */}
          <div className="brand-slogan">
            {branding.slogan}
          </div>

          {children}
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
