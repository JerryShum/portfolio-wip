import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import jerryOEC from "../assets/jerry_oec.webp";
import jerryGame from "../assets/Jerry_Game.webp";

function About() {
  return (
    <div className="relative h-screen w-full p-20 ">
      <h1 className=" uppercase font-league-spartan font-semibold text-9xl">
        Who Am I?
      </h1>
      <img
        src={jerryOEC}
        className="absolute top-1/2 left-1/2 w-1/3 border rounded-[30px] border-red-500"
      />
      <img
        src={jerryGame}
        className="absolute top-1/2 left-1/2 w-1/3 border rounded-[30px] border-red-500"
      />
    </div>
  );
}

export default About;
