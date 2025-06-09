import { Divider } from "@mui/material";
import Profile from "../Profile/Profile";
import { profile } from "../Data/TalentData";

const ProfilePage =()=>{
    return <div className="min-h-[90vh], bg-mine-shaft-950 font-['poppins']">
        
        <Divider mr="xs" size="xs" sx={{ bgcolor: "#6d6d6d", borderBottomWidth: 2, marginBottom: 4 }} mx="md" />

        <div className="flex gap-5">
            <Profile {...profile} />
        </div>  

    </div>

}

export default ProfilePage;