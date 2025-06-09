import { Divider, AvatarGroup, Avatar } from "@mui/material";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import * as React from 'react';
import AboutComp from "./AboutComp";
import CompanyJobs from "./CompanyJobs";
import CompanyEmployees from "./CompanyEmployees";

const Company=()=> {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const styleObj = {
        fontSize: 12,
        fontColor: "pink",
        '.myClass ul > li.active > a': {
            backgroundColor: "red",
            color: "white"
        },
        '.myClass ul > li.active > a:hover': {
            backgroundColor: "red",
            color: "white"
        },
        '.myClass ul > li.active > a:focus': {
            backgroundColor: "red",
            color: "white"
        },          
    }


    return <div className="w-3/4">
        <div className="relative">
            <img className="rounded-t-2xl w-[900xh]" src="/Profile/banner.jpg" width={2500} height={2500} alt="" />
            <img className="w-36 h-36 rounded-3xl -bottom-1/4 absolute left-5 border-mine-shaft-950 border-8 p-2
            bg-mine-shaft-950" 
            src="/Icons/Google.png" alt="" />
        </div>

        <div className="px-3 mt-16">
                <div className="text-3xl font-semibold flex justify-between"> Google
                    <AvatarGroup>
                        <Avatar src="avatar.png" />
                        <Avatar src="avatar1.png" />
                        <Avatar src="avatar2.png" />
                        <Avatar sx={{fontSize:12}}>+10k</Avatar>
                    </AvatarGroup>
                </div>

                <div className="flex gap-1 text-lg text-mine-shaft-300 items-center">
                    <IconMapPin className="h-5 w-5" stroke={1.5}/> Bangalore
                </div>
        </div>

        <Divider mr="xs" mx="xs" sx={{ bgcolor: "#6d6d6d", borderBottomWidth: 2, 
            marginBottom: 3, marginTop: 3 }}/>

        <div>
            <Tabs defaultActiveKey="about" className="[&_button]:!text-lg font-semibold
            [&_tab[data-active='true']]:text-bright-sun-400 mb-5" 
            sx = {styleObj}>
                <Tab eventKey="about" title="About" sx = {styleObj}><AboutComp /></Tab>
                <Tab eventKey="jobs" title="Jobs" sx = {styleObj}><CompanyJobs /></Tab>
                <Tab eventKey="employees" title="Employees" sx = {styleObj}><CompanyEmployees/></Tab>
            </Tabs>

        </div>

    </div>
}

export default Company;