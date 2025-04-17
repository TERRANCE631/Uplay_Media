import React from 'react'
import { BiLogInCircle, BiUndo } from 'react-icons/bi';

export function LogIn({ setRegister, setLogin }) {
    return (
        <div className="flex flex-col fixed z-20 mt-[4.5rem] bg-black bg-opacity-40 h-screen w-full">
            <div className="fixed p-2 z-20 right-0 md:w-[50%] w-full border-l w-full h-screen bg-slate-100 dark:bg-gray-700">
                <p className="border-b dark:border-white border-gray-600 text-center text-xl 
            font-extrabold tracking-wide dark:text-white text-gray-800">Sign In</p>
                <div className="mt-4 flex flex-col gap-2">
                    <div className="">
                        <label htmlFor="" className="dark:text-white">E-mail</label>
                        <input type="text" className="w-full py-2 outline-none pl-2 dark:border-white border-gray-600 
                    dark:text-white bg-transparent border" />
                    </div>
                    <div className="">
                        <label htmlFor="" className="dark:text-white">Passoword</label>
                        <input type="text" className="w-full py-2 outline-none pl-2 dark:border-white border-gray-600 
                    dark:text-white bg-transparent border" />
                    </div>
                    <p className="">
                        <span>Don't have an account? </span>
                        <span
                            onClick={() => { setRegister(true); setLogin(false) }}
                            role="button"
                            className="text-blue-600 hover:underline">
                            Sign Up
                        </span>
                    </p>
                    <div className="">
                        <button className="uppercase flex justify-center items-center gap-1.5 w-full py-2 bg-blue-600 dark:text-white text-white">
                            <span>Sign In </span><span><BiLogInCircle className="scale-150" /></span>
                        </button>
                    </div>
                    <button
                        onClick={() => setLogin(false)}
                        className="uppercase w-full py-2 bg-gray-400 dark:text-white flex justify-center items-center text-white">
                        <span>Cancel</span><span><BiUndo className="scale-150" /></span>
                    </button>
                </div>
            </div>
        </div>
    )
}
