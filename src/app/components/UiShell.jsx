import Header from "./Header";
import Footer from "./Footer";
import Watermark from "./Watermark";

export default function UIShell({ children, role }) {
  return (
    <>
      <Header />
      <main className="prstudy-main">
        {children}
      </main>
      <Footer />
      <Watermark role={role} />
    </>
  );
}
