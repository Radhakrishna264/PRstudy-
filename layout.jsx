export const metadata = {
  title: "PRstudy",
  description: "INDIA YAAD RAKHE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
