import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const RootLayout = () => {
  return (
    <div className="dark">
      <Navbar />
      <main className="h-[var(--view-height)] flex flex-col">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
