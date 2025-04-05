import { useEffect, useRef, useState } from "react";
import { BiMoon, BiSearch, BiSun } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useWindowScroll } from "react-use";

export function Header({ setShowManu }) {
  const [showSearch, setShowSearch] = useState(false);
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);
  const { y: currentScrollY } = useWindowScroll();
  const scrollRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const element = scrollRef.current

    if (currentScrollY > 0 && !darkMode) {
      element.classList.add("floating__header_lightMode")
    } else if (currentScrollY === 0 && !darkMode) {
      element.classList.remove("floating__header_lightMode")
    } else if (currentScrollY > 0 && darkMode) {
      element.classList.add("floating__header_darkMode")
      setShowSearch(false);
    } else if (currentScrollY === 0 && darkMode) {
      element.classList.remove("floating__header_darkMode")
    };
  }, [currentScrollY, darkMode]);

  return (
    <header className="fixed z-50">
      <nav ref={scrollRef} className="fixed transition-all inset-x-0 duration-500 dark:text-white h-[4.5rem] flex justify-between items-center px-4">
        <section className="flex items-center">
          <div
            onClick={() => setShowManu(true)}
            role="button"
            className="rounded-full hover:bg-gray-500/70 bg-gray-500/30 px-2 py-[3px] scale-[130%] md:scale-[140%]">
            &#9776;
          </div>
          <Link to="/">
            <span className="md:mx-5 mx-2 flex items-center md:scale-125 tracking-wider">
              <span className="text-4xl text-red-500 font-extrabold">U</span>
              <span className="text-xl">play</span>
            </span>
          </Link>
        </section>
        <section className="md:flex items-center hidden w-full mx-4">
          <input
            type="text"
            className="bg-gray-500/30 border flex flex-grow dark:border-white/20 border-black/30 outline-none py-2 pl-4 rounded-l-full"
            placeholder="Search video here"
          />
          <button
            className="absolute 2xl:right-[8.3%] xl:right-[14.3%] lg:right-[20%] md:right-[26%] 
            bg-gray-500/30 hover:bg-transparent text-gray-600 dark:text-white rounded-full scale-[185%] font-thin px-2"
          >
            &times;
          </button>
          <button className="text-2xl hover:bg-gray-500/80 bg-gray-500/70 text-white border dark:border-white/20 border-black/30 py-2 px-4 rounded-r-full">
            <BiSearch />
          </button>
        </section>

        <section className="flex items-center md:gap-4 gap-2">
          <section className="flex items-center gap-2">
            <button
              onClick={() => setShowSearch((prev) => !prev)}
              className="md:hidden block text-2xl bg-gray-500/30 rounded-full p-[0.4rem]"
            >
              <BiSearch />
            </button>

            <button
              onClick={() => setDarkMode((prev) => !prev)}
              disabled={currentScrollY === 0 ? "" : "disabled"}
              className={`${currentScrollY === 0
                ? "md:scale-[170%] scale-[155%] bg-gray-500/30 p-1 rounded-full hover:bg-gray-500/50 mx-2"
                : "md:scale-[170%] opacity-40 cursor-not-allowed scale-[155%] bg-gray-500/30 p-1 rounded-full hover:bg-gray-500/50 mx-2"}`}
            >
              {darkMode ? <BiMoon /> : <BiSun />}
            </button>
          </section>

          <button className="md:h-11 md:w-11 w-10 h-10 rounded-full border hover:opacity-70">
            <img src="/Img/for cv.jpg" alt="" className="object-cover object-center h-full w-full rounded-full" />
          </button>
        </section>
      </nav>

      <section className={`${currentScrollY > 0 ? "w-screen mt-5 transition-all duration-500"
        : showSearch ? "w-screen h-screen bg-black bg-opacity-40 transition-all duration-500"
          : "w-screen transition-all duration-500"}`}>
        {showSearch && <nav className="flex items-center flex-grow w-full justify-center">
          <section className="mt-[4.7rem] flex w-full flex-grow px-4 items-center md:hidden">
            <input
              type="text"
              className="bg-gray-200 flex border flex-grow w-full outline-none border-gray-500 py-2 pl-4 rounded-l-full"
              placeholder="Search video here"
            />
            <button
              className="absolute right-[25.5%] bg-gray-500/30 hover:bg-gray-500/10 
                rounded-full scale-[165%] font-thin px-2"
            >
              &times;
            </button>
            <span className="text-2xl border bg-gray-500 py-2 px-6 rounded-r-full border-gray-500">
              <BiSearch />
            </span>
          </section>
        </nav>}
      </section>
    </header>
  )
}
