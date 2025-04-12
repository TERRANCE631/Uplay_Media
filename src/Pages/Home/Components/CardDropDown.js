import { BiDownload, BiLike } from 'react-icons/bi'

export function CardDropDown() {
    return (
        <dropdown className="absolute md:w-[10rem] w-[50%] min-h-[6rem] 2xl:ml-[7rem] xl:ml-[9rem] lg:ml-[7.5rem] md:ml-[9.5rem] rounded-lg 
                md:mt-[10.5rem] small medium large mt-[11rem] bg-black/20 backdrop-blur-lg">
            <section className="p-2 shadow-inner shadow-black rounded-lg">
                <div role="button" className="flex border my-1 text-lg bg-gray-400/50 
                hover:bg-gray-400 rounded-lg p-1 justify-center items-center gap-1">
                    <p className="text-blue-600">
                        <BiLike />
                    </p>
                    <p className="">Like</p>
                </div>
                <div className="border-b" />

                <div role="button" className="flex border my-1 text-lg justify-center bg-gray-400/50 
                    hover:bg-gray-400 rounded-lg p-1 items-center gap-1">
                    <p className="text-blue-600">
                        <BiDownload />
                    </p>
                    <p className="">Download</p>
                </div>
            </section>
        </dropdown>

    )
}
