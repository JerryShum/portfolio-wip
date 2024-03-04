import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { LazyLoadImage } from "react-lazy-load-image-component";

import JerryOEC from "../assets/jerry_oec_resized.jpeg";
import JerryGame from "../assets/Jerry_Game_resized.jpeg";
import JerryOECPlaceholder from "../assets/Jerry_OEC_Placeholder.jpeg";
import JerryGamePlaceholder from "../assets/Jerry_Game_Placeholder.jpeg";

function About() {
  return (
    <div className="relative h-screen w-full">
      <h1 className=" uppercase font-league-spartan font-semibold text-9xl">
        Who Am I?
      </h1>

      <div className="relative">
        <LazyLoadImage
          src={JerryOEC}
          className="absolute h-auto w-1/3 top-6/12 left-0 right-0  border rounded-[30px] border-red-500"
          id="#sliding-image"
          placeholderSrc={JerryOECPlaceholder}
        />
        <LazyLoadImage
          src={JerryGame}
          className="absolute h-auto w-1/3 top-6/12 left-0 right-0 border rounded-[30px] border-red-500"
          id="#sliding-image"
          placeholderSrc={JerryGamePlaceholder}
        />
      </div>
    </div>
  );
}

export default About;
