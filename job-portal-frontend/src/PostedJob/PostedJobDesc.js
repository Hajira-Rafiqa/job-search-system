import { Badge } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import JobDesc from "../JobDesc/JobDesc";
import { talents } from "../Data/TalentData";
import TalentCard from "../FindTalent/TalentCard";

const PostedJobDesc = () => {
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

    return <div className="mt-5 w-3/4 px-5">
        <div className="text-2xl font-semibold flex items-center">Software Eng
            <Badge pill bg="warning" text="dark" style={{marginLeft:2, fontSize:12}}>Badge</Badge>
        </div>

        <div className="font-medium text-mine-shaft-300 mb-5">New York, US</div>

        <div>
            <Tabs defaultActiveKey="overview" className="[&_button]:!text-lg font-semibold
                        [&_tab[data-active='true']]:text-bright-sun-400 mb-5" 
                        sx = {styleObj}>
                            <Tab eventKey="overview" title="Overview" sx = {styleObj} 
                            className="[&>div]:w-full">
                                <JobDesc edit />
                            </Tab>
                            <Tab eventKey="applicants" title="Applicants" sx = {styleObj}>

                                <div className="mt-10 flex flex-wrap gap-5 justify-around">

                                    {
                                        talents.map(
                                            (talent, index) => index < 6 && 
                                            <TalentCard key={index} {...talent} posted />
                                        )
                                    }
                                </div>

                            </Tab>
                            <Tab eventKey="invited" title="Invited" sx = {styleObj}>

                            <div className="mt-10 flex flex-wrap gap-5 justify-around">
                                {
                                    talents.map(
                                        (talent, index) => index < 6 && 
                                        <TalentCard key={index} {...talent} invited />
                                        )
                                }
                            </div>
                                
                            </Tab>
                        </Tabs>
        </div>

    </div>
}

export default PostedJobDesc;