import { fields, skillsData } from "../Data/PostJob";
import Select from 'react-select';
import { useForm } from 'react-hook-form';
import SelectInput from "./SelectInput";
// import TextareaAutosize from '@mui/material/TextareaAutosize';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import { Button, TextField } from "@mui/material";
import { useForm } from 'react-hook-form';

const PostJob=()=> {
    const select = fields;

    const form = useForm({
        mode: 'all',
        defaultValues: {
            jobTitle:'',
            company: '', 
            experience: '',
            jobType: '', 
            location: '',
            packageOffered: '', 
            skillsRequired: '',
            about: '', 
            description: ''
        }
    });

    const defaultPackage = form.getValues("packageOffered");
    

    const TextareaAutosize = styled(BaseTextareaAutosize)(
        ({ theme }) => `

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
            backgroundColor: "#2d2d2d",  
            input: { color: '#b0b0b0' },
            '.MuiOutlinedInput-notchedOutline': {
                borderColor: '#6d6d6d',
            },
            
            '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#ffd149',
            },
            '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#3d3d3d',
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

    return <div className="w-4/5 mx-auto">

        <div className="text-2xl font-semibold mb-5">Post a Job</div>

        <div className="flex flex-col gap-3">
            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput form={form} name="jobTitle" {...select[0]} />
                <SelectInput form={form} name="company" {...select[1]} />
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput form={form} name="experience" {...select[2]} />
                <SelectInput form={form} name="jobType" {...select[3]} />
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput form={form} name="location" {...select[4]} />
                
                <div>
                    <p className="text-md"> Salary <a class="text-red-600">*</a></p>
                    <TextField form={form} name="salary" className="flex w-full" id="outlined-required"
                    defaultValue={form.getValues("packageOffered")} 
                    variant="outlined" placeholder="Enter Salary" sx={styleObj}/>
                </div>
                
                
            </div>
            
            <p class="..."> Skills <a class="text-red-600">*</a>

            <Select
                isMulti
                name="colors"
                options={skillsData}
                defaultValue={{ value: defaultPackage, label: defaultPackage }}
                className="basic-multi-select"
                classNamePrefix="select"
                styles={{
                    control: (provided) => ({
                      ...provided,
                      boxShadow: "none",
                      backgroundColor: '#2d2d2d' ,
                      borderColor: '#3d3d3d',
                      '&:hover': { borderColor: '#ffbd20' },
                      
                      textEmphasisColor: '#f6f6f6',
                    }),
                    indicatorSeparator: (base) => ({
                        ...base,
                        display: "none",
                    }),
                    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
                        return {
                          ...styles,
                          color: 'black',
                          '&:hover': { borderColor: '#ffbd20' },
                          fontSize: 15
                          
                          //backgroundColor: '#2d2d2d'
                        };
                    },
                    singleValue: (provided, { data }) => ({
                        ...provided,
                        color: "#b0b0b0",
                        // specify a fallback color here for those values not accounted for in the styleMap
                      })
                  }}
            />
            </p>

            <div>
                <div className="text-sm font-medium mb-1">About Job</div>
            
                <TextareaAutosize defaultValue={form.getValues("about")} minRows={3} 
                placeholder="Enter About Job ..." value={desc} 
                onChange={(event)=> setDesc(event.target.value)}
                style={{ width: "100%", backgroundColor: '#2d2d2d', padding: '10px 0', 
                border: '1px solid #454545' }} />
            </div>

            <div>
                <div className="text-sm font-medium mb-1">Job Description</div>

                <TextareaAutosize 
                    aria-label="minimum height"
                    minRows={3}
                    placeholder="Description"
                    borderColor="green"
                    style={{ 
                        width: "100%", 
                        backgroundColor: '#2d2d2d',
                        padding: '10px 0',
                        border: '1px solid #454545',
                    }}
                    
                />

                <div className="flex gap-4 mt-6">

                    <Button variant="contained" 
                    sx={{ color: "#7a330d", bgcolor:'#feff7f', textTransform: 'capitalize' }}> 
                    Publish Job </Button>

                    <Button variant="outlined" 
                    sx={{ borderColor: "#ffd149", color: "#ffd149", textTransform: 'capitalize' }}> 
                    Save as Draft </Button>
                    
                </div>
                
            </div>
            
        </div>

    </div>
}

export default PostJob;















