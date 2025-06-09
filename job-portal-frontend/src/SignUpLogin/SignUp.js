import { TextField, Button } from "@mui/material";
import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { registerUser } from "../Services/UserService";
import { signupValidation } from "../Services/FormValidation";
import { toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';

const form = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "APPLICANT"
}

const SignUp = () =>{

    const [data, setData] = useState(form);
    const [formError, setFormError] = useState(form);

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    const navigate = useNavigate();

    const handleChange = (event) =>
    {
        if(event.target.value == "EMPLOYER" || event.target.value == "APPLICANT") {
            setData({...data, accountType:event.target.value});
            return;
        }
        
        let name = event.target.name, value=event.target.value;
        setData({...data, [name]:value});

        setFormError({...formError, [name]:signupValidation(name, value)});

        if(name==="password" && data.confirmPassword !== ""){
            let err = "";
            if(data.password!==value) err = "Passwords do not match.";
            setFormError({...formError, [name]: signupValidation(name, value), confirmPassword: err });
        }

        if(name==="confirmPassword"){
            if(data.password!==value) setFormError({...formError, [name]: "Passwords do not match."})
            else
                setFormError({...formError, confirmPassword: ""})
        }

        console.log(data);
    }

    const handleSubmit = () => {
        let valid = true, newFormError={};
        for(let key in data) {
            if(key==="accountType") 
                continue;
            if(key!=="confirmPassword") 
                newFormError[key]=signupValidation(key, data[key]);
            else if(data[key]!==data["password"]) newFormError[key]="Passwords do not match.";

            if(newFormError[key])
                valid = false;
            
        }

        setFormError(newFormError);

        if(valid === true){
            registerUser(data).then((res) => {
                console.log(res);
                setData(form);

                toast.success(' Registered Successfully! Redirecting to login page...', {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                    theme: "light",
                    });

                setTimeout(()=> {
                    navigate("/login");
                }, 5000);
                

            }).catch((err) => { 
                console.log(err) ;

                toast.error(` Registration Failed - ${err.response.data.errorMessage} ...`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                    theme: "light",
                    });
            
            });

        }
    }

    const styleObj = {
        backgroundColor: "#3d3d3d",    
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

    const label = { inputProps: { 'aria-label': 'Checkbox demo', 'color': '#ffd149' } };


    return <div className="px-20 flex flex-col justify-center">
        
        <div className="text-2xl font-semibold mb-1 text-mine-shaft-300">Create Account</div>
       
        <div className="flex [&>*]:    flex-col" >
                <div>

                    <p className="text-sm text-mine-shaft-300"> Full Name <a class="text-red-600">*</a></p>
                    <TextField value={data.name} name="name" onChange={handleChange} 
                    error={formError.name} helperText= {formError.name}
                    className="flex w-full mb-3" 
                    id="outlined-required" variant="outlined" 
                    placeholder="Enter Name" sx={styleObj}/>

                </div>
                
                <div>
                    <p className="text-sm text-mine-shaft-300"> Email <a class="text-red-600">*</a></p>
                    <TextField value={data.email} name="email" onChange={handleChange} 
                    error={formError.email} helperText={formError.email}
                    className="flex w-full mb-3" 
                    id="outlined-required" variant="outlined" 
                    placeholder="@ Enter Email" sx={styleObj}/>
                </div>

                <div>
                    <p className="text-sm text-mine-shaft-300"> Password <a class="text-red-600">*</a></p>
                    <TextField value={data.password} name="password" onChange={handleChange} 
                    error={formError.password} helperText={formError.password}
                    className="flex w-full mb-3" 
                    id="outlined-required" variant="outlined" 
                    placeholder="Enter Password" sx={styleObj}
                    type={showPassword ? "text" : "password"} 
                    InputProps={{ // <-- This is where the toggle button is added.
                                                endAdornment: (
                                                  <InputAdornment position="end">
                                                    <IconButton
                                                      aria-label="toggle password visibility"
                                                      onClick={handleClickShowPassword}
                                                      onMouseDown={handleMouseDownPassword}
                                                    >
                                                      {showPassword ? <Visibility /> : <VisibilityOff />}
                                                    </IconButton>
                                                  </InputAdornment>
                                                )
                                              }}
                    />
                    
                </div>

                <div>
                    <p className="text-sm text-mine-shaft-300"> Confirm Password <a class="text-red-600">*</a></p>
                    
                    <TextField value={data.confirmPassword} name="confirmPassword" onChange={handleChange} 
                    error={formError.confirmPassword} helperText={formError.confirmPassword}
                    className="flex w-full mb-3" id="outlined-required" variant="outlined" 
                    placeholder="Confirm Password" sx={styleObj}
                    type={showPassword ? "text" : "password"} 
                    InputProps={{ // <-- This is where the toggle button is added.
                                                endAdornment: (
                                                  <InputAdornment position="end">
                                                    <IconButton
                                                      aria-label="toggle password visibility"
                                                      onClick={handleClickShowPassword}
                                                      onMouseDown={handleMouseDownPassword}
                                                    >
                                                      {showPassword ? <Visibility /> : <VisibilityOff />}
                                                    </IconButton>
                                                  </InputAdornment>
                                                )
                                              }}
                    />
                </div>

                <FormControl>

                    <FormLabel color="#b0b0b0">
                        <p className="text-mine-shaft-300">You are?  <a class="text-red-600">*</a> </p>
                    </FormLabel>
                        <RadioGroup row className="p-2" value={data.accountType}  onChange={handleChange} >

                            <FormControlLabel 
                            className="py-2 px-6 border border-mine-shaft-800 rounded-lg text-mine-shaft-300" 
                            value="APPLICANT" control={<Radio />} label="Applicant" />
        
                            <FormControlLabel 
                            className="py-2 px-6 border border-mine-shaft-800 rounded-lg text-mine-shaft-300" 
                            value="EMPLOYER" control={<Radio />} label="Employer" />
                        </RadioGroup>
                </FormControl>


                <div>
                
                <p className="text-mine-shaft-300">
                    <Checkbox {...label} sx={{color: '#b0b0b0'}} />I Accept All Terms and Conditions</p>
                </div>

                <Button onClick={handleSubmit} variant="contained" 
                sx={{ color: "#7a330d", bgcolor:'#feff7f', 
                textTransform: 'capitalize', marginBottom: 2  }}> Sign Up </Button>
                
            </div>
            <div className="text-mine-shaft-300">
                Have an account? 
                <span className="text-bright-sun-400 hover:underline px-2 cursor-pointer" 
                onClick={()=>{
                    navigate("/login"); 
                    setFormError(form);
                    setData(form);
                }}>
                    Login
                </span>
            </div>

    </div>
}

export default SignUp;