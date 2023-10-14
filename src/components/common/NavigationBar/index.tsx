// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "./style.css";
import { AccountCircle } from '@mui/icons-material';
import logo from '../../../assets/landscape_logo2.svg';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Box, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import NavigationBarProps from './types';

export default function NavigationBar({ children }: NavigationBarProps) {
  const navigationOptions = [
      {label: 'Serviços', path: '/home'},
      {label: 'Pets', path: '/pets'}, 
      {label: 'Tutores', path: '/tutors'},
  ];

  return (
    <>
      <div>
        <AppBar elevation={0} sx={{backgroundColor: '#01FFB2'}}>
          <Toolbar className="app-bar">
            <Grid container direction={'row'} justifyContent={'center'} alignItems={'flex-start'}>
              <Grid item xs={4}>
                <div className='logo-nav'>
                  <img src={logo} alt='Logo'></img>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className='user-info'>
                  <AccountCircle fontSize='large' sx={{ color: 'black' }} />
                  <Typography variant="caption" sx={{ fontSize: '18px', color: 'black', alignItems: 'flex-start' }}>
                    Julia Stephanie
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="logout-button">
                  <Button color="inherit">
                    <Typography variant="button" sx={{ fontSize: '16px', color: 'black', fontWeight: 'bolder' }}>Sair</Typography>
                    <ExitToAppIcon sx={{ color: 'black' }} fontSize='large' />
                  </Button>
                </div>
              </Grid>
            </Grid>



          </Toolbar>
        </AppBar>
      </div>
      <div className='content'>
        {children}
      </div>
      <div>
        <Box
          className={'side-bar'}
        >
          <Toolbar />
          <List>
            {navigationOptions.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton href={item.path}>
                  <ListItemIcon>
                    <ArrowRightIcon fontSize='large' />
                  </ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </div>
    </>
  );
}