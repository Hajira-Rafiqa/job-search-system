import { Divider, Button } from "@mui/material";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Profile from "../TalentProfile/Profile";
import { profile } from "../Data/TalentData";
import RecommendTalent from "../TalentProfile/RecommendTalent";

const TalentProfilePage = () =>{

    return(
        <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] text-mine-shaft-300 p-4">
            <Divider mr="xs" size="xs" sx={{ bgcolor: "#6d6d6d", borderBottomWidth: 2, marginBottom: 1.5 }}/>
            
            <Link className="my-4 inline-block" to="/find-talent">
            <Button startIcon={<IconArrowLeft />} variant="contained" 
                sx={{ color: "#7a330d", bgcolor:'#feff7f', textTransform: 'capitalize' }}> Back </Button>
            </Link>
            
            <div className="flex gap-5">
                <Profile {...profile} />
                <RecommendTalent/>  
            </div>  
            
        </div>
    )
}

export default TalentProfilePage;