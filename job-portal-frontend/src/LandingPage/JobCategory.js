import { jobCategory } from "../Data/Data";
import { Card, Carousel } from "react-bootstrap";

const JobCategory=()=>{
    return <div className="mt-20 pb-5">
        <div className="text-3xl text-center font-semibold mb-3 text-mine-shaft-100">
            Browse <span className="text-bright-sun-400">Job</span> Category
        </div>

        <div className="text-lg mb-2 mx-auto text-mine-shaft-300 text-center w-1/2"> Explore diverse job opportunities tailored to 
            your skills. Start your career journey today!
        </div>

        <Carousel indicators={false}>
        {
                jobCategory.map((category, index)=>
                    <Carousel.Item key={index}>
                     <div className="d-flex justify-content-center gap-4">
                        {jobCategory.map((category, index) => {
                             return (
                                <Card key={index} className="flex flex-col items-center w-64 bg-mine-shaft-950 
                                gap-2 border border-bright-sun-400 p-5 rounded-xl hover:cursor-pointer 
                                hover:shadow-[0_0_5px_2px_black] my-5 transition duration-300 ease-in-out 
                                !shadow-bright-sun-300">
                                    <Card.Body className="p-2 bg-bright-sun-300 rounded-full h-8 mb-10">
                                        <Card.Img className="h-8 w-8 d-block" 
                                        src={`/Category/${category.name}.png`} alt={category.name} />
                                    </Card.Body>
                                
                                <Card.Text className="text-mine-shaft-100 text-xl font-semibold text-center">{category.name}</Card.Text>
                                <Card.Text className="text-sm text-center text-mine-shaft-300">{category.desc}</Card.Text>
                                <Card.Text className="text-bright-sun-300 text-lg text-center">{category.jobs}+ new jobs posted</Card.Text>

                                </Card>
                        );
                    })}
                    </div>
                    </Carousel.Item>
                )
            }
        </Carousel>
        
        
    </div>
}
export default JobCategory;