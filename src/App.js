import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

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
          <Typography variant="h6" onClick={refreshPage}>
            UFO Sightings
          </Typography>
        </Toolbar>
      </AppBar>

      <SightingsBackground />
      <Ufo />
    </>
  );
}

export default App;
