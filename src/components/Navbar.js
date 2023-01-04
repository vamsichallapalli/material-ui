
import { Mail, Notifications, Pets } from '@mui/icons-material'
import { deepOrange} from '@mui/material/colors';
import { AppBar,Avatar,Badge,Box,InputBase,
  Menu,
  MenuItem,
  styled,Toolbar, Typography } from '@mui/material'
import { useState } from 'react';





const StyledToolbar = styled(Toolbar)({
  justifyContent:"space-between",
})
const Search = styled("div")(({theme})=>({
  backgroundColor :"white",
  width:"40%",
  padding:"0 10px",
  borderRadius:theme.shape.borderRadius
}))
const Icon = styled(Box)(({theme})=>({
display:"flex",
alignItems:"center",
justifyContent:"center",
gap:20,
[theme.breakpoints.down("sm")]:{
  display:"none"
},

}))
const Navbar = () => {
  const [Open,setOpen] =useState(false)
  const handleClose = () =>{
    setOpen(false)
  }
  return (
    <AppBar position="sticky">
      <StyledToolbar sx = {{justifyContent:"space-between"}}>
        <Typography variant='h6' sx = {{display:{xs:"none",sm:"block"},color:"White"}}> INSTAGRAM</Typography>
        <Pets sx = {{display:{xs:"block",sm:"none"}}}/>
         <Search><InputBase placeholder='Search...'/></Search>
         <Icon>
         <Badge badgeContent={4} color="error">
            <Mail/>
          </Badge>
         <Badge badgeContent={1} color="error">
            <Notifications/>
          </Badge>
          <Avatar sx={{ bgcolor: deepOrange[500],width:26,height:26 }} onClick = {()=>setOpen(true)}>V</Avatar>
         </Icon>
         <Box sx = {{gap:2,display:{sm:"none",display:"flex"}}} onClick = {()=>setOpen(true)}>
             <Avatar sx={{ bgcolor: deepOrange[500],width:30,height:29 }}>V</Avatar>
             <Typography variant='h6'>Vamsi</Typography>
         </Box>
         <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={Open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: 'left',
        }}
        autoFocus

      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar