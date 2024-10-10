import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import IcecreamIcon from '@mui/icons-material/Icecream';
import './NavBar.css'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import EmailIcon from '@mui/icons-material/Email';
const NavBar = () => {

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });

      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };

      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))} */}
            <ListItem disablePadding>
                <ListItemButton onclick={"MenuBookIcon"}>
                    <ListItemIcon>
                    <MenuBookIcon/>               
                    </ListItemIcon>
                    <ListItemText primary={"Ice Cream Flavors"}/>
                    </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton onclick={"List"}>
                    <ListItemIcon>
                    <InfoRoundedIcon/>               
                    </ListItemIcon>
                    <ListItemText primary={"About"}/>
                    </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton onclick={"About"}>
                    <ListItemIcon>
                    <EmailIcon/>               
                    </ListItemIcon>
                    <ListItemText primary={"Contact"}/>
                    </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <List>
            {/* {['All ', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))} */}
          </List>
        </Box>
      );
      

      return (
        <div className='NavBar'>
        {/* {['left', 'right', 'top', 'bottom'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))} */}


        <React.Fragment>
            <IcecreamIcon
            onClick={
                toggleDrawer("left",true)
            }
            />
            <Drawer
              anchor={"left"}
              open={state["left"]}
              onClose={toggleDrawer("left", false)}
            >
              {list("left")}
            </Drawer>
             </React.Fragment>
      </div>
      )



}
export default NavBar
