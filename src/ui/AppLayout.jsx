import { Outlet } from "react-router-dom";
import MainNav from "./MainNav";

function AppLayout() {
  return (
    <AppLayout>
      <MainNav />
      <main>
        <Outlet />
      </main>
    </AppLayout>
  );
}

export default AppLayout;
