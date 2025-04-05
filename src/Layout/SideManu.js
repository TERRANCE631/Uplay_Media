import { BiLayout } from "react-icons/bi";
import { manuList } from "./components/ManuList";

export function SideManu() {
  return (
    <div className="fixed md:flex hidden flex-col mt-[4rem] truncate px-2 pt-4 -z-0 left-0 xl:w-[4rem] lg:w-[6%] md:w-[8%] dark:text-white h-screen">
      <div className="flex flex-col gap-2">
        {manuList.map((icon, i) => {
          return (
            <button key={i} className="truncate my-2 border hover:bg-gray-500 bg-gray-500/10 rounded-lg py-2 flex flex-col justify-center items-center">
              {icon.icon}
            </button>
          )
        })}
      </div>
      <div className="border-b my-4 border-gray-500 dark:border-white" />

      <div role="button" className="">
        <p className="truncate my-2 border hover:bg-gray-500 bg-gray-500/10 rounded-lg py-2 flex flex-col justify-center items-center">
          <BiLayout className="scale-150" />
        </p>
      </div>
    </div>
  )
}
