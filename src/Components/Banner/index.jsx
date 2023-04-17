import React, { useLayoutEffect, useRef } from "react";
import "./index.scss";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaSass } from "react-icons/fa";
import {
  SiTailwindcss,
  SiAntdesign,
  SiChakraui,
  SiGreensock
} from "react-icons/si";
import { Button, Tooltip } from "@chakra-ui/react";
import gsap from "gsap";
import { saveAs } from "file-saver";
import fileCv from "../../assets/img/TRINH TIEN PHAT.pdf";

const Banner = () => {
  const bannerRef = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline({
          defaults: { duration: 1 }
        })
        .from("h3", { opacity: 0, scale: 2, ease: "back", delay: 3 })
        .from(".character", { opacity: 0, scale: 1, stagger: 0.1 })
        .from("li", { opacity: 0, scale: 1, stagger: 0.2 });
    }, bannerRef);
    return () => {
      ctx.revert();
    }; // cleanup
  }, []);

  const saveFile = () => {
    saveAs(fileCv);
  };

  const splitText = (text) => {
    let arrText = text.split("").map((item) => {
      return <span className="character">{item}</span>;
    });
    return arrText;
  };

  return (
    <div ref={bannerRef} className="banner">
      <div className="banner_welcome">
        <div className="banner_welcome_info">
          <h3>TRINH TIEN PHAT</h3>
          <h1> {splitText("Front-end Developer")} </h1>
          <Button onClick={saveFile} fontWeight={600} fontSize={"32px"} lineHeight={"30px"} padding={"32px 48px"} marginTop={"80px"} borderRadius={"12px"} backdropFilter={"blur(2px)"} bgColor="rgba(86, 98, 132, 0.6)">
            Download CV
          </Button>
        </div>
        <div className="banner_welcome_skill">
          <h5>My Skillset</h5>
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
