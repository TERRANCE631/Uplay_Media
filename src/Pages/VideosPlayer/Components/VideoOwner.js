import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { Dropdown } from './Dropdown'
import { BiAddToQueue, BiDownload, BiLike } from 'react-icons/bi';
import { GlobalContext } from '../../../Hooks/Context/useContext';

export function VideoOwner() {
  const [showDropDown, setShowDropDown] = useState(false);
  const { Downlaods, downnload, likes } = GlobalContext();

  return (
    <section className="">
      <p className="md:text-3xl text-2xl font-extrabold w-full">
        Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Soluta repellat iste ipsum molestiae modi praesentium.
      </p>
      <div className="mt-4">
        <p className="text-gray-600 flex gap-2 md:text-md text-sm dark:text-gray-100">
          <span className="font-bold">Likes: </span><span>10k</span>
          <span className="font-bold">Downloads: </span><span>{downnload.toLocaleString()}</span>
          <span className="font-bold">Clicks: </span><span>{likes.toLocaleString()}</span>
        </p>
      </div>

      <section className="truncate flex justify-between items-center 
            rounded-lg my-2 gap-1">
        <div className="truncate flex items-center gap-1">
          <Link to="/" className="md:h-10 md:w-10 bg-white w-10 h-10 rounded-full border 
            hover:opacity-70 flex my-2">
            <img src="/Assets/profile.png" alt="" className="object-cover object-center h-full w-full rounded-full" />
          </Link>
          <p className="truncate">Terrance</p>
          <button className="truncate flex items-center gap-2 bg-gray-300 ml-4 shadow-gray-600 hover:dark:bg-gray-500/40 dark:bg-gray-700/40 
            shadow-inner hover:bg-gray-200 px-4 py-1 
            border border-black/30 rounded-full"
          >
            <span className="text-blue-800 scale-150"><BiAddToQueue /></span>
            <span>Subscribe</span>
          </button>
        </div>
        <div className="flex gap-4 p-2">
          <button
            className="truncate md:flex items-center gap-2 hidden bg-gray-300 hover:bg-gray-200 px-4 hover:dark:bg-gray-500/40 dark:bg-gray-700/40 
              py-1 rounded-full shadow-gray-600 
              shadow-inner border border-black/30"
          >
            <span className="text-blue-800 scale-150"><BiDownload /></span>
            <button onClick={() => Downlaods(downnload)}>Download</button>
          </button>
          <button className="truncate md:flex items-center gap-2 hidden shadow-gray-600 shadow-inner hover:dark:bg-gray-500/40 dark:bg-gray-700/40 
            bg-gray-300 hover:bg-gray-200 px-4 py-1 
            rounded-full border border-black/30"
          >
            <span className="text-blue-800 scale-150"><BiLike /></span>
            <button >Like</button>
          </button>
          <Dropdown setShowDropDown={setShowDropDown} showDropDown={showDropDown} />
        </div>
      </section>
    </section>
  )
}
