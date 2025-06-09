import { Divider, Button } from "@mui/material";
import { IconArrowLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import Company from "../CompanyProfile/Company";
import SimilarCompanies from "../CompanyProfile/SimilarCompanies";

const CompanyPage=()=> {
    const navigate = useNavigate();

    return <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] text-mine-shaft-300 p-4">
    <Divider mr="xs" size="xs" sx={{ bgcolor: "#6d6d6d", borderBottomWidth: 2, marginBottom: 1.5 }}/>
    
    <Button startIcon={<IconArrowLeft />} variant="contained" onClick={()=>navigate(-1)}
        sx={{ color: "#7a330d", bgcolor:'#feff7f', textTransform: 'capitalize', marginBottom: 2  }}> Back </Button>
    
    <div className="flex gap-5 justify-between">
        <Company />
        <SimilarCompanies />
    </div>

</div>
}

export default CompanyPage;