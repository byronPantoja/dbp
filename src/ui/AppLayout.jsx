import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <>
      <Header />
      <main className="flex h-screen flex-col bg-white">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
