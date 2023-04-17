import React, { useEffect, useRef } from "react";
import "./index.scss";
import { Center } from "@chakra-ui/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const C32 = () => {
    const c32Ref = useRef();
    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap
            .timeline({
              scrollTrigger: {
                trigger: c32Ref.current,
                start: "10% 20%",
                end: "bottom 20%",
                // markers: true,
                // toggleActions: "play none none reset"
              }
            })
            .from("h1", {opacity: 0, yPercent: 100, duration: 1.5, ease: "back"})
            .from("span", { opacity: 0, duration: 1})

        }, c32Ref);
        return () => {
            ctx.revert();
        } // cleanup
      }, []);
  return (
    <div ref={c32Ref} className="c32">
      <Center width={"100%"} height={"100vh"}>
        <h1> ...And all these <span>new things</span> <br /> I have just learned from <span>GSAP</span>.</h1>
      </Center>
    </div>
  );
};

export default C32;
