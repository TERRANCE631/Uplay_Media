import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CardDropDown } from './CardDropDown'

export function HomeCard({ video }) {
    const [showDropDown, setShowDropDown] = useState(false);
    const [videoID, setVideoID] = useState(null);
    
    return (
        <section className="h-full">
            <div className="p-2 mx-3 h-full flex flex-col mb-4 border bg-gray-300 
            dark:bg-gray-600 border-black rounded-lg">
                <Link to="/videoPlayer" className="">
                    <img src={video.video} alt="" className="h-[10rem] bg-white rounded-lg w-full object-cover 
                    object-center" />
                </Link>

                <section className="flex">
                    <Link to="/videoPlayer" className="flex flex-wrap">
                        {video.title.split(" ").map((title, i) => {
                            return (
                                <section key={i}>
                                    <div className={`${i >= 6
                                        ? "hidden"
                                        : `${i === 5 ? "text-2xl font-bold truncate"
                                            : "text-2xl mr-2.5 font-bold truncate"}`}`}
                                    >
                                        {title}
                                    </div>
                                    {i === 6 && <div className="text-3xl font-bold">...</div>}
                                </section>
                            )
                        })}
                    </Link>
                </section>

                <section className="flex items-center justify-between">
                    <Link to="/"
                        className="flex items-center mt-2 -mb-2 gap-1"
                    >
                        <div className="w-11 h-11 rounded-full border">
                            <img src={video.profileImage} alt="" className="object-cover bg-white rounded-full object-center 
                            w-full h-full" />
                        </div>
                        < div
                            className="font-semibold text-gray-600 dark:text-gray-300"
                        >
                            {video.name}
                        </div>
                    </Link>

                    <button
                        onClick={() => { setShowDropDown((prev) => !prev); setVideoID(video.id) }}
                        className="bg-gray-200 dark:bg-gray-700 hover:dark:bg-gray-800/70 hover:bg-gray-100 py-2 rounded-full"
                    >
                        <div className="flex flex-col gap-1 mx-4 ">
                            {[1, 2, 3].map((_, i) => {
                                return (
                                    <div key={i} className="w-1 h-1 rounded-full dark:bg-white 
                                    bg-gray-700" />
                                )
                            })}
                        </div>
                    </button>
                    {video.id === videoID && showDropDown && <CardDropDown />}
                </section>
            </div>
        </section >
    )
}
