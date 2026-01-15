import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Watermark from "./components/Watermark";

export const metadata = {
  title: "PRstudy",
  description: "PRstudy - Smart Learning & Test Platform",

  icons: {
    icon: "/brand/icon-neon.svg",
    shortcut: "/brand/icon-neon.svg",
    apple: "/brand/icon-neon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="theme-neon" suppressHydrationWarning>
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
