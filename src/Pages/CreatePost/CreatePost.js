import React from 'react'

export function CreatePost() {
    return (
        <div className="flex flex-col fixed z-20 mt-[4.5rem] xl:pl-[4rem] md:pl-[8%] lg:pl-[6%] bg-black bg-opacity-40 h-screen w-full">
            <div className="lg:w-[50%] md:w-[50%] w-[100%] flex flex-col gap-6 bg-slate-100 h-full md:border-r p-2 
            dark:bg-gray-700 dark:text-white">
                <div className="">
                    <label htmlFor="title" className="text-[19px]">Title</label>
                    <textarea
                        rows={4}
                        name="title"
                        placeholder="How to post a video on uplay?"
                        type="text"
                        className="w-full p-1 outline-none bg-transparent border dark:border-white border-gray-600"
                    />
                </div>

                <div className="">
                    <label htmlFor="category" className="text-[19px]">Category</label>
                    <select name="category" className="w-full dark:bg-gray-700 outline-none py-3 bg-transparent border dark:border-white 
                    border-gray-600">
                        <option value="gaming">Gaming</option>
                        <option value="education">Education</option>
                        <option value="content">Content</option>
                        <option value="music">Music</option>
                        <option value="movies">Movies</option>
                        <option value="working_music">Working Music</option>
                    </select>
                </div>

                <div className="">
                    <label htmlFor="video" className="text-[19px]">Upload (video)</label>
                    <input name="video" type="file" accept="video/mp4" className="w-full py-2 outline-none upload__btn border 
                    dark:border-white bg-transparent border-gray-600" />
                </div>

                <div className="">
                    <button className="bg-blue-700 py-2 w-full text-white uppercase">
                        Upload
                    </button>
                </div>
            </div>
        </div>
    )
}
