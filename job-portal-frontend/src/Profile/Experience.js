import { IconDeviceFloppy, IconPencil, IconPlus, IconX } from "@tabler/icons-react";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ExpCard from "./ExpCard";
import ExpInput from "./ExpInput";

const Experience =()=> {

    const [edit, setEdit] = useState([false, false, false, false, false]);
    const [addExp, setAddExp] = useState(false);
    const profile = useSelector((state)=>state.profile);

    const handleEdit=()=> {
        setEdit(!edit);
    }

    return <div className="px-3">
        <div className="text-2xl font-semibold mb-5 text-mine-shaft-300 flex justify-between">Experience
            <div>
                <IconButton size="small" sx={{color: '#ffbd20'}} onClick={()=>setAddExp(true)}> 
                    <IconPlus fontSize="inherit" className="h-4/5 w-4/5" color="#ffbd20" />
                </IconButton>
            
                <IconButton size="small" sx={{color: '#ffbd20'}} onClick={handleEdit}> 
                    {edit?<IconX fontSize="inherit" className="h-4/5 w-4/5" color="red" />
                    :
                    <IconPencil fontSize="inherit" className="h-4/5 w-4/5" color="#ffbd20" />}
                </IconButton>
            </div>
        </div>
                    
        <div className="flex flex-col gap-8 text-mine-shaft-300">
            {
                profile?.experience?.map((exp, index) => <ExpCard key={index} index={index} {...exp} 
                edit={edit} />)
            }
            {addExp&&<ExpInput add setEdit={setAddExp} />}
        </div>
    </div>
}

export default Experience;