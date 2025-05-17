import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";

export function NavBar() {
  const navItems = ["Naxus", "Vault", "Prologue", "About", "Contact"];
  const [isIndicaterActive, setIsIndicaterActive] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const NavContainerRef = useRef(null);
  const audioElementRef = useRef(null);

  // var for window scrolling useEffects
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const { y: currentScrollY } = useWindowScroll();

  // useEffect for window scrolling, when exis y changes
  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      NavContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      NavContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      NavContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  // useEffect for animation
  useEffect(() => {
    gsap.to(NavContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.1,
    });
  }, [isNavVisible]);

  // audio button function
  function toggleAudioIndicater() {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicaterActive((prev) => !prev);
  }

  // useEffect for playing the audio
  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  return (
    <div
      ref={NavContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="">
            <img src="/img/logo.png" alt="Logo" className="w-10" />
            <button
              className="bg-blue-50 md:flex hidden items-center justify-center gap-1"
              id="product-button"
              title="products"
              rightIcon={<TiLocationArrow />}
            />
          </div>
          <div className="md:block hidden">
            {navItems.map((item) => (
              <a key={item} className="nav-hover-btn">
                {item}
              </a>
            ))}
          </div>
          <button
            onClick={toggleAudioIndicater}
            className="ml-10 flex items-center space-x-0.5"
          >
            <audio ref={audioElementRef} loop src="/audio/loop.mp3" />

            {[1, 2, 3, 4].map((bar) => (
              <div
                key={bar}
                className={`indicator-line ${isIndicaterActive ? "active" : ""}`}
                style={{ animationDelay: `${bar * 0.1}s` }}
              />
            ))}
          </button>
        </nav>
      </header>
    </div>
  );
}
