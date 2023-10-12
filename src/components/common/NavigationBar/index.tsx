// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "./style.css";
import { AccountCircle } from '@mui/icons-material';
import logo from '../../../assets/landscape_logo.svg';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import NavigationBarProps from './types';

export default function NavigationBar({ children }: NavigationBarProps) {
  const drawerWidth = 200;
  const navigationOptions = ['Serviços', 'Pets', 'Tutores'];

  return (
    <>
      <div>
        <AppBar elevation={0}>
          <Toolbar className="app-bar">
            <div>
              <img className='logo' src={logo} alt='Logo'></img>
            </div>
            <div className='user-info'>
              <AccountCircle fontSize='large' sx={{ color: 'black' }} />
              <Typography variant="overline" sx={{ fontSize: '16px', color: 'black' }}>
                USERNAME
              </Typography>

            </div>
            <div className="logout-button">
              <Button color="inherit">
                <Typography variant="button" sx={{ fontSize: '16px', color: 'black', fontWeight: 'bolder' }}>Sair</Typography>
                <ExitToAppIcon sx={{ color: 'black' }} fontSize='large' />
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <div className='content'>
        {children}
      </div>
      <div>
        <Drawer
          sx={{
            width: drawerWidth,
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 0,
            paddingTop: '10px',
            overflow: 'scroll',
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              backgroundColor: '#01FFB2',

            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <List>
            {navigationOptions.map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <ArrowRightIcon fontSize='large' />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
    </>
  );
}