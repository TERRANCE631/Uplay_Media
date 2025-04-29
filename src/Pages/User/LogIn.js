import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BiErrorCircle, BiLogInCircle, BiNotification, BiUndo } from 'react-icons/bi';
import { GlobalContext } from '../../Hooks/Context/useContext';
import { useNavigate } from 'react-router-dom';

export function LogIn({ setRegister, setLogin }) {
    const [userToken, setToken] = useState(JSON.parse(sessionStorage.getItem("userToken")) || "");
    const [ID, setID] = useState(JSON.parse(localStorage.getItem("userID")) || 0);
    const { getUser } = GlobalContext()
    const navigate = useNavigate()

    const [err, setErr] = useState({
        error: "",
        loggedIn: "",
    });

    useEffect(() => {
        sessionStorage.setItem("userToken", JSON.stringify(userToken));
        sessionStorage.setItem("userID", JSON.stringify(ID));
        // eslint-disable-next-line
    }, [userToken]);

    setTimeout(() => {
        sessionStorage.removeItem("userToken");
        sessionStorage.removeItem("userID");
    }, 1000 * 60 * 60)

    setTimeout(() => {
        setErr({ ...err, loggedIn: "", error: "" })
    }, 1000 * 10)

    const UserInputs = (e) => {
        getUser();
        const formData = new FormData(e.target);
        e.preventDefault();

        try {
            axios.post("http://localhost:9000/uplay/signIn", formData)
                .then(res => {
                    const data = res.data;
                    setErr({ ...err, loggedIn: data.loggedIn })
                    data.token === undefined
                        ? setErr({ ...err, error: data.error })
                        : setToken(data.token) || setID(data.id);
                    setTimeout(() => {
                        window.location.reload()
                        navigate("/")
                    }, 500);
                });
            e.target.reset();
        } catch (error) {
            throw new Error(error);
        }
    };

    return (
        <div className="flex flex-col fixed z-20 mt-[4.5rem] bg-black bg-opacity-40 h-screen w-full">
            <div className="fixed p-2 z-20 right-0 md:w-[50%] w-full border-l w-full h-screen bg-slate-100 dark:bg-gray-700">

                <p className="border-b dark:border-white border-gray-600 text-center text-xl 
                font-extrabold tracking-wide dark:text-white text-gray-800">Sign In</p>

                <div className={`${err.error !== ""
                    ? "flex flex-col justify-center items-center duration-500 translate-x-0"
                    : "flex flex-col justify-center items-center duration-500 translate-x-[120%]"}`}
                >
                    <div className={`${err.error !== ""
                        ? "bg-slate-300 gap-1 md:w-[90%] p-2 text-sm flex absolute justify-center py-2 items-center rounded-lg border border-gray-600 dark:text-white"
                        : "hidden"
                        }`}>
                        <p className="text-red-600 scale-150"><BiErrorCircle /></p>
                        <p className="text-black tracking-wide">{err.error}</p>
                    </div>
                </div>

                <div className={`${err.loggedIn !== ""
                    ? "flex flex-col justify-center items-center duration-500 translate-x-0"
                    : "flex flex-col justify-center items-center duration-500 translate-x-[120%]"}`}
                >
                    <div className={`${err.loggedIn !== ""
                        ? "bg-slate-300 gap-1 md:w-[90%] p-2 text-sm flex absolute justify-center py-2 items-center rounded-lg border border-gray-600 dark:text-white"
                        : "hidden"
                        }`}>
                        <p className="text-blue-600 scale-150"><BiNotification /></p>
                        <p className="text-black tracking-wide">{err.loggedIn}</p>
                    </div>
                </div>

                <form onSubmit={UserInputs} className="mt-4 flex flex-col gap-2">
                    <div className="">
                        <label htmlFor="username" className="dark:text-white">Username</label>
                        <input
                            required
                            type="text"
                            name="username"
                            id="username"
                            className="w-full py-2 outline-none duration-100 focus:border-blue-600 focus:shadow-blue-600 focus:shadow-sm pl-2 dark:border-white border-gray-600 
                            dark:text-white rounded-lg bg-transparent border"
                        />
                    </div>
                    <div className="">
                        <label htmlFor="password" className="dark:text-white">Passoword</label>
                        <input
                            required
                            type="text"
                            name="password"
                            id="password"
                            className="w-full py-2 outline-none rounded-lg pl-2 dark:border-white border-gray-600 
                            dark:text-white bg-transparent border duration-100 focus:border-blue-600 focus:shadow-blue-600 focus:shadow-sm"
                        />
                    </div>
                    <p className="">
                        <span className="dark:text-white">Don't have an account? </span>
                        <span
                            role="button"
                            onClick={() => { setRegister(true); setLogin(false) }}
                            className="text-blue-600 hover:underline">
                            Sign Up
                        </span>
                    </p>
                    <button type="submit" className="">
                        <div className="uppercase flex justify-center items-center gap-1.5 w-full py-2 bg-blue-600 dark:text-white 
                        text-white rounded-lg">
                            <span>Sign In </span>
                            <span>
                                <BiLogInCircle className="scale-150" />
                            </span>
                        </div>
                    </button>
                    <div
                        role="button"
                        onClick={() => setLogin(false)}
                        className="uppercase w-full  rounded-lg py-2 bg-gray-400 dark:text-white flex justify-center items-center text-white">
                        <span>Cancel</span><span><BiUndo className="scale-150" /></span>
                    </div>
                </form>
            </div>
        </div>
    )
}
