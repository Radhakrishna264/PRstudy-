import "./globals.css";

/*
 PRstudy – Root Layout (FINAL)
 Covers:
 - Public
 - Auth
 - App (User)
 - Admin / SuperAdmin

 NOTE:
 - NO UiShell here
 - NO auth logic here
 - Middleware handles access
*/

export const metadata = {
  title: "PRstudy",
  description: "PRstudy - Smart Learning & Test Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
