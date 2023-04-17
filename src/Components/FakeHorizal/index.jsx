import gsap from "gsap";
import React, {
  lazy,
  useEffect,
  useLayoutEffect,
  useRef,
  useState
} from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import "./index.scss";
import Footer from "../Footer";
import { BsArrowRightCircle } from "react-icons/bs";

const C1 = lazy(() => import("./C1"));
const C2 = lazy(() => import("./C2"));
const Banner = lazy(() => import("../Banner"));

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
const Horizontal = () => {
  const comp = useRef();
  const [toggle, setToggle] = useState(0);
  const [isCountingUp, setIsCountingUp] = useState(false);
  // const refS0 = useRef();
  // const refS1 = useRef();
  // const refS2 = useRef();
  // const refS3 = useRef();


  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let sections = gsap.utils.toArray(".panel");
        // duration = 10;
        // sectionIncrement = duration / (sections.length - 1);

      // gsap.set(".content_2", { translateX: "22rem" });
      // gsap.set(".content_3", { translateX: "48rem" });
      // refS0.current = gsap.to(window, { paused: true, duration: 2, scrollTo: "#home"});
      // refS1.current = gsap.to(window, { paused: true, duration: 2, scrollTo: "#resume"});
      // refS2.current = gsap.to(window, { paused: true, duration: 2, scrollTo: "#skill"});
      // refS3.current = gsap.to(window, { paused: true, duration: 2, scrollTo: "#contact"});           

      gsap.timeline({
        scrollTrigger: {
          trigger: comp.current,
          pin: true,
          scrub: 1,
          // markers: true,
          // snap: directionalSnap(1 / (sections.length - 1)),
          // anticipatePin: 0.5,
          start: "top top",
          end: "+=5000"
        },
        autoRemoveChildren: false,
        smoothChildTiming: true,
        // paused: true
      }).to(".content_1", {
        xPercent: -50 * (sections.length - 1),
        // duration: duration,
        ease: "none"
      }).to(".content_2", {
        xPercent: -50 * (sections.length - 1),
        // duration: duration,
        ease: "none",
        // scrollTrigger: {
        //   trigger: ".content_2",
        //   start: "145% top",
        //   end: "+=500",
        //   // markers: true,
        //   toggleActions: "play none none none"
        // }
      }).to(".content_3", {
        xPercent: -50 * (sections.length - 1),
        // duration: duration,
        ease: "none"
        // scrollTrigger: {
        //   trigger: ".content_3",
        //   start: "255% top",
        //   end: "+=500",
        //   markers: true,
        //   toggleActions: "play none none none"
        // }
      });
      // let scrollContainer = document.querySelector(".container");

      // document.querySelectorAll("nav a").forEach(element => {

      //   element.addEventListener('click', function(e) {

      //     e.preventDefault();

      //     const id = element.getAttribute('href').split('#')[1];

      //     const targetElement = document.getElementById(id)
      //     const navBar = document.querySelector('nav')

      //     const scrollToHere = (targetElement.offsetLeft - navBar.offsetWidth) * ( scrollContainer.scrollWidth / (scrollContainer.scrollWidth - window.innerWidth))

      //     console.log(scrollToHere)

      //     gsap.to(comp.current, {
      //       scrollTo: scrollToHere,
      //       duration: 2
      //     })
      //   });

      // });
      // function addSectionCallbacks(
      //   timeline,
      //   { start, end, param, onEnter, onLeave, onEnterBack, onLeaveBack }
      // ) {
      //   let trackDirection = (animation) => {
      //       // just adds a "direction" property to the animation that tracks the moment-by-moment playback direction (1 = forward, -1 = backward)
      //       let onUpdate = animation.eventCallback("onUpdate"), // in case it already has an onUpdate
      //         prevTime = animation.time();
      //       animation.direction = animation.reversed() ? -1 : 1;
      //       animation.eventCallback("onUpdate", () => {
      //         let time = animation.time();
      //         if (prevTime !== time) {
      //           animation.direction = time < prevTime ? -1 : 1;
      //           prevTime = time;
      //         }
      //         onUpdate && onUpdate.call(animation);
      //       });
      //     },
      //     empty = (v) => v; // in case one of the callbacks isn't defined
      //   timeline.direction || trackDirection(timeline); // make sure direction tracking is enabled on the timeline
      //   start >= 0 &&
      //     timeline.add(
      //       () =>
      //         ((timeline.direction < 0 ? onLeaveBack : onEnter) || empty)(
      //           param
      //         ),
      //       start
      //     );
      //   end <= timeline.duration() &&
      //     timeline.add(
      //       () =>
      //         ((timeline.direction < 0 ? onEnterBack : onLeave) || empty)(
      //           param
      //         ),
      //       end
      //     );
      // }

      // function directionalSnap(increment) {
      //   let snapFunc = gsap.utils.snap(increment);
      //   return (raw, self) => {
      //     let n = snapFunc(raw);
      //     return Math.abs(n - raw) < 1e-3 || (n < raw) === (self.direction < 0)
      //       ? n
      //       : self.direction < 0
      //       ? n - increment
      //       : n + increment;
      //   };
      // }

      // sections.forEach((section, index) => {
      //   let tween = gsap.from(section, {
      //     opacity: 0,
      //     scale: 0.6,
      //     duration: 1,
      //     force3D: true,
      //     paused: true
      //   });

      //   addSectionCallbacks(tl, {
      //     start: sectionIncrement * (index - 1),
      //     end: sectionIncrement * (index + 1),
      //     onEnter: () => tween.play(),
      //     onLeave: () => tween.reverse(),
      //     onEnterBack: () => tween.play(),
      //     onLeaveBack: () => tween.reverse()
      //   });
      //   index || tween.progress(1);
      // });

      // Observer.create({
      //   target: "window",
      // })
    }, comp);
    return () => {
      ctx.revert();
    }; // cleanup
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
    if (scrollPosition < 700) {
      setToggle(0);
      setIsCountingUp(false);
    }
    if (scrollPosition > 700) {
      setToggle(1);
    }
    if (scrollPosition > 2200) {
      setToggle(2);
    }
    if (scrollPosition > 4000) {
      setToggle(3);
      setIsCountingUp(true);
    }
  }, [scrollPosition]);

  const navArr = [
    {
      title: "Home",
      nav: "#home"
    },
    {
      title: "Résume",
      nav: "#resume"
    },
    {
      title: "Skill",
      nav: "#skill"
    },
    {
      title: "Contact",
      nav: "#contact"
    }
  ];

  // const handleClick = (event) => {
  //   event.preventDefault(); // Prevent default behavior of following the link
  //   const href = event.target.getAttribute("href"); // Get the value of the href attribute
  //   window.history.pushState(null, "", href); // Update the URL with the href value
  //   const id = href.substring(1); // Remove the '#' character from the href value
  //   const element = document.getElementById(id); // Get the element with the corresponding ID
  //   element.scrollIntoView(); // Scroll to the element
  // };
  // console.log({toggle});

  // function handleClickArrow() {
  //   if (toggle === 2) {
  //     setIsCountingUp(true);
  //   } else if (toggle === 1) {
  //     setIsCountingUp(false);
  //   }
  //   console.log({isCountingUp});
  //   if (isCountingUp) {
  //     setToggle((toggle) => toggle - 1);
  //     if(toggle === 2) {
  //       refS3.current.reverse();
        
  //     } else if( toggle === 1) {
  //       refS2.current.reverse();
  //       refS1.current.reverse();
  //     } else if ( toggle === 0) {
  //       refS0.current.reverse();
  //     }
  //   } else if (!isCountingUp) {
  //     setToggle((toggle) => toggle + 1);
  //     if(toggle === 0) {
  //       refS0.current.play();
  //     } else if( toggle === 1) {
  //       refS1.current.play();
  //     } else if( toggle === 2) {
  //       refS2.current.play();
  //     } else if( toggle === 3) {
  //       refS3.current.play();
  //     }
  //   }
  // }

  return (
    <div id="container" ref={comp} className="container">
      <section id="home" className="panel content_1 ">
        <Banner />
      </section>
      <section id="resume" className="panel content_2">
        <C1 />
      </section>
      <section id="skill" className="panel content_3">
        <C2 />
      </section>
      <section id="contact" className="panel content_4">
        <Footer />
      </section>
      <div
      
        className={`arrow ${isCountingUp ? "activeArrow" : ""}`}
        // onClick={handleClickArrow}
      >
        <BsArrowRightCircle />
      </div>
      <nav className="nav">
        <ul>
          {navArr.map((item, i) => (
            <li
              key={item.nav}
              className={toggle === i ? "active" : ""}
              // onClick={(e) => {
              //   setToggle(i);
              // }}
            >
              <a href={item.nav}
              // onClick={handleClick}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Horizontal;
