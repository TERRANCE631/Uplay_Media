import React from 'react'
import { BiEdit } from 'react-icons/bi'
import { dashboardList } from './Dashboard'
import { AnaliticGraph } from './AnaliticGraph'

export function UserInfor({ users, user }) {
    const videos = users.videos.filter((prev) => prev.id === (user.id))
    return (
        <section className="-mt-3">
            <div className="sticky w-full md:h-[10rem] h-[6rem] z-10 bg-black border-b">
                <img src="/Img/for cv.jpg" alt="" className="objec-center object-cover opacity-30 w-full h-full -z-10" />

                <div className="absolute bottom-0 right-[1rem] text-right w-full text-white">
                    <p className="text-sm">Uploads: {videos.length}</p>
                    <p className="font-bold xl:text-4xl text-2xl md:text-3xl">Terrance</p>
                    <p className="xl:text-[1rem] text-sm">Terrance@example.com</p>
                </div>

                <div className="rounded-full xl:w-[11rem] xl:h-[11rem] md:w-[9rem] md:h-[9rem]
                    w-[7rem] h-[7rem] xl:mt-[4rem] md:mt-[5.5rem] mt-[2.4rem] top-0 bg-black absolute">
                    <img src="/Img/for cv.jpg" alt="" className="object-center border-2 object-cover w-full h-full rounded-full" />
                    <button className="absolute xl:scale-[120%] border md:scale-[110%] scale-[105%] xl:left-[8.8rem] 
                        md:left-[6.5rem] md:-mt-[2.3rem] left-[5.4rem] xl:-mt-[3rem] -mt-[2.6rem] 
                        bg-gray-500 p-2 text-white rounded-full z-10">
                        <BiEdit />
                    </button>
                </div>
            </div>

            <div className="flex pt-0 xl:pl-[14.5rem] md:pl-[9.3rem] xl:text-lg md:text-lg text-sm">
                <div className="absolute flex right-0 text-xs md:text-[1rem] dark:text-gray-200 mt-1 gap-2">
                    <p className="right-0">
                        <span className="font-semibold tracking-wide">Started using uplay: </span>
                        <span>02 May 2024</span>
                    </p>
                </div>
            </div>
        </section>
    )
}
