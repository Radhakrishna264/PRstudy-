import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "PRstudy",
  description: "PRstudy - Premium Admin-Controlled Study Workspace",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#050814" />
      </head>
      <body>
        {/* GLOBAL HEADER */}
        <Header />

        {/* PAGE CONTENT */}
        {children}
      </body>
    </html>
  );
}
