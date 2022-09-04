import React from 'react';
import './App.css';
import { Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';
import SideNavbar from './components/SideNavbar';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Grid container>
      <Navbar />
      <SideNavbar />
      <Outlet />
    </Grid>
  );
}

export default App;
