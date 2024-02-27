import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Hero() {
  const welcome = useRef(null);
  //Creates a reference for the root level element (used for scoping)

  useGSAP(
    () => {
      const t1 = gsap.timeline();
      t1.from(["#title-1, #title-2, #title-3"], {
        opacity: 0,
        y: "+=30",
        stagger: 0.5,
      });
      t1.to(["#title-1, #title-2, #title-3"], {
        opacity: 0,
        y: "-=30",
        delay: 0.3,
        stagger: 0.3,
      });
      t1.to("#intro-slider", {
        yPercent: "-100",
        duration: 0.7,
      });

      t1.from("#heading", {
        opacity: 0,
        duration: 1.5,
      });
    },
    { scope: welcome }
  );

  return (
    <div className="relative" ref={welcome}>
      <div
        id="intro-slider"
        className="h-screen w-screen p-10 bg-gray-900 text-gray-200 absolute top-0 left-0 font-spaceGrotesk z-10 flex flex-col gap-10 tracking-tight items-center justify-center"
      >
        <h1 className="text-9xl" id="title-2">
          Jerry Shum
        </h1>
        <h1 className="text-9xl" id="title-3">
          Portfolio
        </h1>
      </div>

      <div
        className=" w-screen h-screen bg-Beigeish(BG)-Normal flex flex-col justify-center"
        ref={welcome}
      >
        <h1
          className=" text-9xl text-Charcoal(Text)-Normal font-bold text-center"
          id="heading"
        >
          Portfolio Page
        </h1>
      </div>
    </div>
  );
}

export default Hero;
