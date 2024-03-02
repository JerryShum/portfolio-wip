import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import jerryImage from "../assets/jerry_oec.webp";

function About() {
  return (
    <div className="relative h-screen w-full px-20 ">
      <h1 className=" uppercase font-league-spartan font-semibold text-9xl mt-20">
        Who Am I?
      </h1>
      <img
        src={jerryImage}
        className="absolute top-1/2 left-1/2 w-1/3 border rounded-lg border-black "
      />
    </div>
  );
}

export default About;
