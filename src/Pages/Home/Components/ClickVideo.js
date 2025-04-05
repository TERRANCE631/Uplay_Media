import React from 'react'
import { videos } from './VideoList'
import { HomeCard } from './HomeCard'

export function ClickVideo() {
    return (
        <section>
            <div className="w-full grid 2xl:grid-cols-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-2">
                {videos.map((video, i) => {
                    return (
                        <div key={i} className="mb-6">
                            <HomeCard video={video} />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
