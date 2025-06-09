import { IconBookmark, IconBookmarkFilled, IconClockHour3, IconCalendarMonth } from "@tabler/icons-react";
import { Button } from "@mui/material";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";

const Card =(props)=> {

    return <Link to="/jobs" className="bg-mine-shaft-900 p-4 w-72 flex flex-col gap-3 rounded-xl 
    hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400">

        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="p-2 bg-mine-shaft-800 rounded-md">
                    <img className="h-7" src={`/Icons/${props.company}.png`} alt="" />
                </div>
                <div>
                    <div className="font-semibold">{props.jobTitle}</div>
                    <div className="text-xs text-mine-shaft-300">{props.company} &#x2022; {props.applicants} Applicants</div>
                </div>
            </div>
            {props.saved? <IconBookmarkFilled className="text-bright-sun-400 cursor-pointer" /> :<IconBookmark className="text-mine-shaft-300 cursor-pointer" />}
        </div>
        <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 
        [&>div]:text-bright-sun-400 [&>div]:rounded-lg text-xs">
            <div>{props.experience}</div>
            <div>{props.jobType}</div>
            <div>{props.location}</div>
        </div>
        
        <p className=" !line-clamp-3 !text-xs text-justify !text-mine-shaft-300">
            {props.description}
        </p>
        <Divider mr="xs" size="xs" sx={{ bgcolor: "#6d6d6d", borderBottomWidth: 2, marginTop:0.5 }}  />
        <div className="flex justify-between">
            <div className="font-semibold text-mine-shaft-200">
                &#8377; {props.package}
            </div>
            <div className="flex gap-1 text-xs text-mine-shaft-400 items-center">
                <IconClockHour3 className="h-5 w-5" stroke={1.5}/> 
                {(props.applied || props.interviewing)?"Applied": props.offered?"Interviewed":"Posted"} {props.postedDaysAgo} days ago
            </div>
        </div>

        {(props.offered || props.interviewing) && <Divider mr="xs" size="xs" sx={{ bgcolor: "#6d6d6d", borderBottomWidth: 2, marginTop:0.5 }}  />}
        {
            props.offered &&<div className="flex gap-2">
                <Button variant="outlined" 
                sx={{ borderColor: "#ffd149", color: "#ffd149", textTransform: 'capitalize' }} 
                                    fullWidth> Accept </Button>
                <Button variant="contained" 
                                    sx={{ color: "#7a330d", bgcolor:'#feff7f', textTransform: 'capitalize' }} 
                                    fullWidth> Reject </Button>
            </div>
        }

        {
            props.interviewing &&<div className="flex gap-1 text-sm items-center">
                <IconCalendarMonth className="text-bright-sun-400 w-5 h-5" stroke={1.5} /> Sun, 25 August &bull; 
                    <span className="text-mine-shaft-400">10:00 AM</span>
            </div>
        }
        
    </Link>
}

export default Card;