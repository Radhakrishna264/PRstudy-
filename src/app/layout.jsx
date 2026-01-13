import "./globals.css";

export const metadata = {
  title: "PRstudy",
  description: "Premium SaaS Learning Platform"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
