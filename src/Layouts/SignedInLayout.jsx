import React from "react";
import MainHomeHeader from "../Components/SignedInPages/MainHomeHeader";
import Footer from "../Components/Footer";

const SignedInLayout = ({ children }) => {
  return (
    <>
      <MainHomeHeader />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default SignedInLayout;
