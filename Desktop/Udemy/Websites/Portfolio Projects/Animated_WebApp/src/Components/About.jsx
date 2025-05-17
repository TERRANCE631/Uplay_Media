import { useGSAP } from "@gsap/react";
import React from "react";

import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { AnimatedTitle } from "./AnimatedTitle";
gsap.registerPlugin(ScrollTrigger);

export function About() {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });
  return (
    <div id="about" className="min-h-screen w-scree">
      <div className="reletive mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase md:text-[10px]">
          welcome to zentry
        </h2>
        <AnimatedTitle 
        containerClass={"mt-5 !text-black text-center"}
        title="disc<b>o</b>ver the world's lar<b>g</b>est shared adve<b>n</b>ture" />
        {/* <div className="about-subtext">
          <p>The Game of Games begins-your life, now an epic MMORPG</p>
          <p>Zentry unites every player from countless games and platforms</p>
        </div> */}
      </div>
      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

