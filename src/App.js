import logo from './logo.svg';
import './App.css';
import HoverRating from "./Rating"; 
import { Grid, Paper, Stack ,Container} from '@mui/material';
import styled from '@emotion/styled';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
 
function App() {
  return (
    <div className="App"> 
   <AppBar position="static" color="transparent">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Box component="img" src="/images/maddog159.png" sx={{ height: 100, }} />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box> 
        </Toolbar>
      </Container>
    </AppBar>
       <div className='container'>
         <div className='row'>
           <div className='col-sm-8  mx-auto  mt-4'> 
           <HoverRating/>
           </div>
         </div>
       </div>
    </div>
  );
}

export default App;
