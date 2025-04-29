import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { BiSolidSend } from 'react-icons/bi'
import { GlobalContext } from '../../../Hooks/Context/useContext';

export function Comments({ videoDetails }) {
    const userID = JSON.parse(sessionStorage.getItem("userID"));
    const { scrollIntoView } = GlobalContext();

    const [user, setUser] = useState({});
    const [data, setData] = useState([]);
    const [forUseEffect, setForUseEffect] = useState("");

    const comments = data && data.filter(item => item.videoID === videoDetails.id);
    const scrollRef = useRef(null);

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

    const sendFeedback = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const timeNdate = new Date();
        const date = `${timeNdate.toDateString()} ${timeNdate.toLocaleDateString()}`

        formData.append("videoID", videoDetails.id);
        formData.append("userID", videoDetails.userID);
        formData.append("username", user.username);
        formData.append("date", date);

        axios.post("http://localhost:9000/uplay/postComments", formData)
            .then(res => {
                const data = res.data;
                setForUseEffect(data.details);
            });
        e.target.reset();
    };

    const getComments = () => {
        axios.get("http://localhost:9000/uplay/getComments")
            .then(res => {
                const data = res.data;
                console.log(data);
                setData(data);

            });
    }

    useEffect(() => {
        getComments();
    }, [forUseEffect]);

    return (
        <section className="">
            <form onSubmit={sendFeedback} className="flex items-center">
                <input
                    required
                    type="text"
                    className="w-full border py-2.5 pl-4 border-blue-700 shadow-inner shadow-gray-500 text-black 
                    bg-gray-200 outline-none rounded-l-full"
                    placeholder="Comment here"
                    name="comment"
                    id="comment"
                />
                <button onClick={() => scrollIntoView(scrollRef)} className="py-2.5 border border-blue-700 md:px-8 px-4 shadow-inner shadow-gray-500 
                bg-blue-500 text-2xl rounded-r-full">
                    <BiSolidSend />
                </button>
            </form>

            <p className="mt-2">Comments: ({comments.length})</p>

            <div className="mt-5 mb-10">
                {data.map((comment, i) => {
                    return (
                        <div key={i} className="">
                            {comment.videoID === videoDetails.id &&
                                <div className="flex items-baseline bg-gray-300/30 gap-2 mb-2 px-2 py-1">
                                    <button className="">
                                        <p className="font-bold">{comment.username}:</p>
                                    </button>
                                    <div className="">
                                        <p className="truncate">{comment.comment}</p>
                                        <p className="truncate text-sm text-gray-500 dark:text-gray-200 ">
                                            <span>Date: </span>
                                            <span>{comment.date}</span>
                                        </p>
                                    </div>
                                </div>}
                        </div>
                    )
                })}
            </div>
            <div ref={scrollRef} />
        </section>
    )
}
