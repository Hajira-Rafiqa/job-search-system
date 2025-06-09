import { useEffect, useState } from "react";
import { fields } from "../Data/Profile";
import SelectInput from "./SelectInput";
import { TextareaAutosize, Typography } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import Checkbox from '@mui/material/Checkbox';
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import dayjs from 'dayjs';
import { useForm } from 'react-hook-form';
import { changeProfile } from "../Slices/ProfileSlice";
import { toast } from 'react-toastify';

const ExpInput=(props)=> {
    const dispatch = useDispatch();
    const select = fields;
    const [desc, setDesc] = useState(props.description);
    const profile = useSelector((state)=>state.profile);

    const [startDate, setStartDate] = useState(dayjs());
    const [endDate, setEndDate] = useState(dayjs());

    const [checked, setChecked] = useState(true);

    useEffect(() => {
        if(!props.add)
        {
            form.setValue("title", props.title);
            form.setValue("company", props.company);
            form.setValue("location", props.location);
            form.setValue("description", props.description);
            form.setValue("startDate", props.startDate);
            form.setValue("endDate", props.endDate);
            form.setValue("working", props.working);
        }
    })

    const form = useForm({
        mode: 'onChange',
        defaultValues: {
            title: '', 
            company: '', 
            location: '',
            description: '',
            startDate: dayjs(),
            endDate: dayjs(),
            working: false
        },
        
    });

    const handleSave=()=> {
        props.setEdit(false); 
        
        let exp=[...profile.experience];
        exp.description = desc;

        if(props.add) {
            exp.push(form.getValues());
            //exp[exp.length-1].startDate = exp[exp.length-1].startDate.toISOString();
            //exp[exp.length-1].endDate = exp[exp.length-1].endDate.toISOString();
        }
        else {
            exp[props.index]=form.getValues();
            //exp[exp.length-1].startDate = exp[exp.length-1].startDate.toISOString();
            //exp[exp.length-1].endDate = exp[exp.length-1].endDate.toISOString();
        }

        let updatedProfile = {...profile, experience:exp};
        
        props.setEdit(false);
        dispatch(changeProfile(updatedProfile));
        
        toast.success(`Experience ${props.add?"Added":"Updated"} Successfully`, {
                        position: "top-right", autoClose: 4000, hideProgressBar: false, closeOnClick: false,
                        pauseOnHover: true, draggable: false, progress: undefined, theme: "light",
                    });
    }

    //const [desc, setDesc] = useState("");
    return <div className="flex flex-col gap-3">

        <div className="text-lg font-semibold">{props.add? "Add":"Edit"} Experience</div>
        <div className="flex gap-10 [&>*]:w-1/2">
            <SelectInput form={form} name="title" {...select[0]} />
            <SelectInput form={form} name="company" {...select[1]} />
        </div>
        <SelectInput form={form} name="location" {...select[2]} />

        <div>
            <div className="text-sm font-medium mb-1">Job Description</div>

            <TextareaAutosize defaultValue={props.description} minRows={3} 
            placeholder="Enter Summary ..."
            value={desc}
            onChange={(event)=> setDesc(event.target.value)}
            style={{ width: "100%", backgroundColor: '#2d2d2d', padding: '10px 0', 
                border: '1px solid #454545' }} />
        </div>

        <div className="[&>*]:w-1/2">                
            <div className="flex flex-col">
                <Typography id="modal-modal-title" variant="h6" component="h2"> Start Date </Typography>
                
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']} sx={{color: "white"}}>
                        <DatePicker date={startDate} placeholder="Pick Date" 
                        defaultValue={dayjs(props.startDate)}
                        onChange={setStartDate} maxDate={endDate || undefined}
                        sx={{color: "white", backgroundColor: "white"}}/>
                    </DemoContainer>
                </LocalizationProvider>
            </div>  

            <div className="flex flex-col">
                <Typography id="modal-modal-title" variant="h6" component="h2"> End Date </Typography>
                
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']} sx={{color: "white"}}>
                        <DatePicker disabled={props.working} date={endDate} placeholder="Pick Date" 
                        defaultValue={dayjs(props.endDate)}
                        onChange={setEndDate} maxDate={dayjs()} minDate={startDate || undefined}
                        sx={{color: "white", backgroundColor: "white"}}/>
                    </DemoContainer>
                </LocalizationProvider>
            </div>   
            
            <div> 
                <Checkbox checked={props.checked} onChange={(event) => setChecked(event.target.checked)}
                defaultValue={props.working} /> 
                    Currently working here 
            </div>  

            <div className="flex gap-2">
                <Button variant="outlined" onClick={handleSave}
                sx={{ borderColor: "#ffd149", color: "#ffd149", textTransform: 'capitalize' }} > Save </Button>
                        
                <Button variant="contained" onClick={()=>props.setEdit(false)}
                sx={{ color: "red", bgcolor:'#cf8f96', textTransform: 'capitalize' }} > Cancel </Button>
            </div>
            
        </div>

        

    </div>
}

export default ExpInput;