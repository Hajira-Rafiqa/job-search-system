import { talents } from "../Data/TalentData";
import Sort from "../FindJobs/Sort";
import TalentCard from "./TalentCard";

const Talent=()=>{
    return <div className="p-3">
        <div className="flex justify-between">
            <div className="text-2xl font-semibold ">Talents</div>
            <Sort/>
        </div>
        <div className="mt-10 flex flex-wrap gap-3 justify-between">

            {
                talents.map((talent, index) => 
                    <TalentCard key={index} {...talent} />
                )
            }

           
        </div>
        
    </div>
}

export default Talent;