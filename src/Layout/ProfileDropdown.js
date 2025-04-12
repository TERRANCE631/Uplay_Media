import React from 'react'
import { Link } from 'react-router-dom'

export function ProfileDropdown({ setProfile }) {
    return (
        <section className="w-full h-screen shadow-xl shadow-black bg-opacity-20 bg-black">
            <div className="fixed backdrop-blur-lg z-40 md:w-[30%] shadow-inner shadow-gray-800 border-2 
        border-gray-500 rounded-lg right-1 top-[4rem] min-h-[20rem] bg-white/20">
                <section className="">
                    <div className=" flex flex-col items-center justify-center p-4 backdrop-blur-xl bg-blue-500/30 rounded-t-lg" >
                        <div className="md:h-[6rem] md:w-[6rem] w-10 h-10 rounded-full border-4 border-blue-600 hover:opacity-70">
                            <img src="/Img/for cv.jpg" alt="" className="object-cover object-center h-full w-full rounded-full" />
                        </div>
                        <section className="truncate flex flex-col items-center justify-center">
                            <div className="text-2xl truncate text-white tracking-wider font-bold">Terrance</div>
                            <div className="text-xs truncate tracking-wider">Terrancesiyabonga@gmail.com</div>
                        </section>
                    </div>

                    <section className="flex justify-center p-2">
                        <div className="grid grid-cols-2 gap-10 text-sm">
                            <div className="flex flex-col">
                                <p className="border-b py-1">Clicks</p>
                                <p className="border-b py-1">Downloads</p>
                                <p className="border-b py-1">Subscribers</p>
                            </div>
                            <div className="flex flex-col text-center justify-center">
                                <p className="border-b py-1">40k</p>
                                <p className="border-b py-1">20k</p>
                                <p className="border-b py-1">10k</p>
                            </div>
                        </div>
                    </section>
                    <section className="w-full flex justify-evenly items-center">
                        <Link onClick={() => setProfile(false)} to="/Home/User/profile/" className="text-white tracking-wide my-2 bg-blue-700 px-2 py-1 
                    lg:px-6 lg:py-2.5 rounded-lg dark:text-white/80 hover:underline">
                            Full stats
                        </Link>
                    </section>

                    <section onClick={() => setProfile(false)} className="w-full flex justify-center">
                        <button className="bg-rose-500 shadow-inner shadow-red-600 py-2 w-[90%] my-4 rounded-full text-white">
                            Sign Out
                        </button>
                    </section>
                </section>
            </div>
        </section>
    )
}
