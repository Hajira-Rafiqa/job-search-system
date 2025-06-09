import { work } from "../Data/Data";

const Working=()=>{
    return <div className="mt-10 pb-5">
        <div className="text-3xl text-center font-semibold mb-3 text-mine-shaft-100">
            How it <span className="text-bright-sun-400">Works</span>
        </div>

        <div className="text-lg mb-2 mx-auto text-mine-shaft-300 text-center w-1/2"> Effortlessly navigate 
        through the process and land your dream job
        </div>

        <div className="flex px-12 justify-between items-center">
            <div className="">
                <img className="w-[30rem]" src="/Working/Girl.png" alt="girl" />
            </div>

            <div className="flex flex-col gap-10">
                {
                    work.map((item, index) => 
                    <div key={index} className="flex items-center gap-4">
                        <div className="p-2.5 bg-bright-sun-300 rounded-full">
                            <img className="h-12 w-12" src={`/Working/${item.name}.png`} alt={item.name} />
                        </div>
                        <div>
                            <div className="text-mine-shaft-200 text-xl font-semibold">{item.name}</div>
                            <div className="text-mine-shaft-300">{item.desc}</div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    </div>
}

export default Working;