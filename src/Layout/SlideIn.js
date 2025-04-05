import React from 'react'
import { BiLayout } from 'react-icons/bi'
import { slideList } from './components/SlideList'
import { Link } from 'react-router-dom'

export function SlideIn({ setShowManu }) {
    return (
        <section className="fixed w-full flex flex-col z-50 bg-black bg-opacity-50 truncate px-4 pt-4 left-0 text-black 
         dark:text-white h-screen">
            <section className="fixed bg-slate-200 dark:bg-gray-800 shadow-black shadow-xl 2xl:w-[6.5%] xl:w-[11.9%] lg:w-[16%] md:w-[22%] md:flex 
            flex-col z-50 truncate px-4 pt-4 left-0 top-0 h-screen">
                <section className="flex items-center">
                    <div
                        onClick={() => setShowManu(false)}
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
                <div className="pt-6">
                    <div className="flex flex-col gap-2">
                        {slideList.map((icon, i) => {
                            return (
                                <button>
                                    <p key={i} className="truncate my-2 hover:bg-gray-500/10 bg-gray-500/20 rounded-lg py-2 flex
                                     flex-col justify-center items-center">
                                        {icon.icon}
                                        <p className="mt-0.5 md:text-md text-xs">
                                            {icon.title}
                                        </p>
                                    </p>
                                </button>
                            )
                        })}
                    </div>
                    <div className="border-b my-4 border-gray-500 dark:border-white" />

                    <div role="button" className="md:text-md text-xs">
                        <p className="truncate my-2 border bg-gray-500/20 hover:bg-gray-500/10 rounded-lg py-2 flex flex-col 
                        justify-center items-center">
                            <BiLayout className="scale-150" />
                            <p className="mt-0.5">
                                My videos
                            </p>
                        </p>
                    </div>
                </div>
            </section>
        </section>
    )
}
