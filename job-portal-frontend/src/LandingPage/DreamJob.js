import TextField from '@mui/material/TextField';
import { IconSearch } from '@tabler/icons-react';

const DreamJob=() => {
    return (
        <div className="flex items-center px-12">
            <div className="flex flex-col w-[45%] gap-3">
                <div className="text-6xl font-bold leading-tight text-mine-shaft-100 
                [&>span]:text-bright-sun-400">Find your 
                    <span> dream </span>
                    <span>job</span>  with us</div>
                
                <div className="text-lg text-mine-shaft-100">Good life begins with a good company. Start exploring thousands of jobs in one place</div>
                
                <div className='flex gap-3 mt-5'>
                    <TextField className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100" 
                    id="standard" label="Job Title" placeholder='Software Engineer' variant="standard"
                    slotProps={{
                        inputLabel: {
                          shrink: true,
                        },
                      }} 
                      sx={{
                        // Root class for the input field
                        "& .MuiInput-root": {
                          color: "#e7e7e7",
                          
                          // Class for the border around the input field
                          "&:before": {
                            borderColor: "#e7e7e7"
                          },
                         // Border on focus
                         "&:after": {
                            borderColor: "#e7e7e7"
                         },
                         ":hover:not(.Mui-focused)": {
                            "&:before": {
                            borderColor: "#e7e7e7"
                            },
                        },
                        },
                        
                        // Class for the label of the input field
                        "& .MuiInputLabel-standard": {
                          color: "#e7e7e7"
                        },
                      }}/>
                    <TextField className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100" 
                    id="standard" label="Job Type" placeholder='Fulltime' variant="standard"
                    slotProps={{
                        inputLabel: {
                          shrink: true,
                        },
                      }}
                      sx={{
                        // Root class for the input field
                        "& .MuiInput-root": {
                          color: "#e7e7e7",
                          
                          // Class for the border around the input field
                          "&:before": {
                            borderColor: "#e7e7e7"
                          },
                          // Border on focus
                          "&:after": {
                            borderColor: "#e7e7e7"
                          },
                          ":hover:not(.Mui-focused)": {
                            "&:before": {
                            borderColor: "#e7e7e7"
                            },
                        },
                        },
                        // Class for the label of the input field
                        "& .MuiInputLabel-standard": {
                          color: "#e7e7e7"
                        },
                      }}/>
                      <div className='flex items-center justify-center h-full w-14 bg-bright-sun-400 
                      text-mine-shaft 100 rounded-lg p-2 hover:bg-bright-sun-500 cursor-pointer'>
                        <IconSearch className='h-[85%] w-[85%]'/>
                      </div>
                </div>

            </div>
            <div className="w-[55%] flex items-center justify-center">
                <div className="w-[30rem]">
                    <img src="/job.png" alt="image" />
                    
                </div>
            </div>
        </div>
    )
}

export default DreamJob;