import { IconCalendarMonth, IconHeart, IconMapPin } from "@tabler/icons-react";
import { Avatar, Button, Divider, Modal, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { useState } from "react";
import dayjs from 'dayjs';

const TalentCard =(props)=> {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        bgcolor: "#3d3d3d",
        color: '#b0b0b0'
      };

    return <div className="bg-mine-shaft-900 p-3 w-96 flex flex-col gap-3 rounded-xl 
    hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400">

        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="p-2 bg-mine-shaft-800 rounded-full">
                    <Avatar  sizes="lg" src={`/Working/${props.image}.png`} alt="" />
                </div>
                <div>
                    <div className="font-semibold text-lg">{props.name}</div>
                    <div className="text-sm text-mine-shaft-300">{props.role} &bull; {props.company}</div>
                </div>
            </div>
            <IconHeart className="text-mine-shaft-300 cursor-pointer" />
        </div>
        <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 
        [&>div]:text-bright-sun-400 [&>div]:rounded-lg text-xs">
            {
                props.topSkills?.map((skill, index) =>  <div key={index}>{skill}</div>)
            }
            
        </div>
        
        <p className=" !line-clamp-3 !text-xs text-justify !text-mine-shaft-300">
        {props.about}
        </p>
        <Divider mr="xs" size="xs" sx={{ bgcolor: "#6d6d6d", borderBottomWidth: 2, marginTop:0.5 }}  />

        {
            props.invited?<div className="flex gap-1 text-mine-shaft-200 text-sm items-center">
                <IconCalendarMonth stroke={1.5} /> Interview: August 27, 2024 10:00 AM
            </div> : 
            <div className="flex justify-between">
            <div className="font-semibold text-mine-shaft-200">
                {props.expectedCtc}
            </div>
            <div className="flex gap-1 text-xs text-mine-shaft-400 items-center">
                <IconMapPin className="h-5 w-5" stroke={1.5}/> {props.location}
            </div>
        </div>
        }

        
        <Divider mr="xs" size="xs" sx={{ bgcolor: "#6d6d6d", borderBottomWidth: 2, marginTop:0.5 }}  />

        <div className="flex [&>*]:w-1/2 [&>*]:p-1">

        {
            !props.invited && <>
                <Link to="/talent-profile">
                    <Button variant="outlined" 
                    sx={{ borderColor: "#ffd149", color: "#ffd149", textTransform: 'capitalize' }} 
                    fullWidth> Profile </Button>
                </Link>
                <div>
                    {props.posted?<Button onClick={handleOpen} variant="contained" 
                    endIcon={<IconCalendarMonth className="w-5 h-5" />}
                    sx={{ color: "#7a330d", bgcolor:'#feff7f', textTransform: 'capitalize' }} 
                    fullWidth> Schedule </Button> : <Button variant="contained" 
                    sx={{ color: "#7a330d", bgcolor:'#feff7f', textTransform: 'capitalize' }} 
                    fullWidth> Message </Button>}
                </div>
            </>
        }

        {
            props.invited && <>
                <div>
                <Button variant="outlined" 
                    sx={{ borderColor: "#ffd149", color: "#ffd149", textTransform: 'capitalize' }} 
                    fullWidth> Accept </Button>
                </div>

                <div>
                <Button variant="contained" 
                sx={{ color: "#7a330d", bgcolor:'#feff7f', textTransform: 'capitalize' }} 
                fullWidth> Reject </Button>
                </div>
            </>
        }
            
        </div>

        <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Schedule Interview
                </Typography>
                
                <div className="flex flex-col gap-4">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker label="Date" minDate={dayjs()} sx={{}} />
                    </DemoContainer>
                    <DemoContainer components={['DatePicker']}>
                        <TimePicker label="Time" />
                    </DemoContainer>
                    <Button variant="contained" 
                    sx={{ color: "#7a330d", bgcolor:'#feff7f', textTransform: 'capitalize' }} 
                    fullWidth> Schedule </Button>
                </LocalizationProvider>
                </div>
            </Box>
        </Modal>
    </div>
}

export default TalentCard;