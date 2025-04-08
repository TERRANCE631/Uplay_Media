
export function SideVideos() {
    const sample = [
        "video 1", "video 2", "video 3", "video 4", "video 5", "video 6", "video 7", "video 8", "video 9", "video 10"
    ]

    return (
        <div className="">
            <div className="flex flex-col gap-2">
                {sample.map((sample, i) => {
                    return (
                        <div key={i} className="w-full h-[5rem] truncate hover:bg-gray-500/30">
                            <div className="w-full h-full flex items-center">
                                <div className="w-[8rem] shrink-0 h-[4.8rem] border">
                                    <video src="/Assets/feature-5.mp4" alt="" className="object-cover object-center w-full h-full" />
                                </div>
                                <div className="pl-1 truncate">
                                    <p className="truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        In quisquam quod
                                        neque alias at consequatur quis incidunt eum velit animi.</p>
                                    <p className="text-gray-500 py-1 truncate">Terrance</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
