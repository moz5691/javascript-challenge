import React from 'react';
import Zoom from 'react-reveal/Zoom';

const SightingsBackground = () => {
  return (
    <header className="App-background" style={{ margin: 0 }}>
      <Zoom>
        <div>
          <img src="ufo.svg" className="App-logo" alt="logo" width="20%" />
          <h1 className="App">UFO Sightings</h1>
          <h3 className="App">Truth is out there</h3>
        </div>
      </Zoom>
    </header>
  );
};

export { SightingsBackground as default };
