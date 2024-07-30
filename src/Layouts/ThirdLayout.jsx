import React from "react";
import Header from "../Header";
import Footer3 from "../Components/Footer3";

const ThirdLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer3 />
    </>
  );
};

export default ThirdLayout;
