// components/shared/Layout.js
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";

function Layout() {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
      {/* Your layout header, sidebar, etc. */}
      <SideBar />
      <div className="flex-1">
        {/* Render child routes here */}
        <Header />
        <div className="p-4">
            <Outlet />
        </div>
      </div>
      {/* Your layout footer, etc. */}
    </div>
  );
}

export default Layout;
