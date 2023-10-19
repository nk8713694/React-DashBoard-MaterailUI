import React from 'react';
import Box from '@mui/material/Box';
import SideNav from '../components/SideNav';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';

const Home = () => {
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <SideNav></SideNav>
        {/* <h3>home</h3> */}
      </Box>
    </div>
  );
};

export default Home;
