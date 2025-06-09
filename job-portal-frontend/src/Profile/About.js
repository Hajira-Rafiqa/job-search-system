import { IconButton, TextareaAutosize } from "@mui/material";
import { IconX, IconPencil, IconCheck, } from "@tabler/icons-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { changeProfile } from "../Slices/ProfileSlice";

const About=()=> {
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);
    const [about, setAbout] = useState("");
    const profile = useSelector((state)=>state.profile);
    
    const handleEdit=(index)=> {
        if (!edit){
            setEdit(true);
            setAbout(profile.about);
            
            //form.setValue("jobTitle", profile.jobTitle)
            //form.setValue("company", profile.company)
            //form.setValue("location", profile.location);
        }
        else {
            setEdit(false);
        }
    };

    const handleSave=()=> {
        setEdit(false);
        let updatedProfile = {...profile, about:about}
        dispatch(changeProfile(updatedProfile));
        
        toast.success('About Updated Successfully', {
            position: "top-right", autoClose: 4000, hideProgressBar: false, closeOnClick: false,
            pauseOnHover: true, draggable: false, progress: undefined, theme: "light",
        });
    }

    return <div className="px-3">
        <div className="text-2xl font-semibold mb-3 text-mine-shaft-300 flex justify-between">About
            <div>
                {edit&&<IconButton size="small" sx={{color: '#ffbd20'}} onClick={handleSave}> 
                    <IconCheck fontSize="inherit" className="h-4/5 w-4/5" color="green" />
                </IconButton>}

                <IconButton size="small" sx={{color: '#ffbd20'}} onClick={handleEdit}> 
                    {edit?<IconX fontSize="inherit" className="h-4/5 w-4/5" color="red" />
                    :
                    <IconPencil fontSize="inherit" className="h-4/5 w-4/5" color="#ffbd20" />}
                </IconButton>
            </div>
        </div>
        
        {
            edit? 
            <TextareaAutosize minRows={3} placeholder="Enter About yourself..." 
            defaultValue={profile?.about} onChange={(event) => {
                setAbout(event.target.value);
            }}
            style={{ width: "100%", backgroundColor: '#2d2d2d', padding: '10px 0', 
                border: '1px solid #454545', color: "#b0b0b0" }} />
            :
            <div className="text-sm text-mine-shaft-300 text-justify"> {profile?.about} </div> 
        }
        
    </div>
}

export default About;