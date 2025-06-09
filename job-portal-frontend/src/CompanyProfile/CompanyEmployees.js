import TalentCard from "../FindTalent/TalentCard";
import { talents } from "../Data/TalentData";

const CompanyEmployees=()=>{
    return  <div className="mt-10 flex flex-wrap gap-5">

    {
        talents.map((talent, index) => index < 6 && <TalentCard key={index} {...talent} />
        )
    }

   
</div>
}

export default CompanyEmployees;