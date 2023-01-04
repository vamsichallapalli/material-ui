
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'
import { AccountBox, Article,Group,Home,ModeNight,Person,Settings,Storefront } from '@mui/icons-material';

const Sidebar = ({mode,setmode}) => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <Box   flex = {1}  sx = {{display:{xs:"none",sm:"block"}}} >
      <Box position = "fixed" >
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <Home/>
          </ListItemIcon>
          <ListItemText primary="Homepage" />
        </ListItemButton>
        
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
          <Article/>
          </ListItemIcon>
          <ListItemText primary="Pages" />
        </ListItemButton>
        
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemIcon>
            <Group/>
          </ListItemIcon>
          <ListItemText primary="Groups" />
        </ListItemButton>

        <ListItemButton
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemIcon>
            <Storefront/>
          </ListItemIcon>
          <ListItemText primary="MarketPlace" />
        </ListItemButton>

        <ListItemButton
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}
        >
          <ListItemIcon>
            <Person/>
          </ListItemIcon>
          <ListItemText primary="Friends" />
        </ListItemButton>

        <ListItemButton
          selected={selectedIndex === 5}
          onClick={(event) => handleListItemClick(event, 5)}
        >
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>

        <ListItemButton
          selected={selectedIndex === 6}
          onClick={(event) => handleListItemClick(event, 6)}
        >
          <ListItemIcon>
            <AccountBox/>
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>

        <ListItemButton
          selected={selectedIndex === 7}
          onClick={(event) => handleListItemClick(event, 7)}
        >
          <ListItemIcon>
            <ModeNight />
          </ListItemIcon>
          <Switch onChange={e=>setmode(mode==="light" ?"dark":"light")}/>
        </ListItemButton>
      </List>
      </Box>
     
      </Box>
  )
}

export default Sidebar