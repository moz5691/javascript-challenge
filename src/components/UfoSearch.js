import React, { useState } from 'react';
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Typography,
} from '@material-ui/core';

const UfoSearch = ({ dispatch }) => {
  const [query, setQuery] = useState('');
  const [term, setTerm] = useState('datetime');

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  const filterByCategory = (e) => {
    e.preventDefault();

    switch (term) {
      case 'datetime':
        dispatch({ type: 'SEARCH_BY_DATE', query });
        setQuery('');
        break;

      case 'city':
        dispatch({ type: 'SEARCH_BY_CITY', query });
        setQuery('');
        break;

      case 'state':
        dispatch({ type: 'SEARCH_BY_STATE', query });
        setQuery('');
        break;

      case 'country':
        dispatch({ type: 'SEARCH_BY_COUNTRY', query });
        setQuery('');
        break;

      case 'shape':
        dispatch({ type: 'SEARCH_BY_SHAPE', query });
        setQuery('');
        break;

      default:
        console.log('Nothing...something wrong...');
    }
  };

  return (
    <Grid item xs lg={3}>
      <Typography
        variant="h5"
        align="center"
        color="primary"
        style={{ margin: '10px' }}
      >
        Filter Search
      </Typography>

      <FormControl variant="outlined" style={{ margin: '1em' }}>
        <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={term}
          onChange={handleChange}
          label="Term"
          fullWith={true}
        >
          <MenuItem value={'datetime'}>Date/Time</MenuItem>
          <MenuItem value={'city'}>City</MenuItem>
          <MenuItem value={'state'}>State</MenuItem>
          <MenuItem value={'country'}>Country</MenuItem>
          <MenuItem value={'shape'}>Shape</MenuItem>
        </Select>
      </FormControl>

      <FormControl
        // className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={filterByCategory}
        style={{ margin: '1em' }}
      >
        <TextField
          id="outlined-basic"
          label="Search term"
          variant="outlined"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          fullWith={true}
        />
      </FormControl>

      <Button
        variant="contained"
        color="primary"
        onClick={filterByCategory}
        disableElevation
        style={{ margin: '1rem' }}
      >
        Filter
      </Button>
    </Grid>
  );
};

export { UfoSearch as default };
