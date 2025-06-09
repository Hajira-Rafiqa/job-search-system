import { Divider, Button } from "@mui/material"
import { IconAffiliate } from "@tabler/icons-react";
import SignUp from "../SignUpLogin/SignUp";
import Login from "../SignUpLogin/Login";
import { IconArrowLeft } from "@tabler/icons-react";
import { useLocation, useNavigate } from "react-router-dom";

const SignUpPage = () =>{
    const location = useLocation();
    const navigate = useNavigate();
    return <div className="min-h-[90vh], bg-mine-shaft-950 font-['poppins'] overflow-hidden ">

        <Button startIcon={<IconArrowLeft />}  variant="contained" onClick={()=>navigate("/")}
                sx={{ color: "#7a330d", bgcolor:'#feff7f', textTransform: 'capitalize', marginBottom: 2,
                    position: "absolute", marginTop: 2, marginLeft: 3, zIndex: 10
                  }}> 
                Home </Button>

        <div className={`w-[100vw] h-[100vh] transition-all easy-in-out duration-1000 gap-2 flex [&>*]:flex-shrink-0 
            ${location.pathname=='/signup'?'-translate-x-1/2':'translate-x-0'}`}>
            <Login/>
            <div className={`w-1/2 h-full transition-all duration-1000 easy-in-out ${location.pathname=="/signup"?"rounded-r-[200px]":"rounded-l-[200px]" } 
            bg-mine-shaft-900 flex items-center gap-2 justify-center flex-col`}>
            <div className="flex gap-1 items-center text-bright-sun-400">
            <IconAffiliate className="h-20 w-20"  stroke={1.25}/>
            <div className="text-4xl font-semibold" >Job Search System</div>
            </div>
            <div className="text-2xl text-mine-shaft-200 font-semibold">Find Job Made For You</div>
            </div>
            <SignUp/>
        </div>
       
    </div>
}

export default SignUpPage;