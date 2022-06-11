import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextareaAutosize from '@mui/material/TextareaAutosize';

export default function RatingModal(props) {

    const navigate=()=>{
        window.location.href="https://g.page/r/Ca7z2seFv-doEBM/review";
    }

    return (
        <div>
            <Dialog open={props.open} onClose={props.close}>
                <DialogTitle>Review</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Thanks for your 5 rating. Please give review on google.
                    </DialogContentText> 
                     
                </DialogContent>
                <DialogActions>
                    <Button onClick={navigate} variant="contained" >Google Review</Button>
                    <Button onClick={props.close} variant="contained" color="error">Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
