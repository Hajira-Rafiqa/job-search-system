import { Divider, TextField, Button, Snackbar, Alert, AlertTitle } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import { MuiFileInput } from 'mui-file-input';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import React, { useState } from 'react';
import { color, styled } from '@mui/system';
import { useNavigate } from "react-router-dom";

const ApplyJobComp=()=> {
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
        navigate('/find-jobs');
      };

    const [submit, setSubmit] = useState(false);

    const handleSubmit = () =>
    {
        setOpen(true);
    }

    const [file, setFile] = React.useState(null)

    const handleChange = (newFile) => {
        setFile(newFile)
    }
    
    const TextareaAutosize = styled(BaseTextareaAutosize)(({ theme }) => `
        &:hover {
            border-color: #ffbd20;
        }
            
        &:focus {
            outline: 0
            border-color: #ffbd20;
            box-shadow: 0 0 0 3px #ffbd20;
        }
        `,
        );

    const styleObj = {
        backgroundColor: "#3d3d3d",  
        input: { color: '#b0b0b0' },
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
      },
      "& .MuiInputBase-input": {  height: 4 } 
    },
    
    };

    return <> <div className="w-2/3 mx-auto">
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="p-3 bg-mine-shaft-800 rounded-xl">
                    <img className="h-14" src={`/Icons/Google.png`} alt="" />
                </div>
                <div className="flex flex-col gap-1">
                    <div className="font-semibold text-2xl">Software Engineer</div>
                    <div className="text-lg text-mine-shaft-300">Google &#x2022; 3 days &#x2022; 34 Applicants</div>
                </div>
            </div>    
        </div>

        <Divider mr="xs" size="xs" sx={{ bgcolor: "#6d6d6d", borderBottomWidth: 2, marginBottom: 1.5,
            marginTop: 3
        }}/>

        <div className="text-xl font-semibold mb-3">Submit Your Application</div>
        
        <div className="flex flex-col gap-3">
            <div className="flex gap-10 [&>*]:w-1/2">
                <div>
                    <p className="text-sm"> Full Name <a class="text-red-600">*</a></p>
                    <TextField className="flex w-full" id="outlined-required" variant="outlined" 
                    placeholder="Enter Name" sx={styleObj}/>
                </div>
                
                <div>
                    <p className="text-sm"> Email <a class="text-red-600">*</a></p>
                    <TextField className="flex w-full" id="outlined-required" variant="outlined" 
                    placeholder="Enter Email" sx={styleObj}/>
                </div>
                
            </div>

            <div className="flex gap-10 [&>*]:w-1/2">
                <div>
                    <p className="text-sm"> Phone Number <a class="text-red-600">*</a></p>
                    <TextField className="flex w-full no-spinners" id="outlined" variant="outlined" 
                    type="number" placeholder="Enter Phone Number" sx={styleObj} />
                </div>

                <div>
                    <p className="text-sm"> Personal Website <a class="text-red-600">*</a></p>
                    <TextField className="flex w-full" id="outlined-required" variant="outlined" 
                    placeholder="Enter Url" sx={styleObj}/>
                </div>
            </div>

            <div>
                <p className="text-sm"> Attach Your CV <a class="text-red-600">*</a> </p>
                <MuiFileInput fullWidth value={file} placeholder="Your CV" onChange={handleChange} 
                InputProps={{
                    startAdornment: <AttachFileIcon />
                  }}
                  clearIconButtonProps={{
                    title: "Remove",
                    children: <CloseIcon fontSize="small" />
                  }}
                sx={styleObj} />
            </div>

            <div className="mt-3">
                <div className="text-sm font-medium mb-1">Cover Letter <a class="text-red-600">*</a></div>
                <TextareaAutosize 
                    aria-label="minimum height"
                    minRows={4}
                    placeholder="  Type something about yourself..." 
                    style={{ 
                        width: "100%", 
                        backgroundColor: '#3d3d3d',
                        padding: '10px 0',
                        border: '1px solid #454545',
                        color: '#b0b0b0',
                        input: { color: '#b0b0b0' }
                    }}
                    
                />
            </div>

            <Button variant="contained" onClick={handleSubmit}
                sx={{ color: "#7a330d", bgcolor:'#feff7f', textTransform: 'capitalize' }} 
                fullWidth> Submit </Button>
        
        </div>

    </div>

    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} 
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        sx = {{ border: true, borderColor: '!#ffbd20' 
        //'&.MuiSnackbar-root': { bottom: '150px' },
        }}
        >
        <Alert severity="success">
            <AlertTitle> Application Submitted! </AlertTitle>
            Redirecting to Find Jobs in 5 seconds...
        </Alert>
            
    </Snackbar>

    </> 

}

export default ApplyJobComp;