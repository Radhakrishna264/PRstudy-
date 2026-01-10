import "./globals.css";

export const metadata = {
  title: "PRstudy",
  description: "A premium, admin-controlled study workspace",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
