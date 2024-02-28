import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Navbar from "../components/Navbar";

function Hero() {
  const welcome = useRef(null);
  //Creates a reference for the root level element (used for scoping)

  useGSAP(
    () => {
      const timeline = gsap.timeline();

      timeline.from("#heading", {
        opacity: 0,
        duration: 1.5,
      });
    },
    { scope: welcome }
  );

  return (
    <div className="relative" ref={welcome}>
      <div className="absolute right-10 top-10">
        <Navbar />
      </div>

      <div
        className=" w-screen h-screen bg-Beigeish(BG)-Normal flex flex-col justify-center"
        ref={welcome}
      >
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
            {" "}
            Jerry Shum
          </span>
        </div>
        <div className="text-center text-amber-900 text-2xl font-semibold border border-red-500 ">
          <span>Aspiring front-end developer and software engineer.</span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
