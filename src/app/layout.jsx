import "./globals.css";
import UiShell from "./components/UiShell";

/*
 PRstudy - Root Layout (FINAL)
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
  description: "PRstudy - Smart Learning & Test Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <UiShell>
          {children}
        </UiShell>
      </body>
    </html>
  );
}
