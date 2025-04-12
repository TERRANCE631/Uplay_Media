import React from 'react'
import users from "../../../MOCK_DATA.json";

export function VideoList({ user }) {
    return (
        <div className="grid h-full w-full 2xl:grid-cols-8 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 py-2 gap-5">
            {users.videos.filter((prev) => prev.id === (user.id)).map((vid, i) => {
                return (
                    <div key={i} className="border border-dotted w-full bg-slate-200/20 shadow-lg">
                        <div className="border border-dotted h-[12rem] w-full">
                            <video
                                src={vid.video}
                                onError={(e) => {
                                    e.target.src = "/Assets/feature-5.mp4"
                                }}
                                alt=""
                                className="object-cover object-center w-full h-full"
                            />

                        </div>
                        <div className="h-full pl-1">
                            <p className="font-bold">{vid.title}</p>
                            <p className="">{vid.date}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}   
