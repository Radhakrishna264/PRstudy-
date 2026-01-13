import "./globals.css";
import Watermark from "./components/Watermark";
import Header from "./components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Watermark role="PUBLIC" />
        {children}
      </body>
    </html>
  );
}
