import React, { useEffect, useRef } from "react";
import "./index.scss";
import { Center } from "@chakra-ui/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const C12 = ({scrollTween}) => {
    const c12Ref = useRef();
    useEffect(() => {
        let ctx = gsap.context(() => {
          gsap
          .timeline({
            scrollTrigger: {
              trigger: c12Ref.current,
              containerAnimation: scrollTween,
              start: "350% 0%",
              end: "360% 0%",
              // markers: true,
              // toggleActions: "play none none reset"
            }
          })
          .from("h1", {opacity: 0, scale: 3, duration: 1.5, ease: "back"})
          .from("span", { opacity: 0, duration: 1})

        }, c12Ref);
        return () => {
            ctx.revert();
        } // cleanup
      }, []);
  return (
    <div ref={c12Ref} className="c12">
      <Center width={"100%"} height={"100vh"}>
        <h1>If you have any <span>feedback</span> <br /> Please <span>contact</span> me using the <span>information</span> below <span>👇</span>.</h1>
      </Center>
    </div>
  );
};

export default C12;
