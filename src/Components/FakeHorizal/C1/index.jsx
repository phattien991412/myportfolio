import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import "./index.scss";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import avatar from "../../../assets/img/avatar.jpg";
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);
const C1 = () => {
  const c1Ref = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: c1Ref.current,
            // containerAnimation: scrollTween,
            start: "30% top",
            end: "20% 20%",
            // markers: true,
            toggleActions: "play none none none "
          },
          defaults: { duration: 1 }
        })
        .from(".section_1_container_right", {
          opacity: 0,
          xPercent: 100,
          ease: "eslatic"
        })
        .from(".section_1_container_left", {
          opacity: 0,
          yPercent: -100,
          ease: "eslatic",
          delay: 0.5
        })
        .from(".character", {
          opacity: 0,
          scale: 2,
          ease: "eslatic",
          stagger: 0.2
        });

      // let section = document.querySelector(".text");

      // let innerSection = gsap.to(document.querySelector(".text"), {
      //   x: `-100vw`,
      //   ease: "none",
      //   paused: true
      // });
      // let progressTo = gsap.quickTo(innerSection, "progress", {ease: "power3", duration: parseFloat(section.dataset.scrub) || 0.1});
      // gsap.to(section.querySelector("q"), {
      //   x: `100vw`,
      //   ease: "none",
      //   scrollTrigger: {
      //     containerAnimation: scrollTween,
      //     markers: true,
      //     scrub: true,
      //     trigger: section,
      //     start: "left right",
      //     end: "right left",
      //     onUpdate: self => progressTo(self.progress)
      //   }
      // });
    }, c1Ref);
    return () => {
      ctx.revert();
      ScrollTrigger.killAll();
    }; // cleanup
  }, []);

  const splitText = (text) => {
    let arrText = text.split("").map((item) => {
      return <span className="character">{item}</span>;
    });
    return arrText;
  };
  return (
    <div ref={c1Ref} className="section_1">
      <h3>{splitText("Résume")}</h3>
      <div className="section_1_container">
        <div className="section_1_container_left">
          <h3>Hi I'm Phat, a passionate Front-end Developer </h3>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img loading="lazy" src={avatar} alt="avatar" />
              </div>
              <div className="flip-card-back">
                <p>As a Front-End Developer, I am skilled in HTML, CSS, JavaScript, React, Tailwind, and SCSS, and am committed to creating responsive websites that provide a seamless user experience. I push the limits of web development and am ready to tackle any challenge to deliver exceptional online experiences.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="section_1_container_right">
          <h3>Working experiences</h3>
          <div className="detail">
            <h4>Inter Front-end Web Developer</h4>
            <h5>Cong ty CP CN & KT Stech</h5>
            <p>08/2022 - 11/2022</p>
            <p>
              Participated in the development of the Dakshow project, focusing
              on studying and updating the UI and creating new functions.
            </p>
          </div>

          <div className="detail">
            <h4>Front-end Web Developer</h4>
            <h5>Cong ty CP CN & KT Stech</h5>
            <p>11/2022 - present</p>
            <p>
              Continuously participated in the development of the Dakshow
              project by creating and optimizing code and enhancing
              functionality.
            </p>
            <p>Collaborated with the BE team to create and update APIs.</p>
            <ul>
              <label htmlFor="">
                Contributed to building the company's websites:
              </label>
              <li>
                <span>
                  Stechvn website:{" "}
                  <a
                    href="https://stechvn.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://stechvn.org
                  </a>
                </span>
              </li>
              <li>
                <span>
                  Welcome Dakshow website:{" "}
                  <a
                    href="https://welcome.dakshow.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://welcome.dakshow.com
                  </a>
                </span>
              </li>
              <li>
                <span>ICO website</span>
              </li>
              <li>
                <span>CMS for Dakshow</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default C1;
