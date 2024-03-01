import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import gsap from "gsap";

import Navbar from "../components/Navbar";

function Hero() {
  const welcome = useRef(null);
  //Creates a reference for the root level element (used for scoping)
  gsap.registerPlugin(TextPlugin);

  useGSAP(
    () => {
      const timeline = gsap.timeline();

      timeline
        .from("#heading", {
          opacity: 0,
          translateY: 90,
          duration: 1.5,
          stagger: 0.5,
        })
        .from(
          "#subhead-text",
          {
            opacity: 0,
            translateY: 90,
            duration: 1.5,
          },
          1
        )
        .to(
          "#subhead-text",
          {
            duration: 3,
            text: "Aspiring software engineer and front-end developer",
            ease: "power1.inOut",
          },
          ""
        );
    },
    { scope: welcome }
  );

  return (
    <section className="relative h-screen bg-Beigeish(BG)-Normal" ref={welcome}>
      <div className="z-50 absolute right-10 top-10" id="nav-container">
        <Navbar />
      </div>

      <div className="h-screen flex flex-col justify-center">
        <div className="flex flex-col text-[175px] leading-none text-Charcoal(Text)-Normal font-bold text-center uppercase border border-red-500">
          <span
            className=" inline-block pr-40 font-league-spartan border border-red-500"
            id="heading"
          >
            Hi There, I'm
          </span>
          <span
            className=" inline-block pl-40 font-league-spartan border border-red-500"
            id="heading"
          >
            Jerry Shum
          </span>
        </div>
        <div
          className="text-center text-amber-900 text-2xl font-semibold border border-red-500 "
          id="subhead-text"
        >
          <span>#######################################</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
