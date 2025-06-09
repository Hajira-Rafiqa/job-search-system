import { Divider } from "@mui/material";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { jobList } from "../Data/JobData";
import Card from "./Card";

const JobHistory=()=> {
    const styleObj = {
        fontSize: 12,
        fontColor: "pink",
        color: "white",
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

    return <div className="">
        <div className="text-2xl font-semibold mb-5">Job History</div>
        <div>
            <Tabs defaultActiveKey="applied" className="[&_button]:!text-lg font-semibold
            [&_tab[data-active='true']]:text-bright-sun-400 mb-5" 
            sx = {styleObj}>
                <Tab eventKey="applied" title="Applied" sx = {styleObj}>
                    <div className="mt-10 flex flex-wrap gap-3">
                        {
                            jobList.map((job, index) => <Card key={index} {...job} applied />)
                        }
                    </div>
                </Tab>
                <Tab eventKey="saved" title="Saved" sx = {styleObj}>
                    <div className="mt-10 flex flex-wrap gap-3">
                        {
                            jobList.map((job, index) => <Card key={index} {...job} saved />)
                        }
                    </div>
                </Tab>
                <Tab eventKey="offered" title="Offered" sx = {styleObj}>
                    <div className="mt-10 flex flex-wrap gap-3">
                        {
                            jobList.map((job, index) => <Card key={index} {...job} offered />)
                        }
                    </div>
                </Tab>
                <Tab eventKey="interviewing" title="Interviewing" sx = {styleObj}>
                    <div className="mt-10 flex flex-wrap gap-3">
                        {
                            jobList.map((job, index) => <Card key={index} {...job} interviewing />)
                        }
                    </div>
                </Tab>
            </Tabs>

        </div>
    </div>
}

export default JobHistory;