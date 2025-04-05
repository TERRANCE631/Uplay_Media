import React from 'react'

export function HomeCard({ video }) {
    return (
        <section className="h-full">
            <div className="p-2 mx-3 h-full flex flex-col mb-4 border bg-gray-300 dark:bg-gray-600 border-black rounded-lg">
                <div className="">
                    <img src={video.video} alt="" className="h-[12rem] w-full object-cover object-center" />
                </div>
                <div className="flex flex-col">
                    <div className="text-3xl font-bold">{video.title}</div>
                    <div className="font-semibold text-gray-600 dark:text-gray-300">{video.name}</div>
                </div>
            </div>
        </section>
    )
}
