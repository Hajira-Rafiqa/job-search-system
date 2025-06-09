import { Divider, Slider } from "@mui/material";
import { dropdownData } from "../Data/JobData";
import MultiInput from "./MultiInput";
import { useState } from "react";

const SearchBar = () =>{

    const [value, setValue] = useState([1, 100]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    return (
        <div className="flex gap-1">
            {
                dropdownData.map((item, index)=> <> <div key={index} className="w-1/5"> 
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
/*
    return(
        <div>
           <div class="ui multiple dropdown">
            <input type="hidden" name="filters"/>
            <i class="filter icon"></i>
            <span class="text">Filter Posts</span>
            <div class="menu">
                <div class="ui icon search input">
                <i class="search icon"></i>
                <input type="text" placeholder="Search tags..."/>
                </div>
                <div class="divider"></div>
                <div class="header">
                <i class="tags icon"></i>
                Tag Label
                </div>
                <div class="scrolling menu">
                <div class="item" data-value="important">
                    <div class="ui red empty circular label"></div>
                    Important
                </div>
                <div class="item" data-value="announcement">
                    <div class="ui blue empty circular label"></div>
                    Announcement
                </div>
                <div class="item" data-value="cannotfix">
                    <div class="ui black empty circular label"></div>
                    Cannot Fix
                </div>
                <div class="item" data-value="news">
                    <div class="ui purple empty circular label"></div>
                    News
                </div>
                <div class="item" data-value="enhancement">
                    <div class="ui orange empty circular label"></div>
                    Enhancement
                </div>
                <div class="item" data-value="off-topic">
                    <div class="ui yellow empty circular label"></div>
                    Off Topic
                </div>
                <div class="item" data-value="interesting">
                    <div class="ui pink empty circular label"></div>
                    Interesting
                </div>
                <div class="item" data-value="discussion">
                    <div class="ui green empty circular label"></div>
                    Discussion
                </div>
                </div>
            </div>
            </div>
        </div>
    )
*/

}

export default SearchBar;