import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Intro() {
  const comp = useRef(null);
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
        duration: 0.6,
      });

      const currentDuration = t1.duration();
      console.log(currentDuration);
    },
    { scope: comp }
  );

  return (
    <div className="relative" ref={comp}>
      <div
        id="intro-slider"
        className="h-screen w-full p-10 bg-gray-900 text-gray-200 absolute top-0 left-0 font-spaceGrotesk z-10 flex flex-col gap-10 tracking-tight items-center justify-center"
      >
        <h1 className="text-9xl" id="title-1">
          Jerry Shum
        </h1>
        <h1 className="text-9xl" id="title-2">
          Portfolio
        </h1>
        <h1 className="text-9xl" id="title-3">
          🙂
        </h1>
      </div>

      <div className="h-screen w-full bg-Beigeish(BG)-Normal"></div>
    </div>
  );
}

export default Intro;
