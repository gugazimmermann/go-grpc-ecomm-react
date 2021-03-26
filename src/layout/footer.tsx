import React, { ReactElement } from "react";
import "./layout.scss";

const Footer = (): ReactElement => {
  return (
    <footer className="footer">
      <p>
        Icons made by{" "}
        <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </p>
    </footer>
  );
};

export default Footer;
