import React, { lazy, ReactElement, ReactNode } from "react";
import "../css/layout.scss";

const Header = lazy(() => import("./header"));
const Footer = lazy(() => import("./footer"));

const Layout = ({ children }: { children: ReactNode }): ReactElement => {
  return (
    <div className="wrapper d-flex flex-column">
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
