import React, { useEffect, useRef } from "react";
import "./index.scss";
import { Center } from "@chakra-ui/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const C22 = () => {
  const c22Ref = useRef();
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: c22Ref.current,
            start: "100% 20%",
            end: "bottom 20%",
            // markers: true
            // toggleActions: "play none none reset"
          }
        })
        .from("h1", { opacity: 0, xPercent: -100, duration: 1.5, ease: "back", delay: 1 })
        .from("span", {opacity: 0, duration: 1})
    }, c22Ref);
    return () => {
      ctx.revert();
    }; // cleanup
  }, []);
  return (
    <div ref={c22Ref} className="c22">
      <Center width={"100%"} height={"100vh"}>
        <h1>
          It's look cool, right? <br /> However, I'm still a <span>newbie</span>{" "}
          when it comes to <span>GSAP</span>.
        </h1>
      </Center>
    </div>
  );
};

export default C22;
