import React from 'react';
import { AppBar, Toolbar, Typography, Tooltip } from '@material-ui/core';

import './App.css';
import SightingsBackground from './components/SightingsBackground';
import Ufo from './components/Ufo';

function App() {
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar onClick={refreshPage}>
          <img
            src="ufo.svg"
            alt="logo"
            style={{ maxWidth: '40px', marginRight: '10px' }}
          />

          <Tooltip title="Reload">
            <Typography variant="h6">UFO Sightings</Typography>
          </Tooltip>
        </Toolbar>
      </AppBar>

      <SightingsBackground />
      <Ufo />
    </>
  );
}

export default App;
