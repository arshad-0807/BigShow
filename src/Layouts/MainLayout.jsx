import React from "react";

import Home from "../Components/Home";
import Header from "../Header";
import Footer from "../Components/Footer";
const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
