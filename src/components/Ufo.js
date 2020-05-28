import React, { useReducer, useEffect } from 'react';
import ufosReducer from '../reducer/ufos';
import { Grid, Paper } from '@material-ui/core';
import UfoSearch from './UfoSearch';
import UfoTable from './UfoTable';
import { data } from '../data/data';

const Ufo = () => {
  const [ufos, dispatch] = useReducer(ufosReducer, []);

  useEffect(() => {
    const ufos = data;
    if (ufos) {
      dispatch({ type: 'POPULATE_UFOS', ufos });
    }
  }, []);

  return (
    <Paper variant="outlined" style={{ margin: '10px' }}>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="flex-start"
      >
        <UfoSearch dispatch={dispatch} />

        <UfoTable ufos={ufos} />
      </Grid>
    </Paper>
  );
};

export { Ufo as default };
