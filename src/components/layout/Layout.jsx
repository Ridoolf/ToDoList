import { Footer } from "./footer/Footer";
import { Navbar } from "./navbar/Navbar";
import "./Layout.css";
import { Outlet } from "react-router-dom";
export const Layout = () => {
  return (
    <div id="layout">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
