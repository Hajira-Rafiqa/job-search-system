import { Divider } from "@mui/material";
import PostedJob from "../PostedJob/PostedJob";
import PostedJobDesc from "../PostedJob/PostedJobDesc";
import JobHistory from "../JobHistory/JobHistory";

const JobHistoryPage=()=> {
    return <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] text-mine-shaft-300 p-4">
        <Divider mr="xs" size="xs" sx={{ bgcolor: "#6d6d6d", borderBottomWidth: 2, marginBottom: 1.5 }}/>
        
        <div className="my-5">
            <JobHistory />
        </div>
    
    </div>
}

export default JobHistoryPage;