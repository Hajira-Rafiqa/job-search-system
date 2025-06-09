import { Divider, Button } from "@mui/material";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import ApplyJobComp from "../ApplyJob/ApplyJobComp";

const ApplyJobPage = () =>{

    return(
        <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] text-mine-shaft-300 p-4">
            <Divider mr="xs" size="xs" sx={{ bgcolor: "#6d6d6d", borderBottomWidth: 2, marginBottom: 1.5 }}/>

            <Link className="my-4 inline-block" to="/jobs">
            <Button startIcon={<IconArrowLeft />} variant="contained" 
                sx={{ color: "#7a330d", bgcolor:'#feff7f', textTransform: 'capitalize' }}> Back </Button>
            </Link>

            <ApplyJobComp />
            
        </div>
    )
}

export default ApplyJobPage;