import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./index.scss";
import project1 from "../../../assets/img/project1.png";
// import project2 from "../../../assets/img/project2.PNG";
import project3 from "../../../assets/img/project3.PNG";
import project4 from "../../../assets/img/project4.PNG";
import project5 from "../../../assets/img/project5.png";

// import { Tooltip } from "@chakra-ui/react";
// import {
//   SiAntdesign,
//   SiChakraui,
//   SiGreensock,
//   SiTailwindcss
// } from "react-icons/si";
// import { FaReact, FaSass } from "react-icons/fa";
// import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
// import { DiCss3 } from "react-icons/di";
// import { IoLogoJavascript } from "react-icons/io";

gsap.registerPlugin(ScrollTrigger);
const Section2 = () => {
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
        .from(".flip-card", {
          yPercent: -100,
          opacity: 0,
          ease: "eslatic",
          stagger: 0.5
        });
    }, c2Ref);
    return () => {
      ctx.revert();
      ScrollTrigger.killAll();
    }; // cleanup
  }, []);

  const projects = [
    {
      img: project5,
      desc: "Netflix",
      feature:
        "Login/Register, Login with Google/Github, Add/Remove movie from list, modal info.",
      tech: "HTML/CSS, Javascript, ReactJs, NextJs, Next/Auth, TailwinCss, SwiperJs, SWR, Prisma, MongoDB",
      link: "https://netflix-clone-47.vercel.app/" 
    },
    {
      img: project1,
      desc: "A clone UI of social media guide, idea from E-Commerce Nation.",
      feature:
        "Change the layout by choosing a social option or using the search feature",
      tech: "HTML/SASS, Javascript, ReactJs, ChakraUI",
      link: "https://socialguide47.netlify.app/"
    },
    {
      img: project3,
      desc: "A clone UI of metaversus madness with full responsive",
      feature: "Animation with framer motion",
      tech: "HTML/SASS, Javascript, NextJs, Framer Motion",
      link: "https://metaversusmadness47.netlify.app/"
    },
    {
      img: project4,
      desc: "A clone UI of Fiverr website with full responsive",
      feature:
        "Search job - Book job - View detail - Pagination - SignIn / SignUp - Edit profile",
      tech: "HTML/CSS, Javascript, ReactJs, TailwindCss, Redux, React Router Dom, Formik",
      link: "https://fiverr-b568b.web.app/"
    },
  ];

  return (
    <div ref={c2Ref} className="section_2">
      {/* <div className="section_2_container">
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
      </div> */}

      <div className="section_2_container">
        {projects.map((item) => (
          <div key={item.desc} className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img loading="lazy" src={item.img} alt="avatar" />
              </div>
              <div className="flip-card-back">
                <h3>{item.desc}</h3>
                <ul>
                  <label htmlFor="">Feature & Tech:</label>
                  <li>
                    <span>{item?.feature}</span>
                  </li>
                  <li>
                    <span>{item.tech}</span>
                  </li>
                </ul>
                <p>
                  <span>Visit page via link: </span>
                  <a href={item.link} target="_blank" rel="noreferrer">
                    {item.link}
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section2;
