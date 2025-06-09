import { useState } from "react";
import { fields } from "../Data/Profile";
import { IconButton } from "@mui/material";
import SelectInput from "./SelectInput";
import { IconBriefcase, IconCheck, IconDeviceFloppy, IconMapPin, IconPencil, IconPlus, IconX } from "@tabler/icons-react";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../Slices/ProfileSlice";
import { toast } from 'react-toastify';

const Info=()=> {
    const select = fields;
    const dispatch = useDispatch();

    const user = useSelector((state)=>state.user);
    const profile = useSelector((state)=>state.profile);
    //const [edit, setEdit] = useState([false, false, false, false, false]);
    const [edit, setEdit] = useState(false);
    const form = useForm({
        mode: 'all',
        defaultValues: {jobTitle: '', company: '', location: ''}
    });


    const handleEdit=(index)=> {
        //const newEdit = [...edit];
        //newEdit[index] =! newEdit[index];
        //setEdit(newEdit);
        
        if (!edit){
            setEdit(true);
            
            //added
            form.setValue("jobTitle", profile.jobTitle)
            form.setValue("company", profile.company)
            form.setValue("location", profile.location);
        }
        else {
            setEdit(false);
        }
    };

    const handleSave=()=> {

        setEdit(false);
            let updatedProfile = {...profile, ...form.getValues()}
            dispatch(changeProfile(updatedProfile));
            
            toast.success('Profile Info Updated Successfully', {
                position: "top-right", autoClose: 4000, hideProgressBar: false, closeOnClick: false,
                pauseOnHover: true, draggable: false, progress: undefined, theme: "light",
            });

    }

    return <>
        <div className="text-3xl font-semibold flex justify-between text-mine-shaft-300"> {user?.name} 
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
            edit?<>
                <div className="flex gap-10 [&>*]:w-1/2">
                    <SelectInput form={form} name="jobTitle" {...select[0]} />
                    <SelectInput form={form} name="company" {...select[1]} />
                </div>
                <SelectInput form={form} name="location" {...select[2]} />
                </>
                :
                <>
                <div className="text-xl flex gap-1 items-center text-mine-shaft-300">
                    <IconBriefcase className="h-5 w-5" stroke={1.5}/> 
                    {profile.jobTitle} &bull; {profile.company}
                </div>
                
                <div className="flex gap-1 text-lg text-mine-shaft-300 items-center">
                    <IconMapPin className="h-5 w-5" stroke={1.5}/> {profile.location}
                </div>
            </>
        }

    </>
}

export default Info;