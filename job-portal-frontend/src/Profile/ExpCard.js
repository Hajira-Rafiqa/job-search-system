import { Button } from "@mui/material";
import ExpInput from "./ExpInput";
import { useState } from "react";
import { formatDate } from "../Services/Utilities";
import { useSelector } from "react-redux";

const ExpCard =(props) => {
    const [edit, setEdit] = useState(false);
    const profile = useSelector((state)=>state.profile);

    console.log("Profile");
    console.log(profile);
    console.log("Profile 1");
    
    return !edit?<div className="flex flex-col gap-2">

        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="p-2 bg-mine-shaft-800 rounded-md">
                    <img className="h-7" src={`/Icons/${props.company}.png`} alt="" />
                </div>
                <div className="flex flex-col">
                    <div className="font-semibold">{props.title}</div>
                    <div className="text-sm text-mine-shaft-300">{props.company} &bull; {props.location} </div>
                </div>
            </div>
            
            <div className="text-sm text-mine-shaft-300">
                {formatDate(props.startDate)} - {formatDate(props.endDate)}
            </div>
        </div>

        <div className="text-sm text-mine-shaft-300 text-justify">
            {props.description}
        </div>

        {props.edit&&<div className="flex gap-2">
            <Button variant="outlined" onClick={()=>setEdit(true)}
            sx={{ borderColor: "#ffd149", color: "#ffd149", textTransform: 'capitalize' }} > Edit </Button>
            
            <Button variant="contained" 
            sx={{ color: "red", bgcolor:'#cf8f96', textTransform: 'capitalize' }} > Delete </Button>
        </div>
        }

    </div>: <ExpInput {...props} setEdit={setEdit} />
}

export default ExpCard;