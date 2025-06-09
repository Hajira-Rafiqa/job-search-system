import { similar } from "../Data/Company";
import CompanyCard from "./CompanyCard";

const SimliarCompanies =() =>
{
    return <div className="w-1/4">
        <div className="text-xl font-semibold mb-3">Similar Companies</div>
            <div className="flex flex-col flex-wrap gap-4">
                {
                    similar.map((company, index) => <CompanyCard key = {index} {...company}/>)
                }
            </div>
    </div>
}

export default SimliarCompanies;