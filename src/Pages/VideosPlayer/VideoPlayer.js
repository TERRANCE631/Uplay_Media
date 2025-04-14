import React, { useState } from 'react'
import { SideVideos } from './Components/SideVideos';
import { VideoOwner } from './Components/VideoOwner';
import { Comments } from './Components/Comments';

export function VideoPlayer() {
    const [toggle, setToggle] = useState(true);
    return (
        <section>
            <div className="flex flex-col justify-center">
                <section className="grid xl:pr-10 md:pl-2 md:pl-1 md:pr-2 w-full lg:grid-cols-[2fr_1fr] grid-cols-1 gap-4">
                    <div className="">
                        <div className="w-full xl:h-[28rem] 2xl:h-[45rem] lg:h-[22rem] md:h-[23rem] 
                        h-[16rem]">
                            <video src="/Assets/feature-5.mp4" controls className="object-cover scale-100 shrink-0 
                            object-center w-full h-full" />
                        </div>
                        <section className="lg:block hidden">
                            <VideoOwner />
                            <p className="border-b dark:border-white/20 border-black/30 mb-5" />
                            <Comments />
                        </section>
                    </div>
                    <section className="h-full lg:hidden block px-2">
                        <VideoOwner />
                    </section>

                    <div className="w-full min-h-full truncate">
                        {toggle && <div className="border-dashed lg:block hidden border mb-2 border-black rounded-t-lg w-full 
                        2xl:h-[8rem] h-[6rem]">
                            <video autoPlay muted loop src="/Assets/feature-5.mp4" alt="" className="object-cover object-center 
                            rounded-t-lg w-full h-full" />
                            <div className="flex justify-end -mt-[5rem] mr-4">
                                <button
                                    onClick={() => setToggle(false)}
                                    className="bg-gray-500 hover:bg-gray-300 text-white dark:hover:text-black dark:text-white 
                                    rounded-full scale-[185%] font-thin px-2"
                                >
                                    &times;
                                </button>
                            </div>
                        </div>}
                        <SideVideos />
                        <section className="h-full lg:hidden block">
                            <p className="border-b dark:border-white border-black/50 my-5" />
                            <Comments />
                        </section>
                    </div>
                </section>

            </div>
        </section>
    )
}
