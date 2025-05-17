import { useEffect, useRef, useState } from "react";
import { Button } from "./Button";
import { TiLocationArrow } from "react-icons/ti";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// trigger the animation when scrolling 
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;
  const nextVideoRef = useRef(null);

  const getVideoSrc = (index) => `/videos/hero-${index}.mp4`;
  const upcommingVideoIndex = (currentIndex % totalVideos) + 1;

  function handleVideoLoad() {
    setLoadedVideos(upcommingVideoIndex);
  }

  function handleMiniVideoPlayer() {
    setHasClicked(true);
    setCurrentIndex(upcommingVideoIndex);
  }

  useEffect(() => {
    if (loadedVideos === totalVideos - 2) {
      setIsLoading(false);
    }
  }, [loadedVideos]);

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });

        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "Power1.inOut",
          onStart: () => nextVideoRef.current.play(),
        });

        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currentIndex], revertOnUpdate: true }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0%, 72% 0%, 90% 85%, 0% 100%)",
      borderRadius: "0 0 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0 0 0 0",
      ease: "Power1.InOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <div className="reletive h-dvh w-screen overflow-x-hidden">
      {isLoading && (
        <div className="absolute overflow-hidden z-[100] bg-violet-50 h-dvh w-screen flex-center">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}
      <div
        id="video-frame"
        className="reletive z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div
            onClick={handleMiniVideoPlayer}
            className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg"
          >
            <div className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:opacity-100 hover:scale-100">
              <video
                className="size-64 object-cover origin-center scale-150 "
                ref={nextVideoRef}
                src={getVideoSrc(upcommingVideoIndex)}
                muted
                loop
                id="current-video"
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>
          <video
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
          <video
            src={getVideoSrc(
              currentIndex === totalVideos - 1 ? 1 : currentIndex
            )}
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
        </div>
        <h1 className="absolute special-font hero-heading bottom-5 right-5 z-40 text-blue-75">
          g<b>a</b>ming
        </h1>
        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-[4rem] px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              redefi<b>n</b>e
            </h1>
            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Enter the metegame layer <br />
              Uleash the play Economy
            </p>
            <Button
              id="watch-trailer"
              title="watch trailer"
              leftIcon={<TiLocationArrow />}
              containerClass="!bg-yellow-300 flex-center gap-1"
            />
          </div>
        </div>
      </div>
      <h1 className="absolute special-font hero-heading bottom-5 right-5 -z-40 text-black">
        g<b>a</b>ming
      </h1>
    </div>
  );
}
