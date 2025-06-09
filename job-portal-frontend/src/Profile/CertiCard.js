import { IconTrash } from "@tabler/icons-react";
import { IconButton } from "@mui/material";
import { formatDate } from "../Services/Utilities";

const CertiCard =(props) => {
    return <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="p-2 bg-mine-shaft-800 rounded-md">
                    <img className="h-7" src={`/Icons/${props.issuer}.png`} alt="" />
                </div>
                <div className="flex flex-col">
                    <div className="font-semibold">{props.name}</div>
                    <div className="text-sm text-mine-shaft-300">{props.issuer}</div>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <div className="flex flex-col items-end">
                    <div className="text-sm text-mine-shaft-300">{formatDate(props.issueDate)}</div>
                    <div className="text-sm text-mine-shaft-300">ID : {props.certificateId}</div>
                </div>

                {props.edit&&<IconButton size="small" sx={{color: 'red'}} > 
                    <IconTrash fontSize="inherit" className="h-4/5 w-4/5" color="red" stroke={1.5} />
                </IconButton>}
            </div>
            
        </div>
}

export default CertiCard;