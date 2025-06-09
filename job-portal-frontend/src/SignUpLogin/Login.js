import { loginUser } from "../Services/UserService";
import React, { useState } from 'react';
import { TextField, Button } from "@mui/material";
import { loginValidation } from "../Services/FormValidation";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { setUser } from "../Slices/UserSlice";
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';

const form = {
    email: "",
    password: ""
}

const label = { inputProps: { 'aria-label': 'Checkbox demo', 'color': '#ffd149' } };


const Login = () =>{

    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);

    const [data, setData] = useState(form);
    const [formError, setFormError] = useState(form);

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    const navigate = useNavigate();

    const handleChange = (event) =>
    {
        setFormError({...formError, [event.target.name]: ""});
        setData({...data, [event.target.name]:event.target.value});
    }

    const handleSubmit = () => {
        setLoading(true);
        let valid = true, newFormError = {};

        for(let key in data){
            newFormError[key] = loginValidation(key, data[key]);
            if (newFormError[key]) valid=false;
        }

        setFormError(newFormError);

        if(valid) {
            loginUser(data).then((res) => {
                console.log(res);

                toast.success(' Login Successful! Redirecting to home page...', {
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
                                    
                                    dispatch(setUser(res));
                                    navigate("/");
                                }, 5000);

            }).catch((err) => {
                setLoading(false);
                console.log("error");
                console.log(err.response.data);
                toast.error(` Login Failed ...`, {
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

    return <div className="w-1/2 px-20 flex flex-col justify-center gap-5">
            <div className="text-2xl font-semibold text-mine-shaft-300">Login</div>
    
            
            <div className="flex [&>*]:  flex-col" >
                    
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
    
                    <Button onClick={handleSubmit} variant="contained" 
                    sx={{ color: "#7a330d", bgcolor:'#feff7f', 
                    textTransform: 'capitalize', marginBottom: 2  }}> Login </Button>
                    
                </div>
                <div className="text-mine-shaft-300">
                    Do Not Have an account? 
                    <span className="text-bright-sun-400 hover:underline px-2 cursor-pointer"
                    onClick={()=>{
                        navigate("/signup"); 
                        setFormError(form);
                        setData(form);
                    }}>
                        SignUp
                    </span>
                </div>
        </div>
    
    /*
    
    <div className="px-20 flex flex-col justify-center gap-3">

        <div>
            <p className="text-sm"> Email <a class="text-red-600">*</a></p>
            <TextField value={data.email} name="email" onChange={handleChange} className="flex mb-3" 
            id="outlined-required" variant="outlined" placeholder="@ Enter Email" sx={styleObj}/>
        </div>
        
        <div>
            <p className="text-sm"> Password <a class="text-red-600">*</a></p>
            <TextField value={data.password} name="password" onChange={handleChange} className="flex mb-3" 
            id="outlined-required" variant="outlined" placeholder="Enter Password" sx={styleObj}/>
        </div>

        <Button onClick={handleSubmit} variant="contained"
        sx={{ color: "#7a330d", bgcolor:'#feff7f', 
            textTransform: 'capitalize', marginBottom: 2, width:20 }}> Login </Button>

    </div>

*/
}


export default Login;