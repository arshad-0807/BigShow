import React from "react";
import MoviesPage from "../Components/MoviesPage";
import Footer from "../Components/Footer";
const PageLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default PageLayout;
