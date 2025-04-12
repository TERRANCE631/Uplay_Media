import React from 'react'
import { BiSolidSend } from 'react-icons/bi'

export function Comments() {
    const commentList = [
        "Good keep them comming!", 
        "Nice", 
        "How did u do that?", 
        "Good keep them comming!", 
        "Good keep them comming!", 
        "Good keep them comming!", 
        "Good keep them comming!", 
        "Good keep them comming!", 
        "Good keep them comming!", 
        "Good keep them comming!", 
        "Good keep them comming!"
    ]
    return (
        <section className="h-full">
            <div className="flex items-center">
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
            <p className="h-2">Comments: ({commentList.length})</p>
            <div className="my-5 lg:h-[55%] overflow-y-auto subs__scrollbar pr-2">
                {commentList.map((comment, i) => {
                    return (
                        <div key={i} className="">
                            <div className="flex items-baseline bg-gray-300/30 gap-2 mb-2 px-2 py-1">
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
