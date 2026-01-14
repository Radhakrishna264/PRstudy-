import "./globals.css";

/*
  PRstudy – Root Layout (FINAL)
  Covers:
  - Public
  - Auth
  - App (User)
  - Admin / SuperAdmin

  NOTE:
  - No auth logic here
  - No redirects here
  - Middleware handles access control
*/

export const metadata = {
  title: "PRstudy",
  description: "PRstudy – Smart Learning & Test Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}

        {/* Global watermark placeholder
            Actual data injected by Watermark component (Phase-11) */}
        <div className="prstudy-watermark">
          PRstudy
        </div>
      </body>
    </html>
  );
}
