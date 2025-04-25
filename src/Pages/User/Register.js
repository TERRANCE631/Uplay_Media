import React, { useState } from 'react'
import { BiErrorCircle, BiUndo, BiUserPlus } from 'react-icons/bi';
import axios from 'axios';

export function Register({ setRegister, setLogin }) {
    const [profile_image, setProfile_image] = useState(null);
    const [errors, setErrors] = useState({
        Err_emptyInput: "",
        usernameErr: "",
        emailErr: "",
        imageErr__emptyInput: "",
    });

    const [userDetails, setUserDetails] = useState({
        username: "",
        email: "",
        password: "",
    });
    const { username, email, password } = userDetails

    const UserInputs = (e) => {
        e.preventDefault()

        if (!username || !email || !password || !profile_image) {
            setErrors({ ...errors, Err_emptyInput: "Please fill all the fields!" })
        };

        if (username && !username.match(/[A-Za-z0-9.@]/) || email && !email.match(/[A-Za-z0-9.@]/))
            return setErrors({ ...errors, usernameErr: "Username / Email can only have A-Z a-z 0-9 . @ / latters and numbers." });

        // const users = new FormData();

        // users.append("username", userDetails.username);
        // users.append("email", userDetails.email);
        // users.append("password", userDetails.password);
        // users.append("image", profile_image);

        // try {
        //     axios.post("http://localhost:9000/uplay/register", users)
        //         .then(res => console.log(res.data))
        //         .catch(error => console.log(error));
        // } catch (error) {
        //     console.log(error);
        // }

        setUserDetails({ ...userDetails, username: "", email: "", password: "" })
    };

    return (
        <div className="flex flex-col fixed z-20 mt-[4.5rem] bg-black bg-opacity-40 h-screen w-full">
            <div className="fixed p-2 z-20 right-0 md:w-[50%] w-full border-l w-full h-screen bg-slate-100 dark:bg-gray-700">

                <p className="border-b dark:border-white border-gray-600 text-center text-xl 
                    font-extrabold tracking-wide dark:text-white text-gray-800">Sign Up</p>

                <div className={`${errors.Err_emptyInput !== ""
                    ? "flex flex-col justify-center items-center duration-500 translate-x-0"
                    : "flex flex-col justify-center items-center duration-500 translate-x-[120%]"}`}
                >

                    <div className={`${errors.Err_emptyInput !== ""
                        ? "bg-slate-300 gap-1 md:w-[90%] p-2 text-sm flex absolute justify-center py-2 items-center rounded-lg border border-gray-600 dark:text-white"
                        : "hidden"
                        }`}>
                        <p className="text-red-600 scale-150"><BiErrorCircle /></p>
                        <p className="text-black tracking-wide">{errors.Err_emptyInput}</p>
                    </div>
                </div>

                <div className={`${errors.emailErr !== "" || errors.usernameErr !== ""
                    ? "flex flex-col justify-center items-center duration-500 translate-x-0"
                    : "flex flex-col justify-center items-center duration-500 translate-x-[120%]"}`}
                >
                    <div className={`${errors.usernameErr !== ""
                        ? "bg-slate-300 gap-1 md:w-[90%] px-2 w-full text-sm flex absolute py-1 items-center rounded-lg border border-gray-600 dark:text-white"
                        : "hidden"
                        }`}>
                        <p className="text-red-600 scale-150"><BiErrorCircle /></p>
                        <p className="">{errors.usernameErr}</p>
                    </div>
                    <div className={`${errors.emailErr !== ""
                        ? "bg-slate-300 gap-1 md:w-[90%] text-center w-full text-sm flex absolute py-1 items-center rounded-lg border border-gray-600 dark:text-white"
                        : "hidden"
                        }`}>
                        <p className="text-red-600 scale-150"><BiErrorCircle /></p>
                        <p className="">{errors.emailErr}</p>
                    </div>
                </div>

                <form onSubmit={UserInputs} className="mt-4 flex flex-col gap-2">
                    <div className="">
                        <label htmlFor="username" className="dark:text-white">Userame</label>
                        <input

                            type="text"
                            name="username"
                            id="username"
                            value={userDetails.username}
                            onChange={(e) => {
                                userDetails.username !== "" && setErrors({ ...errors, Err_emptyInput: "", usernameErr: "", emailErr: "" })
                                setUserDetails({ ...userDetails, username: e.target.value })
                            }}
                            className="w-full focus:border-blue-600 focus:shadow-blue-600 focus:shadow-sm py-2 outline-none pl-2 
                            dark:border-white border-gray-600 rounded-lg dark:text-white bg-transparent border"
                        />
                    </div>
                    <div className="">
                        <label htmlFor="email" className="dark:text-white">E-mail</label>
                        <input
                            // required
                            type="text"
                            name="email"
                            id="email"
                            value={userDetails.email}
                            onChange={(e) => {
                                userDetails.email !== "" && setErrors({ ...errors, Err_emptyInput: "", usernameErr: "", emailErr: "" })
                                setUserDetails({ ...userDetails, email: e.target.value })
                            }}
                            className="w-full py-2 outline-none pl-2 dark:border-white border-gray-600 
                            dark:text-white bg-transparent border rounded-lg focus:border-blue-600 focus:shadow-blue-600 focus:shadow-sm"
                        />
                    </div>
                    <div className="">
                        <label htmlFor="password" className="dark:text-white">Passoword</label>
                        <input
                            // required
                            type="text"
                            name="password"
                            id="password"
                            value={userDetails.password}
                            onChange={(e) => {
                                userDetails.password !== "" && setErrors({ ...errors, Err_emptyInput: "", usernameErr: "", emailErr: "" })
                                setUserDetails({ ...userDetails, password: e.target.value })
                            }}
                            className="w-full py-2 outline-none pl-2 dark:border-white border-gray-600 
                            dark:text-white bg-transparent border rounded-lg focus:border-blue-600 focus:shadow-blue-600 focus:shadow-sm"
                        />
                    </div>
                    <div className="">
                        <label htmlFor="profile_image" className="dark:text-white">Upload Profile Picture</label>
                        <input
                            // required
                            onChange={(e) => setProfile_image(e.target.files[0])}
                            name="profile_image"
                            id="profile_image"
                            type="file"
                            className="w-full py-2 outline-none upload__btn rounded-lg border 
                            dark:border-white bg-transparent border-gray-600 focus:border-blue-600 focus:shadow-blue-600 focus:shadow-sm"
                        />
                    </div>

                    <p className="">
                        <span>Already have an account? </span>
                        <span
                            onClick={() => { setRegister(false); setLogin(true) }}
                            role="button"
                            className="text-blue-600 hover:underline">
                            Sign In
                        </span>
                    </p>

                    <button type="submit" className="uppercase w-full py-2 flex justify-center items-center gap-1.5 bg-blue-600 dark:text-white 
                        text-white rounded-lg">
                        <span>Sign Up</span>
                        <span>
                            <BiUserPlus className="scale-150" />
                        </span>
                    </button>

                    <button
                        role="button"
                        onClick={() => setRegister(false)}
                        className="uppercase rounded-lg w-full py-2 bg-gray-400 flex justify-center items-center dark:text-white text-white">
                        <span>Cancel</span>
                        <span>
                            <BiUndo className="scale-150" />
                        </span>
                    </button>
                </form>
            </div>

        </div>
    )
}
