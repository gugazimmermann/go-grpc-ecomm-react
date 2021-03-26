import React, { ReactElement } from "react";
import Header from "./header";
import Footer from "./footer";
import "./layout.scss";

const Layout = (): ReactElement => {
  return (
    <>
      <Header />
      <section className="section">
        <h1>Main</h1>
      </section>
      <Footer />
    </>
  );
};

export default Layout;
