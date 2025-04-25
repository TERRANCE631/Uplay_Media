import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BiLogInCircle, BiUndo } from 'react-icons/bi';

export function LogIn({ setRegister, setLogin }) {
    const [userToken, setToken] = useState(JSON.parse(sessionStorage.getItem("userToken")) || "");
    useEffect(() => {
        sessionStorage.setItem("userToken", JSON.stringify(userToken));
    }, [userToken]);

    setTimeout(() => {
        sessionStorage.removeItem("userToken");
    }, 1000 * 60 * 60)

    const [errors, setErrors] = useState({
        Err_emptyInput: "",
        usernameErr: "",
    });

    const UserInputs = (e) => {
        const formData = new FormData(e.target);
        e.preventDefault();

        const user = Object.fromEntries(formData.entries());

        if (!user.username || !user.password) {
            setErrors({ ...errors, Err_emptyInput: "Please fill all the fields!" })
        };

        try {
            axios.post("http://localhost:9000/uplay/signIn", formData)
                .then(res => {
                    const token = res.data
                    setToken(token.token);
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

                <form onSubmit={UserInputs} className="mt-4 flex flex-col gap-2">
                    <div className="">
                        <label htmlFor="username" className="dark:text-white">Username</label>
                        <input
                            required
                            type="text"
                            name="username"
                            id="username"
                            className="w-full py-2 outline-none pl-2 dark:border-white border-gray-600 
                            dark:text-white bg-transparent border"
                        />
                    </div>
                    <div className="">
                        <label htmlFor="password" className="dark:text-white">Passoword</label>
                        <input
                            required
                            type="text"
                            name="password"
                            id="password"
                            className="w-full py-2 outline-none pl-2 dark:border-white border-gray-600 
                            dark:text-white bg-transparent border"
                        />
                    </div>
                    <p className="">
                        <span>Don't have an account? </span>
                        <span
                            role="button"
                            onClick={() => { setRegister(true); setLogin(false) }}
                            className="text-blue-600 hover:underline">
                            Sign Up
                        </span>
                    </p>
                    <button type="submit" className="">
                        <div className="uppercase flex justify-center items-center gap-1.5 w-full py-2 bg-blue-600 dark:text-white 
                        text-white">
                            <span>Sign In </span>
                            <span>
                                <BiLogInCircle className="scale-150" />
                            </span>
                        </div>
                    </button>
                    <div
                        role="button"
                        onClick={() => setLogin(false)}
                        className="uppercase w-full py-2 bg-gray-400 dark:text-white flex justify-center items-center text-white">
                        <span>Cancel</span><span><BiUndo className="scale-150" /></span>
                    </div>
                </form>
            </div>
        </div>
    )
}
