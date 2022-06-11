import React, { useEffect, useRef, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import emailjs from 'emailjs-com';
import SendIcon from '@mui/icons-material/Send';


const renderAlert = () => (
  <div className="px-4 py-3   text-success   rounded mb-5 text-center">
    <p>your message submitted successfully!</p>
  </div>
)


export default function FormDialog(props) {
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [message, setMessage] = React.useState();
  const [phone, setPhone] = React.useState();
  const form = useRef();

  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('');


  const handleSubmit = (e) => {
    if (values.name.length == 0  || values.message.length == 0) {
      alert("Name and Message is required!");
    } else {
      e.preventDefault();
      emailjs.send('service_an3wmc4', 'template_mycg93y', values, 'rOYY07FGLyzfusXtj')
        .then(response => {
          console.log('SUCCESS!', response);
          setValues({
            name: '',
            email: '', 
            message: ''
          });
          setStatus('SUCCESS');
        }, error => {
          console.log('FAILED...', error);
        });
    }

  }

  useEffect(() => {
    if (status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  }, [status]);

  const handleChange = (e) => {
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value
    }))
  }

  // useEffect(() => {
  //     emailjs.init("BtcVA-aVLy1Ad3XMB");
  // }, [])

  return (
    <div>
      <Dialog open={props.open} onClose={props.handleClose}>
        <DialogTitle>Feedback {status && renderAlert()}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            We'll never share your email with anyone else.
          </DialogContentText>
          <form onSubmit={handleSubmit}>
            {/* <form onSubmit={sendEmail} ref={form} > */}
            <TextField
              autoFocus
              margin="dense"
              label="Name"
              type="text"
              name="name"
              fullWidth
              variant="standard"
              value={values.name} onChange={handleChange}
            // onChange={(e) => setName(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              label="Email Address(Optional)"
              type="email"
              name="email"
              value={values.email} onChange={handleChange}
              fullWidth
              variant="standard"
            // onChange={(e) => setEmail(e.target.value)}
            />
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">Feedback Message</label>
              <textarea name="message" value={values.message} onChange={handleChange} className="form-control" rows="3"></textarea>
            </div> 
            <Button type="submit" value="Send" variant="contained"  >Send Feedback</Button>
            <Button sx={{marginLeft:'10px'}} type="button" variant="contained" color="error"  onClick={props.handleClose}>Cancel</Button>
          </form>
        </DialogContent>
        <DialogActions>


        </DialogActions>
      </Dialog>
    </div>
  );
}
