import users from "../../MOCK_DATA.json"
import { AnaliticGraph } from "./Components/AnaliticGraph"
import { dashboardList } from "./Components/Dashboard"
import { UserInfor } from "./Components/UserInfor"
import { VideoList } from "./Components/VideoList"

export function UserDetails() {
    return (
        <section>
            <div className="">
                {users.users.map((user, i) => {
                    return (
                        <div className="">
                            <div className="">
                                <UserInfor user={user} users={users} />
                            </div>
                            <div className="pt-[4rem] px-2.5">
                                <div className="border-b mt-8">
                                    <p className="">Uploads</p>
                                </div>
                                <VideoList user={user} />
                            </div>
                            <div className="m-2">
                                <div className="border-b mt-8">
                                    <p className="">Analytic Graph</p>
                                </div>
                                <div className="pt-[0.5rem] w-full h-full flex md:gap-5 gap-2 justify-center px-2 text-sm">
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
                                                        <span>{"Count:" + " " + icon.amount}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <AnaliticGraph />
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
