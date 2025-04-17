import React from 'react'
import { BiLogIn, BiUndo, BiUserPlus } from 'react-icons/bi';

export function Register({ setRegister, setLogin }) {
    return (
        <div className="flex flex-col fixed z-20 mt-[4.5rem] bg-black bg-opacity-40 h-screen w-full">
            <div className="fixed p-2 z-20 right-0 md:w-[50%] w-full border-l w-full h-screen bg-slate-100 dark:bg-gray-700">
                <p className="border-b dark:border-white border-gray-600 text-center text-xl 
            font-extrabold tracking-wide dark:text-white text-gray-800">Sign Up</p>
                <div className="mt-4 flex flex-col gap-2">
                    <div className="">
                        <label htmlFor="" className="dark:text-white">Name</label>
                        <input type="text" className="w-full py-2 outline-none pl-2 dark:border-white border-gray-600 
                    dark:text-white bg-transparent border" />
                    </div>
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
                    <div className="">
                        <label htmlFor="video" className="dark:text-white">Upload Profile Picture</label>
                        <input name="image" type="file" className="w-full py-2 outline-none upload__btn border 
                    dark:border-white bg-transparent border-gray-600" />
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

                    <div className="">
                        <button className="uppercase w-full py-2 flex justify-center items-center gap-1.5 bg-blue-600 dark:text-white text-white">
                            <span>Sign Up</span><span><BiUserPlus className="scale-150" /></span>
                        </button>
                    </div>
                    <button
                        onClick={() => setRegister(false)}
                        className="uppercase w-full py-2 bg-gray-400 flex justify-center items-center dark:text-white text-white">
                        <span>Cancel</span><span><BiUndo className="scale-150" /></span>
                    </button>
                </div>
            </div>

        </div>
    )
}
