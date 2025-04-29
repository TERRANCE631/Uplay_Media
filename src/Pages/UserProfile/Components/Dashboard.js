import { BiSolidAddToQueue, BiSolidLike } from "react-icons/bi";

export const dashboardList = [
    {
        title: "Likes",
        dot: <span className="bg-yellow-500 border border-black px-2 rounded-full" />,
        amount: 30000,
        icon: <BiSolidLike />
    },
    {
        title: "Subscribers",
        dot: <span className="bg-green-700 border border-black px-2 rounded-full" />,
        amount: 50000,
        icon: <BiSolidAddToQueue />
    }
]

export const stats = [
    {
        title: "Likes",
        Likes: 3000
    },
    {
        title: "Subscribers",
        Subscribers: 2000,
    }
]
