import { talents } from "../Data/TalentData";
import TalentCard from "../FindTalent/TalentCard";

const RecommendTalent=()=> {
    return <div>
        <div className="text-xl font-semibold mb-5">Recommend Talent</div>
            <div className="flex flex-col flex-wrap gap-2">
                {talents.map((talents, index)=>index < 4 && <TalentCard key={index} {...talents} /> )}
            </div>
    </div>
}

export default RecommendTalent;