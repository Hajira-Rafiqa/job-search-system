import { Divider } from "@mui/material";
import TalentSearchBar from "../FindTalent/TalentSearchBar";
import Talent from "../FindTalent/Talent";



const FindTalentPage = () =>{

    return(
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] text-mine-shaft-300">
            <Divider mr="xs" size="xs" sx={{ bgcolor: "#6d6d6d", borderBottomWidth: 2, marginBottom: 4 }} mx="md" />
            <TalentSearchBar/>
            <Divider mr="xs" size="xs" sx={{ bgcolor: "#6d6d6d", borderBottomWidth: 2, marginBottom: 4, 
                marginTop:2.5 }} mx="md"/>
            <Talent/>
            
            
            
        </div>
    )
}

export default FindTalentPage;