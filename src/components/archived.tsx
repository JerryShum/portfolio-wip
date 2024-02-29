import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const AnimatedText = ({ text }: { text: string }) => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({});

    tl.to(containerRef.current.children, {
      y: 0,
      stagger: 0.05,
      delay: 0.2,
      duration: 0.1,
    });
  }, []);

  return (
    <span ref={containerRef} className="container">
      {text.split("").map((char, i) => (
        <span key={i} className={`character character-${i}`}>
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedText;
