import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./index.scss";
import { FaMapMarkedAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Tooltip } from "@chakra-ui/react";

gsap.registerPlugin(ScrollTrigger);
const Footer = () => {
  const footerRef = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const matchMediaQuery = window.matchMedia("(min-width: 1200px)");
      const startValue = matchMediaQuery.matches ? "400% 10%" : "-35% top";
      gsap
        .timeline({
          scrollTrigger: {
            trigger: footerRef.current,
            start: startValue,
            end: "20% 50%",
            // markers: true,
            toggleActions: "play none none reset",
            oncancel: () => {
              ctx.revert();
              ScrollTrigger.killAll();
            }
          },
          defaults: {
            duration: 1
          }
        })
        .from(".footer_container_1", {
          yPercent: -200,
          opacity: 0,
          ease: "eslatic"
        })
        .from("#hit", { opacity: 0, ease: "linear" })
        .from(".footer_container_3", {
          yPercent: 200,
          opacity: 0,
          ease: "eslatic"
        })
        .from("li", { opacity: 0, scale: 1, stagger: 0.3 });
    }, footerRef);
    return () => ctx.revert(); // cleanup
  }, []);
  return (
    <div ref={footerRef} className="footer">
      <div className="footer_container">
        <div className="footer_container_1">
          <h3>
            Thank you for taking the time to visit my website! 
          </h3>
          <p>I hope you have enjoyed your stay so far.</p>
        </div>
        <div className="footer_container_2">
          <q id="hit">
            Please don't hesitate to get in touch if you have any questions or
            feedback. <br/> I would love to hear from you. Feel free to explore my
            website further to learn more about my services and experience 👇. <br/> Have
            a great day! 
          </q>
          <ul>
            <li>
              <p className="icon">
                <FaMapMarkedAlt />
              </p>
              <p>
                <span>Location</span> <br />
                <span>Saigon, Vietnam</span>
              </p>
            </li>

            <li>
              <p className="icon">
                <SiGmail/>
              </p>
              <p>
                <span>Mail</span>
                <br />
                <a href="mailto:phattien991412@gmail.com">
                  phattien991412@gmail.com
                </a>
              </p>
            </li>
          </ul>
        </div>
        <div className="footer_container_3">
          <div className="copyright">
            <h3>Copyright © 2023. All rights are reserved</h3>
            <ul>
              <li>
                <Tooltip hasArrow label="Github" placement="top-end">
                  <a href="https://github.com/phattien991412" target="_blank" rel="noreferrer">
                    <AiFillGithub />
                  </a>
                </Tooltip>
              </li>
              <li>
                <Tooltip hasArrow label="LinkedIn" placement="top-end">
                  <a href="https://www.linkedin.com/in/ph%C3%A1t-tr%E1%BB%8Bnh-ti%E1%BA%BFn-60a269271/" target="_blank" rel="noreferrer">
                    <AiFillLinkedin />
                  </a>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
