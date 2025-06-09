import { IconDeviceFloppy, IconPencil, IconPlus } from "@tabler/icons-react";
import { Divider, IconButton, TextareaAutosize } from "@mui/material";
import CertiCard from "./CertiCard";
import { useEffect, useState } from "react";
import { fields,  skillsData } from "../Data/Profile";
import CertiInput from "./CertiInput";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../Services/ProfileService";
import Info from "./Info";
import { setProfile } from "../Slices/ProfileSlice";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";

const Profile=(props)=>{
    const dispatch = useDispatch();

    const [edit, setEdit] = useState([false, false, false, false, false]);
    const [addExp, setAddExp] = useState(false);
    const [addCerti, setAddCerti] = useState(false);

    const handleEdit=(index)=> {
        const newEdit = [...edit];
        newEdit[index] =! newEdit[index];
        setEdit(newEdit);
    }

    const user = useSelector((state)=>state.user);
    const profile = useSelector((state)=>state.profile);

    useEffect(() => {
        getProfile(user?.id).then((data)=>{
            dispatch(setProfile(data));
        }).catch((error)=>{
            console.log(error);
        })
    }, []);

    return <div className="w-4/5 mx-auto">

        <div className="relative">
            <img className="rounded-t-2xl w-[900xh]" src="/Profile/banner.jpg" width={2500} height={2500} alt="" />
            <img className="w-48 h-48 rounded-full -bottom-1/3 absolute left-3 border-mine-shaft-950 border-8" 
            src="/avatar.png" alt="" />
        </div>

        <div className="px-3 mt-[100px]">
            <Info /> 
        </div>

        <Divider mr="xs" mx="xs" sx={{ bgcolor: "#6d6d6d", borderBottomWidth: 2, 
            marginBottom: 3, marginTop: 3 }}/>

        <About />

        <Divider mr="xs" mx="xs" sx={{ bgcolor: "#6d6d6d", borderBottomWidth: 2, 
            marginBottom: 3, marginTop: 3 }}/>

        <Skills/>

        <Divider mr="xs" mx="xs" sx={{ bgcolor: "#6d6d6d", borderBottomWidth: 2, 
            marginBottom: 3, marginTop: 3 }}/>

        <Experience />

        <Divider mr="xs" mx="xs" sx={{ bgcolor: "#6d6d6d", borderBottomWidth: 2, 
            marginBottom: 3, marginTop: 3 }}/>

        <div className="px-3">
            <div className="text-2xl font-semibold mb-5 text-mine-shaft-300 flex justify-between">Certifications
            <div>
                    <IconButton size="small" sx={{color: '#ffbd20'}} onClick={()=>setAddCerti(true)}> 
                        <IconPlus fontSize="inherit" className="h-4/5 w-4/5" color="#ffbd20" />
                    </IconButton>

                    <IconButton size="small" sx={{color: '#ffbd20'}} onClick={()=>handleEdit(4)}> 
                        {edit[4]?<IconDeviceFloppy fontSize="inherit" className="h-4/5 w-4/5" color="#ffbd20" />
                        :
                        <IconPencil fontSize="inherit" className="h-4/5 w-4/5" color="#ffbd20" />}
                    </IconButton>
                </div>
            </div>
                <div className="flex flex-col gap-8 text-mine-shaft-300">
                    {
                        profile?.certifications?.map((certi, index) => <CertiCard key={index} 
                        edit={edit[4]} {...certi} />)
                    }
                    {
                        addCerti&&<CertiInput setEdit={setAddCerti} />
                    }
                </div>
        </div>

    </div>
}

export default Profile;