import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Watermark from "./components/Watermark";

export const metadata = {
  title: "PRstudy",
  description: "PRstudy - Smart Learning & Test Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="app-root public-shell">
          <Header />

          <main className="public-content">
            {children}
          </main>

          <Footer />
          <Watermark />
        </div>
      </body>
    </html>
  );
}
