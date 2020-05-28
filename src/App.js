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
        <Toolbar>
          <Tooltip title="Reload">
            <Typography variant="h6" onClick={refreshPage}>
              UFO Sightings [Reload]
            </Typography>
          </Tooltip>
        </Toolbar>
      </AppBar>

      <SightingsBackground />
      <Ufo />
    </>
  );
}

export default App;
