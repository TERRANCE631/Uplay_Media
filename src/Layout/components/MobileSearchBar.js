import React from 'react'
import { BiSearch } from 'react-icons/bi'

export function MobileSearchBar({currentScrollY, showSearch}) {
    return (
        <section className={`${currentScrollY > 0 ? "w-screen mt-5 transition-all duration-500"
            : showSearch ? "w-screen h-screen bg-black bg-opacity-20 transition-all duration-500"
                : "w-screen transition-all duration-500"}`}>
            {showSearch &&
                <nav className="flex items-center flex-grow w-full justify-center">
                    <section className="mt-[4.7rem] flex w-full flex-grow px-4 items-center md:hidden">
                        <input
                            type="text"
                            className="bg-gray-200 flex border flex-grow w-full outline-none border-gray-500 py-2 pl-4 rounded-l-full"
                            placeholder="Search video here"
                        />
                        <button
                            className="absolute right-[25.5%] text-white bg-gray-500/30 hover:bg-gray-500/10 
                            rounded-full scale-[165%] font-thin px-2"
                        >
                            &times;
                        </button>
                        <span className="text-2xl text-white border bg-gray-500 py-2 px-6 rounded-r-full border-gray-500">
                            <BiSearch />
                        </span>
                    </section>
                </nav>}
        </section>

    )
}
