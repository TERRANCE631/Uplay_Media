import users from "../../MOCK_DATA.json"
import { AnaliticGraph } from "./Components/AnaliticGraph"
import { dashboardList } from "./Components/Dashboard"
import { UserInfor } from "./Components/UserInfor"
import { VideoList } from "./Components/VideoList"

export function UserDetails() {
    
    return (
        <section className="">
            <div className="min-h-full">
                {users.users.map((user, i) => {
                    return (
                        <div key={i} className="">
                            <div className="">
                                <UserInfor user={user} users={users} />
                            </div>
                            <div className="md:pt-[4rem] pt-[2rem] px-2.5">
                                <div className="border-b mt-8">
                                    <p className="">Uploads({users.videos.filter((prev) => prev.id === (user.id)).length})</p>
                                </div>
                                <VideoList user={user} />
                            </div>
                            <div className="border-b mt-8 mx-2">
                                <p className="">Overall Analytic Graph</p>
                            </div>

                            <section className="m-2 grid md:grid-cols-[1fr_3fr] grid-cols-1">
                                <section className="">
                                    <div className="pt-[0.5rem] w-full h-full flex flex-col md:gap-5 gap-2 lg:px-2 text-sm">
                                        {dashboardList.map((icon, i) => {
                                            return (
                                                <div key={i} className="w-full">
                                                    <div className="rounded-lg p-2 border">
                                                        <div className="flex items-center w-full">
                                                            <span className="text-2xl text-blue-500">{icon.icon}</span>
                                                            <span className="uppercase text-xs">{icon.title}</span>
                                                        </div>
                                                        <div className="text-center">
                                                            <span className="mr-2">{icon.dot}</span>
                                                            {/* eslint-disable-next-line  */}
                                                            <span>{"Count:" + " " + icon.amount}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </section>
                                <section>
                                    <AnaliticGraph />
                                </section>
                            </section>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
