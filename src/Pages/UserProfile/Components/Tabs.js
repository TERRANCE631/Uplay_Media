import React, { useState } from 'react'

export function Tabs({ NavBar, onClick }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const getIndex = (index) => {
        setCurrentIndex(index);
        onClick(index);
    };
    console.log(currentIndex);

    return (
        <div className="" >
            <div className="flex gap-5">
                {NavBar.map((tab, i) => {
                    return (
                        <button
                            key={tab.title}
                            onClick={() => getIndex(i)}
                            className={currentIndex === i ? "bg-slate-200 dark:bg-gray-800 rounded-t-lg py-2 px-6" : "py-2 px-6"}
                        >
                            <div className="">
                                {tab.title}
                            </div>
                        </button>
                    )
                })}
            </div>
            <div className="flex flex-col bg-slate-200 dark:bg-gray-800 h-full pb-10">
                {NavBar[currentIndex] && NavBar[currentIndex].content}
            </div>
        </div>
    )
}
