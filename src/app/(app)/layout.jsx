import "../globals.css";
import Watermark from "../components/Watermark";

export default function AppLayout({ children }) {
  return (
    <div className="relative min-h-screen">
      <Watermark role="USER" />
      <main className="relative z-10">{children}</main>
    </div>
  );
}
