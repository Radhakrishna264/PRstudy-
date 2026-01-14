import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function UiShell({ children }) {
  return (
    <div className="ui-shell">
      <Header />

      <div className="ui-body">
        <Sidebar />
        <main className="ui-content">
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
}
