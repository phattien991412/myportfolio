import React, { lazy, useEffect } from "react";
const Footer = lazy(() => import("../Footer"));

const Layout = ({ children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    document
      .querySelector(e.currentTarget.getAttribute("href"))
      .scrollIntoView({
        behavior: "smooth"
      });
  }

  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", handleClick);
    });
    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleClick);
      });
    };
  }, []);
  return (
    <div className="layout">
      {/* <Header/> */}

      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
