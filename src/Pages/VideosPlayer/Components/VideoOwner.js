import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { Dropdown } from './Dropdown'

export function VideoOwner() {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <section className="">
      <p className="md:text-3xl text-2xl font-extrabold w-full">
        Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Soluta repellat iste ipsum molestiae modi praesentium.
      </p>
      <section className="truncate flex justify-between items-center 
            rounded-lg my-2 gap-1">
        <div className="truncate flex items-center gap-1">
          <Link to="/" className="md:h-10 md:w-10 bg-white w-10 h-10 rounded-full border 
            hover:opacity-70 flex my-2">
            <img src="/Assets/profile.png" alt="" className="object-cover object-center h-full w-full rounded-full" />
          </Link>
          <p className="truncate">Terrance</p>
          <button className="truncate bg-gray-300 ml-4 shadow-gray-600 hover:dark:bg-gray-500/40 dark:bg-gray-700/40 
            shadow-inner hover:bg-gray-200 px-4 py-1 
            border border-black/30 rounded-full"
          >
            Subscribe
          </button>
        </div>
        <div className="flex gap-4 p-2">
          <button
            className="truncate md:block hidden bg-gray-300 hover:bg-gray-200 px-4 hover:dark:bg-gray-500/40 dark:bg-gray-700/40 
              py-1 rounded-full shadow-gray-600 
              shadow-inner border border-black/30"
          >
            Download
          </button>
          <button className="truncate md:block hidden shadow-gray-600 shadow-inner hover:dark:bg-gray-500/40 dark:bg-gray-700/40 
            bg-gray-300 hover:bg-gray-200 px-4 py-1 
            rounded-full border border-black/30"
          >
            Like
          </button>
          <Dropdown setShowDropDown={setShowDropDown} showDropDown={showDropDown} />
        </div>
      </section>
    </section>
  )
}
