import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { activeJobs } from '../Data/PostedJob';
import PostedJobCard from './PostedJobCard';
import * as React from 'react';


const PostedJob =()=> {

    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return <div className="w-1/5 mt-5">
        <div className="text-2xl font-semibold mb-5">Jobs</div>

        <div className="flex-col text-xs font-semibold mb-5 font-10">

            <Tabs variant="pills" defaultActiveKey="active" 
            style={{margin: 0, fontSize:12}}
            >
                <Tab eventKey="active" title="Active [4]" style={{ color: "white" }}>
                     <div className='flex flex-col gap-2 mt-5'>
                        
                        {
                            activeJobs.map((item, index) => <PostedJobCard key={index} {...item}/>)
                        }

                     </div>
                </Tab>
                <Tab eventKey="draft" title="Drafts [1]" >s </Tab>
            </Tabs>

        </div>
    </div>
}

export default PostedJob;