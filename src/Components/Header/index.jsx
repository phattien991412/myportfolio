import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import "./index.scss";

const Header = () => {
  const headerRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { duration: 2 } })
        .from(headerRef.current, { yPercent: -100, opacity: 0, ease: "back" });
    }, headerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={headerRef} className="header">
      <div className="header_wrap">
        <h3>Front-end.dev</h3>
        <nav className="header_wrap_nav">
          {/* <ul>
            <li>
              <a href="#home">HTML</a>
            </li>
            <li>
              <a href="#about">CSS</a>
            </li>
            <li>
              <a href="#projects">Javascript</a>
            </li>
            <li>
              <a href="#contact">ReactJs</a>
            </li>
          </ul> */}
        </nav>
      </div>
    </div>
  );
};

export default Header;
