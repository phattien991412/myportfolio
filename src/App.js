import { useEffect, useRef, useState } from "react";
import Loading from "./Components/Loading";
import Home from "./page/Home";
import { gsap } from "gsap";
import fe from "./assets/img/fe.svg";
import "./App.scss";

function App() {
  const refFe = useRef();
  const loadingRef = useRef();
  const moveRef= useRef();
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { duration: 3 } })
        .to(loadingRef.current, {
          delay: 2,
          yPercent: -100,
          ease: "power4.out"
        });
    }, loadingRef);
    return () => ctx.revert(); // cleanup
  }, []);

  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 0.2;
    const xSet = gsap.quickSetter(cursor, "x", "px");
    const ySet = gsap.quickSetter(cursor, "y", "px");

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    gsap.ticker.add(() => {
      // adjust speed for higher refresh monitors
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    });

    refFe.current = gsap.to(".imgFe", {
      paused: true,
      bottom: 0,
      right: 0,
      width: 400,
      height: 400,
      duration: 1,
      ease: "linear"
    });

    moveRef.current = gsap.to(".imgFe", {
      // paused: true,
      top: "75%",
      left: "-5%",
      duration: 2,
      ease: "eslatic"
    });
  }, []);

  const mouseEnter = () => {
    refFe.current.play();
  };
  const mouseLeave = () => {
    refFe.current.reverse();
  };

  let docTitle = document.title;
  useEffect(() => {
    window.addEventListener("blur", () => {
      document.title = "Come back :(";
    });
    window.addEventListener("focus", () => {
      document.title = docTitle;
    });
  }, []);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if(scrollPosition > 700) {
      moveRef.current.play();
    } else if (scrollPosition < 700) {
      moveRef.current.reverse();
    }
  }, [scrollPosition]);
  return (
    <div className="app">
      <div className="app_content">
        <div ref={loadingRef} className="preLoad">
          <Loading />
        </div>
        <Home />
        <div className="cursor"></div>
        <div
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          className="imgFe"
        >
          <img src={fe} alt="front-end" />
        </div>
      </div>

      <>

      </>
    </div>
  );
}

export default App;
