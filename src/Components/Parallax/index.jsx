// import React, { useEffect, useRef } from "react";
// import "./index.scss";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Center } from "@chakra-ui/react";

// gsap.registerPlugin(ScrollTrigger);
// const Parallaxx = () => {
//   const parallaxRef = useRef();

//   // let getRatio = (el) =>
//   //   window.innerHeight / (window.innerHeight + el.offsetHeight);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.utils.toArray("section").forEach((section, i) => {
//         section.background = section.querySelector(".background");

//         // Give the backgrounds some random images
//         // section.background.style.backgroundImage = `url(https://picsum.photos/1600/800?random=${i})`;

//         // the first image (i === 0) should be handled differently because it should start at the very top.
//         // use function-based values in order to keep things responsive
//         // gsap.fromTo(
//         //   section.background,
//         //   {
//         //     backgroundPosition: () =>
//         //       i
//         //         ? `50% ${-window.innerHeight * getRatio(section)}px`
//         //         : "50% 0px",
//         //     ease: "none",
//         //   },
//         //   {
//         //     backgroundPosition: () =>
//         //       `50% ${window.innerHeight * (1 - getRatio(section))}px`,
//         //     ease: "none",
//         //     yoyo: true,
//         //     scrollTrigger: {
//         //       trigger: section,
//         //       start: () => (i ? "top bottom" : "top top"),
//         //       end: "bottom top",
//         //       markers: true,
//         //       scrub: true,
//         //       snap: 1 / 4 ,
//         //       // pin: true,
//         //       toggleClass: "active",
//         //       invalidateOnRefresh: true // to make it responsive
//         //     }
//         //   }
//         // );

//         gsap.to(section, {
//           // yPercent: -100,
//           scrollTrigger: {
//             trigger: section,
//             start: "top top",
//             end: "bottom top",
//             // markers: true,
//             pin: true,
//             pinSpacing: false,
//             scrub: true,
//             snap: 1 / 3,
//             toggleClass: "active",
//           },
//           ease: "none"
//         });
//       });
//     }, parallaxRef);

//     return () => {
//       ctx.revert();
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <div className="parallax" ref={parallaxRef}>
//       <section>
//         <div className="background background_1" />
//         <Center height={"100%"}>
//           <h1>
//             <span>The Path to Achieving My Future Aspirations</span>
//           </h1>
//         </Center>
//       </section>
//       <section>
//         <div className="background background_2" />
//         <Center height={"100%"}>
//           <h1>
//             <span>
//               I want to unlock myself and develop new skills and abilities to
//               increase my knowledge and advance to another level.
//             </span>
//           </h1>
//         </Center>
//       </section>
//       <section>
//         <div className="background background_3" />
//         <Center height={"100%"}>
//           <h1>
//             <span>
//               To achieve this, I will set clear and specific goals that are
//               measurable and time-bound.
//             </span>
//           </h1>
//         </Center>
//       </section>
//       <section>
//         <div className="background background_4" />
//         <Center height={"100%"}>
//           <h1>
//             <span>
//               I will not stop learning and seeking out other resources to
//               improve my skills.
//             </span>
//           </h1>
//         </Center>
//       </section>
//       <section>
//         <div className="background background_5" />
//         <Center height={"100%"}>
//           <h1>
//             <span>
//               I will practice regularly and seek feedback from mentors and peers
//               to identify my strengths and weaknesses. I will stay motivated and
//               celebrate my successes along the way, knowing that learning is a
//               lifelong process.
//             </span>
//           </h1>
//         </Center>
//       </section>
//     </div>
//   );
// };

// export default Parallaxx;
