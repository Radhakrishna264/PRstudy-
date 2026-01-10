import './globals.css';

export const metadata = {
  title: 'PRstudy',
  description: 'INDIA YAAD RAKHE',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
