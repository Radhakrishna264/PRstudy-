import { branding } from "../../config/branding";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export const metadata = {
  title: `${branding.name} | Dashboard`,
};

export default function AppLayout({ children }) {
  return (
    <div className="app-shell">
      <Header />

      <div className="app-body">
        <Sidebar />
        <main className="app-content">
          <p className="app-slogan">{branding.slogan}</p>
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
}
