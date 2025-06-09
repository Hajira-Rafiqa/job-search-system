import { TextField, Button } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { fields } from "../Data/Profile";
import SelectInput from "./SelectInput";
import { Typography } from "@mui/material";
import dayjs from 'dayjs';
import { useState } from "react";

const CertiInput=(props)=> {
    const select = fields;
    const [issueDate, setIssueDate] = useState(dayjs());

    const styleObj = {
        //backgroundColor: "#3d3d3d",
        color: "white",    
        '.MuiOutlinedInput-notchedOutline': {
            borderColor: '#6d6d6d',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#ffd149',
        },
        '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#6d6d6d',
        },
      
        '&.Mui-focused fieldset': {
            borderColor: '#ffd149',
        },
        "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
            display: "none",
            borderColor: '#ffd149',
            height: 10         
        },
        "& .MuiInputBase-input": {  height: 4 },
        },  
    };
    
    return <div className="flex flex-col gap-3">

        <div className="text-lg font-semibold">Add Certificate</div>

        <div className="flex gap-10 [&>*]:w-1/2">
            <div>
                <p className="text-sm"> Title <a class="text-red-600">*</a></p>  
                <TextField name="Title" className="flex w-full" 
                placeholder="Enter title" sx={styleObj}/>
            </div>

            <SelectInput className="text-sm" {...select[1]} />
            
        </div>

        <div className="flex gap-10 [&>*]:w-1/2">

            <div className="flex flex-col">
                <Typography id="modal-modal-title" variant="h6" component="h2" 
                sx={{fontSize:14}} > Issue Date </Typography>
                            
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']} sx={{color: "white"}}>
                        <DatePicker date={issueDate} placeholder="Pick Date" 
                        onChange={setIssueDate} maxDate={dayjs()}
                        sx={{color: "white", backgroundColor: "white", }}/>
                    </DemoContainer>
                </LocalizationProvider>
            </div> 

            <div>
                <p className="text-sm"> Certificate ID <a class="text-red-600">*</a></p>  
                <TextField name="ID" className="flex w-full" 
                placeholder="Enter ID" sx={styleObj}/>
            </div>
            
        </div>

        <div className="flex gap-2">
            <Button variant="outlined" onClick={()=>props.setEdit(false)}
            sx={{ borderColor: "#ffd149", color: "#ffd149", textTransform: 'capitalize' }} > Save </Button>
                                
            <Button variant="contained" onClick={()=>props.setEdit(false)}
            sx={{ color: "red", bgcolor:'#cf8f96', textTransform: 'capitalize' }} > Cancel </Button>
        </div>

        
    </div>
}

export default CertiInput;