import { IconAffiliate, IconSettings } from "@tabler/icons-react";
import Button from '@mui/material/Button';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Badge from '@mui/material/Badge';
import NavLinks from "./NavLinks";
import { Link, useLocation } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import { useSelector } from "react-redux";

const Header =() => {
    const user = useSelector((state) => state.user);
    const location=useLocation();
    return location.pathname!=="/signup" && location.pathname!=="/login" ? <div className="w-full bg-mine-shaft-950 px-6 text-white h-20 flex justify-between 
    align items-center font-['poppins']">
        <div className="flex gap-1 items-center text-bright-sun-400">
            <IconAffiliate className="h-10 w-10"  stroke={1.25}/>
            <div className="text-2xl font-semibold" >Job Search System</div>
        </div>
        
        <NavLinks />

        <div className="flex gap-3 items-center">
            
                {user?<ProfileMenu/> : <Link to="/login">
                    <Button variant="text" sx={{color:"#ffbd20"}}>Login</Button></Link>}

                {/*<div className="bg-mine-shaft-900 p-1.5 rounded-full">
                    <IconSettings stroke={1.5}/>
                </div>

                <div className="bg-mine-shaft-900 p-1.5 rounded-full">
                <Badge sx={{
                    "& .MuiBadge-badge": {
                        backgroundColor: "#ffbd20"
                    }
                }} variant="dot">
                    <NotificationsNoneOutlinedIcon stroke={1.5} />
                </Badge>
                   
                </div>*/}
        </div>
        
    </div>:<></>
}

export default Header;