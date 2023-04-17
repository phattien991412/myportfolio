import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./index.scss";
import { Tooltip } from "@chakra-ui/react";
import {
  SiAntdesign,
  SiChakraui,
  SiGreensock,
  SiTailwindcss
} from "react-icons/si";
import { FaReact, FaSass } from "react-icons/fa";
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";

gsap.registerPlugin(ScrollTrigger);
const C2 = () => {
  const c2Ref = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: c2Ref.current,
            // containerAnimation: scrollTween,
            start: "230% 10%",
            end: "bottom 20%",
            // markers: true,
            toggleActions: "play none none none",
            oncancel: () => {
              ctx.revert();
            }
          }
        })
        .from("li", {
          yPercent: -100,
          opacity: 0,
          ease: "bounce",
          stagger: 0.3
        })

    }, c2Ref);
    return () => {
      ctx.revert();
      ScrollTrigger.killAll();
    }; // cleanup
  }, []);

  return (
    <div ref={c2Ref} className="section_2">
      <div className="section_2_container">
        <ul>
          <li>
            <Tooltip hasArrow label="HTML5" placement="top-end">
              <span>
                <AiFillHtml5 />
              </span>
            </Tooltip>
          </li>
          <li>
            <Tooltip hasArrow label="CSS3" placement="top-end">
              <span>
                <DiCss3 />
              </span>
            </Tooltip>
          </li>
          <li>
            <Tooltip hasArrow label="Javascript" placement="top-end">
              <span>
                <IoLogoJavascript />
              </span>
            </Tooltip>
          </li>
          <li>
            <Tooltip hasArrow label="ReactJs" placement="top-end">
              <span>
                <FaReact />
              </span>
            </Tooltip>
          </li>
          <li>
            <Tooltip hasArrow label="TailwindCss" placement="top-end">
              <span>
                <SiTailwindcss />
              </span>
            </Tooltip>
          </li>
          <li>
            <Tooltip hasArrow label="SASS / SCSS" placement="top-end">
              <span>
                <FaSass />
              </span>
            </Tooltip>
          </li>
          <li>
            <Tooltip hasArrow label="Antd" placement="top-end">
              <span>
                <SiAntdesign />
              </span>
            </Tooltip>
          </li>
          <li>
            <Tooltip hasArrow label="Chakra UI" placement="top-end">
              <span>
                <SiChakraui />
              </span>
            </Tooltip>
          </li>
          <li>
            <Tooltip hasArrow label="GSAP" placement="top-end">
              <span>
                <SiGreensock />
              </span>
            </Tooltip>
          </li>
          <li>
            <Tooltip hasArrow label="Github" placement="top-end">
              <span>
                <AiFillGithub />
              </span>
            </Tooltip>
          </li>
        </ul>
      </div>

      {/* <div ref={refText2}>
        <h1>Project</h1>
        <p>
          <q>
            No one saves us but ourselves. No one can and no one may. We
            ourselves must walk the path.
          </q>
        </p>
      </div>

      <div className="section_2_wrap">
        <div className="wrap_content">
          <div className="wrap_content_left">
            <div
              onMouseEnter={() => onMouseEnterHandler(1)}
              onMouseLeave={() => onMouseLeaveHandler()}
              ref={imgRef1}
              className="img"
            >
              <img src={Project1} alt="project" />
            </div>
            <div ref={detailRef1} className="detail">
              <div className="detail_content">
                <h3>Fiver Website</h3>
                <p>Describe: A clone UI Fiverr Website with full responsive</p>
                <ul>
                  <label htmlFor="">Responsibility: Developer</label> <br />
                  <label htmlFor="">Feature & Tech:</label>
                  <li>Sign In - Sign Up - Edit Profile</li>
                  <li>Search Job - Detail Job - Book Job - Pagination</li>
                  <li>
                    HTML - CSS - Javascript - Reactjs - TailwindCss - Antd -
                    Redux - Formik
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="wrap_content_right">
            <div
              onMouseEnter={() => onMouseEnterHandler(2)}
              onMouseLeave={() => onMouseLeaveHandler()}
              ref={imgRef2}
              className="img"
            >
              <img src={Project2} alt="project" />
            </div>
            <div ref={detailRef2} className="detail">
              <div className="detail_content">
                <h3>Portlofio</h3>
                <p>
                  Description: My portfolio, where you can explore more about
                  me.
                </p>
                <ul>
                  <label htmlFor="">Responsibility: Developer</label> <br />
                  <label htmlFor="">Feature & Tech:</label>
                  <li>Animation with GSAP - ScrollTrigger - Motion Path</li>
                  <li>HTML - SCSS - Javascript - Reactjs - GSAP - ChakraUI</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default C2;
