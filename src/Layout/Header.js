import { useEffect, useRef, useState } from "react";
import { BiMoon, BiSearch, BiSun } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useWindowScroll } from "react-use";
import { SearchBar } from "./components/SearchBar";
import { MobileSearchBar } from "./components/MobileSearchBar";
import ProfileDropdownLoggedOut from "./ProfileDropdownLoggedOut";
import { GlobalContext } from "../Hooks/Context/useContext";
import { ProfileDropdown } from "./ProfileDropdown";

export function Header({ setShowManu, setLogin, setRegister }) {
  const [showSearch, setShowSearch] = useState(false);
  const [showProfile, setProfile] = useState(false);
  const { setValue } = GlobalContext()

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
      setProfile(false);
      setShowSearch(false);
      setValue("")

    } else if (currentScrollY === 0 && !darkMode) {
      element.classList.remove("floating__header_lightMode")
    } else if (currentScrollY > 0 && darkMode) {
      element.classList.add("floating__header_darkMode")
      setProfile(false);
      setShowSearch(false);
      setValue("")

    } else if (currentScrollY === 0 && darkMode) {
      element.classList.remove("floating__header_darkMode")
    };
    // eslint-disable-next-line 
  }, [currentScrollY, darkMode]);

  return (
    <header className="fixed z-50">
      <nav ref={scrollRef} className="fixed backdrop-blur-2xl z-20 md:border-b transition-all inset-x-0 duration-300
       dark:text-white h-[4.5rem] flex 
      justify-between items-center px-4">
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
        <SearchBar />

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

          <button onClick={() => setProfile((prev) => !prev)} className="md:h-11 md:w-11 w-10 h-10 rounded-full border hover:opacity-70">
            <img src="/Assets/profile.png" alt="" className="object-cover object-center h-full w-full rounded-full" />
          </button>
        </section>
      </nav>
      {
        showProfile
        && <ProfileDropdownLoggedOut setLogin={setLogin} setRegister={setRegister} setProfile={setProfile} />
        // && <ProfileDropdown setProfile={setProfile}/>
      }
      <MobileSearchBar currentScrollY={currentScrollY} showSearch={showSearch} />
    </header>
  )
}
