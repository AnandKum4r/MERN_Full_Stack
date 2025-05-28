import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
// Layout component that includes the Header, Footer, and Outlet for nested routes

function Layout() {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
}

export default Layout;
