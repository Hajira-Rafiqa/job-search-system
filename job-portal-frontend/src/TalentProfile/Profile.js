import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import { Divider, Button } from "@mui/material";
import ExpCard from "./ExpCard";
import CertiCard from "./CertiCard";

const Profile=(props)=>{
    return <div className="w-2/3">

        <div className="relative">
            <img className="rounded-t-2xl w-[900xh]" src="/Profile/banner.jpg" width={2500} height={2500} alt="" />
            <img className="w-48 h-48 rounded-full -bottom-1/3 absolute left-3 border-mine-shaft-950 border-8" 
            src="/avatar.png" alt="" />
        </div>

        <div className="px-3 mt-16">
                <div className="text-3xl font-semibold flex justify-between"> {props.name} 
                    <Button variant="contained" 
                    sx={{ color: "#7a330d", bgcolor:'#feff7f', textTransform: 'capitalize' }} > Message 
                    </Button></div>

                <div className="text-xl flex gap-1 items-center"> 
                    <IconBriefcase className="h-5 w-5" stroke={1.5}/> {props.role} &bull; {props.company}</div>

                <div className="flex gap-1 text-lg text-mine-shaft-300 items-center">
                    <IconMapPin className="h-5 w-5" stroke={1.5}/> {props.location}
                </div>
        </div>

        <Divider mr="xs" mx="xs" sx={{ bgcolor: "#6d6d6d", borderBottomWidth: 2, 
            marginBottom: 3, marginTop: 3 }}/>

        <div className="px-3">
            <div className="text-2xl font-semibold mb-3">About</div>

            <div className="text-sm text-mine-shaft-300 text-justify">
                {props.about}
            </div>     
        </div>

        <Divider mr="xs" mx="xs" sx={{ bgcolor: "#6d6d6d", borderBottomWidth: 2, 
            marginBottom: 3, marginTop: 3 }}/>

        <div className="px-3">
            <div className="text-2xl font-semibold mb-3">Skills</div>

            <div className="flex flex-wrap gap-2">

                {
                    props.skills.map((skill, index) => 
                    <div key={index} className="bg-bright-sun-300 text-sm font-medium bg-opacity-15 
                    rounded-3xl text-bright-sun-400 px-3 py-1">{skill}</div>)
                }


            </div>     
        </div>

        <Divider mr="xs" mx="xs" sx={{ bgcolor: "#6d6d6d", borderBottomWidth: 2, 
            marginBottom: 3, marginTop: 3 }}/>

        <div className="px-3">
            <div className="text-2xl font-semibold mb-5">Experience</div>
                <div className="flex flex-col gap-8">
                    {
                        props.experience.map((exp, index) => <ExpCard key={index} {...exp} />)
                    }
                </div>
        </div>

        <Divider mr="xs" mx="xs" sx={{ bgcolor: "#6d6d6d", borderBottomWidth: 2, 
            marginBottom: 3, marginTop: 3 }}/>

        <div className="px-3">
            <div className="text-2xl font-semibold mb-5">Certifications</div>
                <div className="flex flex-col gap-8">
                    {
                        props.certifications.map((certi, index) => <CertiCard key={index} {...certi} />)
                    }
                </div>
        </div>

    </div>
}

export default Profile;