import Jobs from "../FindJobs/Jobs";
import { Divider } from "@mui/material";
import SearchBar from "../FindJobs/SearchBar";


const FindJobs = () =>{

    return(
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] text-mine-shaft-300">
            <Divider mr="xs" size="xs" sx={{ bgcolor: "#6d6d6d", borderBottomWidth: 2, marginBottom: 4 }} mx="md" />
            <SearchBar />
            <Divider mr="xs" size="xs" sx={{ bgcolor: "#6d6d6d", borderBottomWidth: 2, marginBottom: 4, 
                marginTop:2.5 }} mx="md"/>
                
                
            <Jobs />
        </div>
    )
}

export default FindJobs;