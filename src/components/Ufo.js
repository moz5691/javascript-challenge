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
    <Paper style={{ margin: '2em' }}>
      <Grid container spacing={3}>
        <UfoSearch dispatch={dispatch} />

        <UfoTable ufos={ufos} />
      </Grid>
    </Paper>
  );
};

export { Ufo as default };
