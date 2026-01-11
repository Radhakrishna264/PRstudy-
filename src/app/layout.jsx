import "./globals.css";

export const metadata = {
  title: "PRstudy",
  description: "PRstudy – Premium Admin-Controlled Study Workspace",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Viewport for mobile-first SaaS */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Basic SEO */}
        <meta name="theme-color" content="#050814" />
      </head>

      <body>
        {children}
      </body>
    </html>
  );
}
