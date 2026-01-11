import "./globals.css";

export const metadata = {
  title: "PRstudy",
  description: "PRstudy – Premium Study Workspace",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
