import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import gsap from "gsap";

import Navbar from "../components/Navbar";
import EllipseBG from "../assets/Ellipse_BG.png";

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
          duration: 1,
          stagger: 0.5,
        })
        .from("#img-bg", {
          opacity: 0,
          translateY: 200,
          duration: 1,
        })
        .from(
          "#subhead-text",
          {
            opacity: 0,
            translateY: 90,
            duration: 1,
          },
          1
        )
        .to(
          "#subhead-text",
          {
            duration: 3,
            text: "Software engineering student and aspiring developer.",
            ease: "power1.inOut",
          },
          ""
        );
    },
    { scope: welcome }
  );

  return (
    <section
      className="relative h-screen bg-Beigeish(BG)-Normal overflow-hidden"
      ref={welcome}
    >
      <img
        src={EllipseBG}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-125"
        id="img-bg"
      />

      <div className="z-auto absolute right-10 top-10" id="nav-container">
        <Navbar />
      </div>

      <div className="h-screen flex flex-col justify-center">
        <div className="flex flex-col text-[175px] leading-none text-Charcoal(Text)-Normal font-bold text-center uppercase ">
          <span
            className=" inline-block pr-40 font-league-spartan "
            id="heading"
          >
            Hi There, I'm
          </span>
          <span
            className=" inline-block pl-40 font-league-spartan "
            id="heading"
          >
            Jerry Shum
          </span>
        </div>
        <div
          className="text-center text-amber-900 text-2xl font-semibold  "
          id="subhead-text"
        >
          <span>&nbsp;</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
