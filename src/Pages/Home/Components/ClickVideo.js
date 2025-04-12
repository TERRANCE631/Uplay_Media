import React from 'react'
import { videos } from './VideoList'
import { HomeCard } from './HomeCard'
import { VideoFilter } from './VideoFilter'

export function ClickVideo() {
    return (
        <section>
            <VideoFilter />
            <div className="w-full grid 2xl:grid-cols-8 xl:grid-cols-6 lg:grid-cols-4 
            md:grid-cols-3 grid-cols-1 py-2">
                {videos.map((video, i) => {
                    return (
                        <div key={i} className="md:mb-6 mb-4 md:mx-2">
                            <HomeCard video={video} />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
