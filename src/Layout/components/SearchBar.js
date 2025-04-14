import { BiSearch } from "react-icons/bi";
import { GlobalContext } from "../../Hooks/Context/useContext";
import { videos } from "../../Pages/Home/Components/VideoList";

export function SearchBar() {
    const { setValue, value } = GlobalContext();

    const filter = videos.filter((item) => { return item.title.toLowerCase().includes(value.toLowerCase()) })
    return (
        <section className="md:flex items-center hidden w-full mx-4">
            <input
                type="text"
                onChange={(e) => setValue(e.target.value)}
                value={value}
                className="dark:bg-gray-600 bg-slate-200 border flex flex-grow dark:border-white/20 border-black/30 outline-none py-2 
                pl-4 rounded-l-full"
                placeholder="Search video here"
            />
            {value !== "" &&
                <button
                    onClick={() => setValue("")}
                    className="absolute 2xl:right-[8.3%] xl:right-[14.3%] lg:right-[20%] md:right-[26%] 
                bg-gray-500/30 hover:bg-transparent text-gray-600 dark:text-white rounded-full scale-[185%] font-thin px-2"
                >
                    &times;
                </button>}

            <button className="text-2xl hover:bg-gray-500/80 bg-gray-500/70 text-white border dark:border-white/20
                 border-black/30 py-2 px-4 rounded-r-full">
                <BiSearch />
            </button>
            {value !== "" && filter.length !== 0 &&
                <result className="flex ml-10 justify-center items-center backdrop- inset-x-0 top-[4.5rem] ite min-h-20 absolute">
                    <section className="w-[80%] flex flex-col p-2 rounded-lg dark:bg-gray-600 truncate bg-slate-200 shadow-black shadow-lg" >
                        {filter.slice(0, 8).map((name, i) => {
                            return (
                                <p className="border-gray-400 shadow-lg truncate rounded-lg border p-2 my-0.5">{name.title}</p>
                            )
                        })}
                    </section>
                </result>}
        </section>
    )
}
