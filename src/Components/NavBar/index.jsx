import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1, mb: 5}}>
      <AppBar position="static" sx={{ backgroundColor: "#263159" }}>
        <Toolbar variant="dense">
          <Box component="img" src='../images/logo-pokemon.png' width="13em" sx={{marginLeft: "7%"}}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}