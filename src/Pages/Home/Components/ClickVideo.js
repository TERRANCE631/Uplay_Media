import React, { useEffect, useState } from 'react'
import { HomeCard } from './HomeCard'
import { VideoFilter } from './VideoFilter'
import axios from "axios";

export function ClickVideo() {
    const userID = JSON.parse(sessionStorage.getItem("userID"));
    const [user, setUser] = useState({});
    const [videos, setVideos] = useState([])
    
    const getVideos = async () => {
        await axios.get("http://localhost:9000/uplay/getVideos?_sort=id&&_order=dis")
            .then(res => {
                const data = res.data;
                setVideos(data);
            })
    };
    
    const getUserDetails = async () => {
        await axios.get(`http://localhost:9000/uplay/GetUseId/${userID}`)
            .then(res => {
                const data = res.data
                setUser(data)
                console.log(data);
            });
    };

    useEffect(() => {
        getUserDetails()
        // eslint-disable-next-line
    }, [userID])

    useEffect(() => {
        getVideos();
    }, []);

    return (
        <section>
            <VideoFilter />
            <div className="w-full grid 2xl:grid-cols-8 xl:grid-cols-6 lg:grid-cols-4 
            md:grid-cols-3 grid-cols-1 py-2">
                {videos.map((video, i) => {
                    return (
                        <div key={i} className="md:mb-6 mb-4 md:mx-2">
                            <HomeCard video={video} user={user} />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
