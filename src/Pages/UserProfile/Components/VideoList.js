import { Link } from "react-router-dom"

export function VideoList({ user, videoList }) {
    return (
        <div className="grid h-full w-full 2xl:grid-cols-8 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 md:mx-2 py-2 gap-5">
            {videoList.filter((prev) => prev.userID === user.id).map((vid, i) => {
                return (
                    <Link to={`/videoPlayer/${vid.id}`} key={i} className="border border-dotted w-full bg-slate-200/20 shadow-lg">
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
                        <div className="h-full p-1 w-full" >
                            <p className="font-bold">{vid.title}</p>
                            <div className="flex justify-between">
                                <p className="text-xs">{vid.date}</p>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}   
