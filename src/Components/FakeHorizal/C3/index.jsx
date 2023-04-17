import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./index.scss";

gsap.registerPlugin(ScrollTrigger);
const C3 = () => {
  const c3Ref = useRef();
  const refText3 = useRef();
  const imgRef = useRef(null);
  const imgTween = useRef(null);
  const  detailTween = useRef(null)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
        gsap
        .timeline({
          scrollTrigger: {
            trigger: c3Ref.current,
            start: "100% 20%",
            end: "bottom 20%",
            // markers: true,
            // toggleActions: "play none none reset"
          }
        })
        .from(refText3.current, {
          yPercent: -150,
          opacity: 0,
          ease: "bounce",
          duration: 3
        });

        imgTween.current = gsap.to(imgRef.current, {
          paused: true,
          yPercent: -40,
          duration: 10
        })
        detailTween.current = gsap.to(".detail", { paused: true ,opacity: 0})
    }, c3Ref);
    return () => {
        ctx.revert();
        ScrollTrigger.killAll();
    } // cleanup
  }, []);

  const onMouseEnterHandler = () => {
    imgTween.current.play();
    detailTween.current.play()
  };
  const onMouseLeaveHandler = () => {
    imgTween.current.reverse();
    detailTween.current.reverse();
  };
  
  return (
    <div ref={c3Ref} className="section_3">
    <div ref={refText3}>
      <h1>Project</h1>
      <p>
        <q>
        If you find a path with no obstacles, it probably doesn't lead anywhere.
        </q>
      </p>
    </div>

    <div className="section_3_wrap">
      <div className="wrap_content">
        <div
          onMouseEnter={() => onMouseEnterHandler()}
          onMouseLeave={() => onMouseLeaveHandler()}
          ref={imgRef}
          className="img"
        >
        </div>
        <div className="detail">
          <div className="detail_content">
            <h3>Portlofio</h3>
            <p>Description: My porfolio where you can get my infomation and my done project</p>
            <ul>
              <label htmlFor="">Responsibility: Developer</label> <br />
              <label htmlFor="">Feature & Tech:</label>
              <li>Animation with GSAP - ScrollTrigger - Motion Path</li>
              <li>
                HTML - SCSS - Javascript - Reactjs - GSAP - ChakraUI
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default C3;
