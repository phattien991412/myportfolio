import gsap from "gsap";
import React, { useLayoutEffect, useRef, lazy } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import "./index.scss";
const C12 = lazy(() => import("./C1-2"));
const C22 = lazy(() => import("./C2-2"));
const C32 = lazy(() => import("./C3-2"));

gsap.registerPlugin(ScrollTrigger, Observer);
const Horizontal2 = () => {
  const comp = useRef();
  const scrollTween = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let sections = gsap.utils.toArray(".panel");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: comp.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          anticipatePin: 0.5,
          start: "top top",
          end: "+=5000"
        },
        autoRemoveChildren: false,
        smoothChildTiming: true,
        paused: true
      });
      scrollTween.current = tl.from(sections, {
        xPercent: -100 * (sections.length - 1),
        duration: 10,
        ease: "none"
      });
    }, comp);
    return () => {
      ctx.revert();
    }; // cleanup
  }, []);
  return (
    <div ref={comp} className="container2">
      <section className="panel content_1">
        <C12 scrollTween={scrollTween.current} />
      </section>
      <section className="panel content_2">
        <C22 scrollTween={scrollTween.current} />
      </section>
      <section className="panel content_3">
        <C32 scrollTween={scrollTween.current} />
      </section>
      {/* <section className="panel content_3">
        <C3 />
        <C4/>
      </section> */}
    </div>
  );
};

export default Horizontal2;
