import React from 'react'

export function CreatePost() {
    return (
        <div className="px-1 flex flex-col justify-center items-center -my-3 min-h-screen w-full">
            <p className="text-3xl font-semibold uppercase text-gray-600 dark:text-white">Uploading Page</p>
            <div className="lg:w-[50%] w-[95%] flex flex-col gap-6 h-full border border-gray-600 p-2">
                <div className="">
                    <label htmlFor="title" className="text-[19px]">Title</label>
                    <textarea
                        rows={6}
                        name="title"
                        placeholder="How to post a video on uplay?"
                        type="text"
                        className="w-full p-1 outline-none bg-transparent border border-gray-600"
                    />
                </div>

                <div className="">
                    <label htmlFor="category" className="text-[19px]">Category</label>
                    <select name="category" className="w-full outline-none py-3 bg-transparent border border-gray-600">
                        <option value="gaming">Gaming</option>
                        <option value="education">Education</option>
                        <option value="content">Content</option>
                        <option value="music">Music</option>
                        <option value="movies">Movies</option>
                        <option value="working_music">Working Movies</option>
                    </select>
                </div>

                <div className="">
                    <label htmlFor="video" className="text-[19px]">Upload (video)</label>
                    <input name="video" type="file" className="w-full py-2 outline-none upload__btn border bg-transparent border-gray-600" />
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
