import { BiDownload, BiLike, BiSolidHandUp } from "react-icons/bi";

export const dashboardList = [
    {
        title: "Downloads",
        dot: <span className="bg-yellow-500 border border-black px-2  rounded-full" />,
        amount: 30000,
        icon: <BiDownload />
    },
    {
        title: "Clicks",
        dot: <span className="bg-green-700 border border-black px-2  rounded-full" />,
        amount: 50000,
        icon: <BiSolidHandUp />
    },
    {
        title: "Likes",
        dot: <span className="bg-blue-700 border border-black px-2  rounded-full" />,
        amount: 20000,
        icon: <BiLike />
    },
]

export const stats = [
    {
        title: "Downloads",
        downnloads: 3000
    },
    {
        title: "Likes",
        likes: 2000,
    },
    {
        title: "Clicks",
        clicks: 5000
    },
]
