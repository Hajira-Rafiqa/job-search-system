import { Divider, Input, Slider } from "@mui/material";

import { useState } from "react";
import MultiInput from "../FindJobs/MultiInput";
import { searchFields } from "../Data/TalentData";
import { IconUserCircle } from "@tabler/icons-react";

const TalentSearchBar = () =>{

    const [value, setValue] = useState([1, 100]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    return (
        <div className="flex gap-1">
            <div className="flex items-center">
                <div className="text-bright-sun-400 bg-mine-shaft-900 rounded-full p-2 mr-2">
                    <IconUserCircle size={20} /></div>
                <Input  sx={{ input: { color: '#b0b0b0' } }} placeholder="Talent Name" />
            </div>
            {
                searchFields.map((item, index)=> <> <div key={index} className="w-1/5"> 
                <MultiInput {...item} />
                </div>

                <Divider flexItem mr="xs" size="xs" orientation="vertical" sx={{ bgcolor: "#5d5d5d" }} />
                </>)
            }

            <div className="ml-2">
                <div className="flex text-sm justify-between text-mine-shaft-300">
                    <div>Salary</div>
                    <div>&#8377;{value[0]} LPA - &#8377;{value[1]} LPA</div>
                </div>

                <Slider getAriaLabel={() => 'Temperature range'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        sx={{ width: 180,
                            valueLabelDisplay: "off"
                         }}
                />
            </div>
            
        </div>
    )

}

export default TalentSearchBar;