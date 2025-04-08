import React from 'react'
import { BiSolidSend } from 'react-icons/bi'

export function Comments() {
    const commentList = [
        "Good keep them comming!", "Nice", "How did u do that?", "Good keep them comming!", "Good keep them comming!"
    ]
    return (
        <section className="h-full">
            <div className="">
                <p className="text-gray-600 flex gap-2 md:text-md text-sm dark:text-gray-100">
                    <span className="font-bold">Likes: </span><span>100k</span>
                    <span className="font-bold">Downloads: </span><span>20k</span>
                    <span className="font-bold">Clicks: </span><span>50k</span>
                </p>
            </div>
            <div className="mt-5 flex items-center">
                <input
                    type="text"
                    className="w-full border py-1.5 pl-4 border-blue-700 shadow-inner shadow-gray-500 text-black 
                    bg-gray-200 outline-none rounded-l-full"
                    placeholder="Comment here"
                    name=""
                    id=""
                />
                <button className="py-1.5 border border-blue-700 md:px-8 px-4 shadow-inner shadow-gray-500 
                bg-blue-500 text-2xl rounded-r-full">
                    <BiSolidSend />
                </button>
            </div>
            <div className="my-5">
                {commentList.map((comment, i) => {
                    return (
                        <div key={i} className="">
                            <div className="flex items-baseline border-gray-400 border-b gap-2">
                                <button className="">
                                    <p className="font-bold text-gray-600 dark:text-gray-300">Terrance:</p>
                                </button>
                                <div className="">
                                    <p className="truncate">{comment}</p>
                                    <p className="truncate text-sm text-gray-500 dark:text-gray-400 ">
                                        <span>Date: </span>
                                        <span>02 May 2025</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </section>
    )
}
