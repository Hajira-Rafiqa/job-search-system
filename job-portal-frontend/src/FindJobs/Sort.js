import * as React from 'react';
import { Select } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { IconAdjustments } from '@tabler/icons-react';

const Sort=()=>{
    const [relevance, setRelevance] = React.useState('');

    const handleChange = (event) => {
        setRelevance(event.target.value);
    };

    return <div className="">
        <Select style={{minWidth: 150, color: "#b0b0b0", fontSize:15}}
            displayEmpty
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={relevance}
            label="Relevance"
            onChange={handleChange}
            IconComponent={IconAdjustments}
            
            sx={{
                '.MuiOutlinedInput-notchedOutline': {
                  borderColor: '#ffd149',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#ffd149',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#ffd149',
                },
                "& .MuiSvgIcon-root": { 
                    padding: 100 
                }
              }}>
                <MenuItem value="" sx={{fontSize:'small'}} >Relevance</MenuItem>
                <MenuItem value="Most Recent" sx={{fontSize:'small'}}>Most Recent</MenuItem>
                <MenuItem value="Salary (Low to High)" sx={{fontSize:'small'}}>Salary (Low to High)</MenuItem>
                <MenuItem value="Salary (High to Low)" sx={{fontSize:'small'}}>Salary (High to Low)</MenuItem>
                
        </Select>

    </div>
}

export default Sort;