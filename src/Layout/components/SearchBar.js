import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { GlobalContext } from "../../Hooks/Context/useContext";

export function SearchBar() {
    const { setValue, value } = GlobalContext();

    return (
        <section className="md:flex items-center hidden w-full mx-4">
            <input
                type="text"
                onChange={(e) => setValue(e.target.value)}
                value={value}
                className="bg-gray-300 border flex flex-grow dark:border-white/20 border-black/30 outline-none py-2 
                pl-4 rounded-l-full"
                placeholder="Search video here"
            />
            {value !== "" &&
                <button
                    onClick={() => setValue("")}
                    className="absolute 2xl:right-[8.3%] xl:right-[14.3%] lg:right-[20%] md:right-[26%] 
                bg-gray-500/30 hover:bg-transparent text-gray-600 dark:text-white rounded-full scale-[185%] font-thin px-2"
                >
                    &times;
                </button>}

            <button className="text-2xl hover:bg-gray-500/80 bg-gray-500/70 text-white border dark:border-white/20
                 border-black/30 py-2 px-4 rounded-r-full">
                <BiSearch />
            </button>
        </section>
    )
}
