import FaceIcon from '@mui/icons-material/Face';
import { testimonials } from '../Data/Data';
import { Rating } from '@mui/material';

const Testimonials=()=> {
    return <div className="mt-20 pb-5">
    <div className="text-3xl text-center font-semibold mb-3 text-mine-shaft-100">
        What <span className="text-bright-sun-400">User</span> says about us?
    </div>
    
    <div className='flex justify-evenly'>
    {
        testimonials.map((data, index)=>

            <div>
        <div key={index} className='flex flex-col gap-3 w-[90%] border-bright-sun-400 p-3 border 
        rounded-xl mt-10'>
            <div className="flex gap-2 items-center">
                <FaceIcon style={{color:"white"}} className='!h-14 !w-14'/>
                <div className="text-lg text-mine-shaft-100 font-semibold">{data.name}</div>
            </div>

            <Rating name="read-only" value={data.rating} readOnly />

            <div className="text-xs text-mine-shaft-300" >{data.testimonial}</div>
        </div>
        
    </div>

    )}
    </div>

    </div>
}

export default Testimonials;