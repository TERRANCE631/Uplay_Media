import axios from "axios"
import users from "../../MOCK_DATA.json"
import { AnaliticGraph } from "./Components/AnaliticGraph"
import { dashboardList } from "./Components/Dashboard"
import { UserInfor } from "./Components/UserInfor"
import { VideoList } from "./Components/VideoList"
import { useEffect, useState } from "react"

export function UserDetails() {
    const userID = JSON.parse(sessionStorage.getItem("userID"));
    const [user, setUser] = useState({});
    const [videoList, setVideoList] = useState([]);

    // getting current user details
    const getUserDetails = async () => {
        await axios.get(`http://localhost:9000/uplay/GetUseId/${userID}`)
            .then(res => {
                const data = res.data
                setUser(data)
            });
    };

    useEffect(() => {
        getUserDetails()
        // eslint-disable-next-line
    }, [userID])
    // end of getting current user datails

    const getVideos = () => {
        axios.get(`http://localhost:9000/uplay/getVideos`)
            .then(res => {
                const data = res.data;
                setVideoList(data);
            });
    };

    useEffect(() => {
        getVideos();
        // eslint-disable-next-line 
    }, []);
    const videoLenght = videoList.filter((prev) => prev.userID === userID)
    return (
        <section className="">
            <div className="min-h-full">
                <div className="">
                    <div className="">
                        <UserInfor user={user} videoLenght={videoLenght} />
                    </div>
                    <div className="md:pt-[4rem] pt-[2rem] px-2.5">
                        
                        <div className="border-b mt-8">
                            <p className="">Uploads({videoLenght.length})</p>
                        </div>
                        <VideoList videoList={videoList} userID={userID} />
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
            </div>
        </section>
    )
}
