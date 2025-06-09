import { IconX, IconPencil, IconCheck, } from "@tabler/icons-react";
import { Divider, IconButton, TextareaAutosize } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { changeProfile } from "../Slices/ProfileSlice";
import { useEffect, useState } from "react";
import Select from 'react-select';
import { skillsData } from "../Data/Profile";


const Skills = ()=>{
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);
    const [skills, setSkills] = useState([]);
    const profile = useSelector((state)=>state.profile);
/*
    console.log("Array")
    console.log(skills)

    let dictionary = Object.assign({}, skills.map((x) => ({'value': x, 'label': x})));
    dictionary =  [
        {   
            "options": [
                dictionary
            ]
        }
    ]
    console.log("dictionary")
    console.log(dictionary)


    
    useEffect(()=>{
        console.log("Skills")
        console.log(skills);
        console.log("Skills1")
        setSkills(skills.map((skill) => { 'value'=skill, 'label'=skill }));  
        const keys = names.map(({name}) => name);
        console.log(skills);
        console.log("Skills2")
      }, [])
    */
    
    const handleEdit=(index)=> {
        if (!edit){
            setEdit(true);
            setSkills(profile.skills);
            
            //form.setValue("jobTitle", profile.jobTitle)
            //form.setValue("company", profile.company)
            //form.setValue("location", profile.location);
        }
        else {
            setEdit(false);
        }
    };

    const handleChange = (selectedOptions) => {
        setSkills(selectedOptions.map(o => o.value) );
      }

    const handleSave=()=> {
        setEdit(false);
        let updatedProfile = {...profile, skills:skills}
        dispatch(changeProfile(updatedProfile));
        
        toast.success('Skills Updated Successfully', {
            position: "top-right", autoClose: 4000, hideProgressBar: false, closeOnClick: false,
            pauseOnHover: true, draggable: false, progress: undefined, theme: "light",
        });
    }


    return <div className="px-3">
        <div className="text-2xl font-semibold mb-3 text-mine-shaft-300 flex justify-between">Skills
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
            edit ? <Select isMulti name="colors" options={skillsData} className="basic-multi-select" 
            placeholder="Add skills" onChange={handleChange} closeMenuOnSelect={false}
            styles={{
                control: (provided) => ({...provided, boxShadow: "none", backgroundColor: '#2d2d2d' ,
                    borderColor: '#3d3d3d', '&:hover': { borderColor: '#ffbd20' }, 
                    textEmphasisColor: '#f6f6f6',
                }),
                indicatorSeparator: (base) => ({...base, display: "none", }),
                option: (styles) => {
                    return {
                        ...styles, color: 'black', '&:hover': { borderColor: '#ffbd20' }, fontSize: 15
                    };
                },
                singleValue: (provided, { data }) => ({ ...provided, color: "#b0b0b0", })
            }}
            />
            :
            <div className="flex flex-wrap gap-2">
                {
                    profile?.skills?.map((skill, index) => 
                    <div key={index} className="bg-bright-sun-300 text-sm font-medium bg-opacity-15 
                    rounded-3xl text-bright-sun-400 px-3 py-1">{skill}</div>)
                }
            </div> 
        }
            
</div>
}

export default Skills;