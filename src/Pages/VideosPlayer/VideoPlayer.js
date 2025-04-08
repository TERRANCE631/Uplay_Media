import React, { useState } from 'react'
import { SideVideos } from './Components/SideVideos';
import { VideoOwner } from './Components/VideoOwner';
import { Comments } from './Components/Comments';

export function VideoPlayer() {
    const [toggle, setToggle] = useState(true);
    return (
        <section>
            <div className="flex flex-col justify-center">
                <section className="grid xl:pr-10 md:pl-2 pl-1 pr-2 w-full lg:grid-cols-[2fr_1fr] grid-cols-1 gap-4">
                    <div className="border border-dashed border-black rounded-lg w-full xl:min-h-[28rem] 2xl:min-h-[45rem] md:min-h-[25rem] 
                        h-[16rem]" >
                        <video src="/Assets/feature-5.mp4" controls className="object-cover scale-100 object-center w-full h-full rounded-lg" />
                        <section className="h-full lg:block hidden">
                            <VideoOwner />
                            <Comments />
                        </section>
                    </div>
                    <section className="h-full lg:hidden block">
                        <VideoOwner />
                        <Comments />
                    </section>

                    <div className="w-full shrink-0 h-full truncate">
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
                    </div>
                </section>

            </div>
        </section>
    )
}
