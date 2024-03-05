import React from "react";

function AboutCard() {
  return (
    <div className="flex gap-40">
      <div className="flex flex-col">
        <h2 className="text-7xl font-semibold font-league-spartan">
          {" "}
          Web Development
        </h2>
        <p className="text-balance text-xl">
          I am currently in the process of improving my web-development skills.
          I love using tools and frameworks such as Figma and React to aid in my
          web development journey.
        </p>
      </div>
      <div className="flex flex-col">
        <span className="text-6xl font-archivo-narrow">Learning Figma</span>
        <span className="text-6xl font-archivo-narrow">Using Gsap</span>
        <span className="text-6xl font-archivo-narrow">
          Intricacies of React
        </span>
      </div>
    </div>
  );
}

export default AboutCard;
