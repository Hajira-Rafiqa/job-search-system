import { IconBookmark, IconMapPin } from "@tabler/icons-react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import { card, desc, skills } from "../Data/JobDescData";
import DOMPurify from 'dompurify';


const JobDesc=(props) => {
    const data = DOMPurify.sanitize(desc);

    // className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] text-mine-shaft-300 p-4"
    return <div className="w-2/3">
        
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
            <div className="flex flex-col gap-2 items-center">

                <Link to="/apply-job">
                    <Button variant="contained" size="sm"
                    sx={{ color: "#7a330d", bgcolor:'#feff7f', textTransform: 'capitalize' }}> 
                    {props.edit?"Edit":"Apply"} </Button>
                </Link>
                {props.edit?<Button variant="outlined" size="sm"
                    sx={{ color: "red", bgcolor:'#feff7f', textTransform: 'capitalize' }}> 
                    Delete </Button>:<IconBookmark className="text-bright-sun-400 cursor-pointer" />}
            </div>
        </div>

        <Divider mr="xs" mx="xs" sx={{ bgcolor: "#6d6d6d", borderBottomWidth: 2, 
            marginBottom: 3, marginTop: 3 }}/>

        <div className="flex justify-between">

            {
                card.map((item, index) => 
                    <div key={index} className="flex flex-col items-center gap-1">
                        
                        <IconButton className="!h-12 !w-12" aria-label="add an alarm" 
                        variant="contained" sx={{ color: "#ffbd20", bgcolor:'#454545' }}> 
                            <item.icon style={{ width: '90%', height: '90%' }} stroke={1.5}  />
                        </IconButton>
                        
                        <div className="text-sm text-mine-shaft-300">{item.name}</div>
                        <div className="font-semibold">{item.value}</div>
                    </div>
                )
            }

        </div>

        <Divider mr="xs" mx="xs" sx={{ bgcolor: "#6d6d6d", borderBottomWidth: 2, 
            marginBottom: 3, marginTop: 3 }}/>

        <div>
            <div className="text-xl font-semibold mb-3">Required Skills</div>
           
            <div className="flex flex-wrap gap-2">
                {
                    skills.map((item, index) => <IconButton key={index} className="!h-fit !w-fit" aria-label="Settings"
                    variant="contained" sx={{ color: "#ffbd20", bgcolor:'#454545', 
                    fontSize: 12, borderRadius: 15, paddingLeft:2, paddingRight:2, fontWeight: "medium" }}> 
                        {item}
                    </IconButton>
                    )
                }

            </div>
        </div>

        <Divider mr="xs" mx="xs" sx={{ bgcolor: "#6d6d6d", borderBottomWidth: 2, 
            marginBottom: 3, marginTop: 3 }}/>

        <div className="[&_h4]:text-xl [&_*]:text-mine-shaft-300 [&_h4]:my-5 
        [&_li]:marker:text-bright-sun-400 [&_li]:mb-1
        [&_h4]:font-semibold [&_h4]:text-mine-shaft-200 [&_p]: text-justify" 
        dangerouslySetInnerHTML={{__html:data}}>

        </div>

        <Divider mr="xs" mx="xs" sx={{ bgcolor: "#6d6d6d", borderBottomWidth: 2, 
            marginBottom: 3, marginTop: 3 }}/>

        <div>
            <div className="text-xl font-semibold mb-3">About Company</div>

            <div className="flex justify-between mb-3">
            <div className="flex gap-2 items-center">
                <div className="p-3 bg-mine-shaft-800 rounded-xl">
                    <img className="h-8" src={`/Icons/Google.png`} alt="" />
                </div>
                <div className="flex flex-col">
                    <div className="font-medium text-lg">Google</div>
                    <div className="text-small text-mine-shaft-300">10k+ Employees</div>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center">

                <Link to="/company">
                    <Button variant="contained" 
                    sx={{ color: "#7a330d", bgcolor:'#feff7f', textTransform: 'capitalize' }}> 
                    Company Page </Button>
                </Link>
            </div>
        </div>
        <div className="text-mine-shaft-300 text-justify">
                This is a sample
            </div>
        </div>

    </div>
}

export default JobDesc;