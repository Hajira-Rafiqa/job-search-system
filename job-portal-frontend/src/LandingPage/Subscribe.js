import { Button, TextField } from "@mui/material"

const Subscribe=()=> {
    return <div className="mt-20 flex items-center bg-mine-shaft-900 mx-20 py-3 rounded-xl justify-around">
        <div className="text-3xl w-2/5 text-center font-semibold text-mine-shaft-100">
            Never Want to Miss Any <span className="text-bright-sun-400">Job News?</span>
        </div>

        <div className="flex gap-4 rounded-xl bg-mine-shaft-700 px-3 py-2 items-center">
            <TextField id="standard-basic" label="" variant="standard" defaultValue="your@email.com" 
            sx={{
                input: {
                  color: "#e7e7e7",
                  fontStyle: "semibold"
                },
                "&:before": {
                    borderColor: "#e7e7e7"
                },
                // Border on focus
                "&:after": {
                    borderColor: "#e7e7e7"
                },
                ":hover:not(.Mui-focused)": {
                    "&:before": {
                        borderColor: "#e7e7e7"
                    },
                }
              }}/>
            <Button className="!rounded-lg" size="lg" sx={{bgcolor: '#ffbd20'}} variant="contained">Subscribe</Button>
            
        </div>
    </div>
}

export default Subscribe;