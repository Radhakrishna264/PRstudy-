import Header from "../components/Header";
import Footer from "../components/Footer";
import Watermark from "../components/Watermark";

export default function PublicLayout({ children }) {
  return (
    <div className="public-shell">
      {/* Header */}
      <Header />

      {/* Main Public Content */}
      <main className="public-content">
        {children}
      </main>

      {/* Footer */}
      <Footer />

      {/* Watermark */}
      <Watermark />
    </div>
  );
}
