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
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 180,
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '18ch',
    },
  },
}));

const UfoSearch = ({ dispatch }) => {
  const classes = useStyles();
  const [query, setQuery] = useState('');

  const [term, setTerm] = React.useState('datetime');

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
    <Grid item xs={2}>
      <Typography
        variant="h5"
        align="center"
        color="primary"
        style={{ margin: '10px' }}
      >
        Filter Search
      </Typography>

      <div>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Category
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={term}
            onChange={handleChange}
            label="Term"
          >
            <MenuItem value={'datetime'}>Date/Time</MenuItem>
            <MenuItem value={'city'}>City</MenuItem>
            <MenuItem value={'state'}>State</MenuItem>
            <MenuItem value={'country'}>Country</MenuItem>
            <MenuItem value={'shape'}>Shape</MenuItem>
          </Select>
        </FormControl>

        <FormControl
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={filterByCategory}
        >
          <TextField
            id="outlined-basic"
            label="Search term"
            variant="outlined"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={filterByCategory}
            disableElevation
          >
            Filter
          </Button>
        </FormControl>
      </div>
    </Grid>
  );
};

export { UfoSearch as default };
