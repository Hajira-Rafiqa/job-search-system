import { IconExternalLink } from "@tabler/icons-react";
import MenuItem from '@mui/material/MenuItem';


const CompanyCard = (props) =>
{
    return <div>
        <div className="flex justify-between bg-mine-shaft-900 items-center rounded-lg p-2">
            <div className="flex gap-2 items-center">
                <div className="p-2 bg-mine-shaft-800 rounded-md">
                    <img className="h-7" src={`/Icons/${props.name}.png`} alt="" />
                </div>
                <div>
                    <div className="font-semibold">{props.name}</div>
                    <div className="text-xs text-mine-shaft-300">{props.employees} Employees</div>
                </div>
            </div>
            <MenuItem value="Most Recent" sx={{fontSize:'small', color:'#ffbd20'}}>
                <IconExternalLink />
            </MenuItem>
        </div>
    
    </div>
}

export default CompanyCard;