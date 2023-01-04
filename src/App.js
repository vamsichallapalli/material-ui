
import { Stack } from '@mui/system';
import './App.css'
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar'
import Add from './components/Add';

import { Box, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import React from 'react';
const Dummyposts = [
  {
    name:"vamsi",
   shortName:"V",
   uploadPic : "https://res.cloudinary.com/dlzcgycpi/image/upload/v1671599911/IMG_20221208_214334_dts0om.jpg" 
  },
  {
    name:"Tata consultency service",
   shortName:"T",
   uploadPic : "https://res.cloudinary.com/dlzcgycpi/image/upload/v1672731880/640px-TCS_SIPCOT_Building_q9j8yz.jpg" 
  },
  {
    name:"Ramesh challapalli",
   shortName:"R",
   uploadPic : "https://res.cloudinary.com/dlzcgycpi/image/upload/v1672813744/IMG-20221029-WA0011_xr7wvx.jpg" 
  },
  {
    name:"Nature",
   shortName:"N",
   uploadPic : "https://res.cloudinary.com/dlzcgycpi/image/upload/v1672731851/gettyimages-1146431497_saax9b.jpg"
  },
  {
    name:"Tharun",
   shortName:"T",
   uploadPic : "https://res.cloudinary.com/dlzcgycpi/image/upload/v1672731699/20210115_081003_y6qosd.jpg" 
  },
  {
    name:"vamsi",
   shortName:"V",
   uploadPic : "https://res.cloudinary.com/dlzcgycpi/image/upload/v1672731804/SAVE_20180914_165301_bqexp5.jpg" 
  },

]

function App() {
  const [mode,setmode] = React.useState("light")
  const darkTheme = createTheme({
    palette:{
      mode:mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={mode === "dark"?"grey.900":"common.white"} color={mode === "dark"?"common.white":"common.black"}>
      <Navbar/>
      <Stack  direction="row" justifyContent ="space-between" >
      <Sidebar mode = {mode} setmode = {setmode}/>
      <Feed Dummyposts = {Dummyposts}/>
      <Rightbar/>
     </Stack>
     <Add />
      </Box>
    </ThemeProvider>
    
   
    
    
  );
}

export default App;
