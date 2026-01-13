import "./globals.css";
import Header from "@/app/components/Header";

export const metadata = {
  title: "PRstudy",
  description: "Premium SaaS Learning Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
