import { jobList } from "../Data/JobData";
import JobCard from "../FindJobs/JobCard";

const RecommendedJob=()=> {
    return <div>
        <div className="text-xl font-semibold mb-5">Recommend Jobs</div>
            <div className="flex flex-col flex-wrap gap-2">
                {
                    jobList.map((job, index)=>index < 6 && <JobCard key={index} {...job} /> )
                }
            </div>
    </div>
}

export default RecommendedJob;