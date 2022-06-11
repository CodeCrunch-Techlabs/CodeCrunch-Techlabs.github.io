import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import FormDialog from './Feedback'; 
import RatingModal from './RatingModal'; 


const labels = {
    1: 'Useless+',
    2: 'Poor+',
    3: 'Ok+',
    4: 'Good+',
    5: 'Excellent+',
};

function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function HoverRating() {
    const [value, setValue] = React.useState(0);
    const [hover, setHover] = React.useState(-1); 
    const [open, setOpen] = React.useState(false);
    const [openRating, setOpenRating] = React.useState(false);


    const handleClose = () => {
        setOpen(false);
    };
    const modalClose = () => {
        setOpenRating(false);
    };

    React.useEffect(() => {

        if (value < 5 && value != 0) {
            setOpen(true);
        }else if(value == 5){
            setOpenRating(true); 
        }

    }, [value])

    return (
        <Box 
            sx={{
                marginTop: 25,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderRadius:'10px',
                padding:3,
                background:'white'
              }}

        >
             <Box component="img" src="/images/maddog159.png" sx={{ height: 60, }} />
        <h1 className='review'>How Would you Rate Mad Dog 159?</h1>
          <RatingModal open={openRating} close={modalClose}/>
           <FormDialog open={open} handleClose={handleClose}/> 

            <Rating
                name="hover-feedback"
                value={value}
                precision={1}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                    setHover(newHover);
                }}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
        </Box>
    );
}
