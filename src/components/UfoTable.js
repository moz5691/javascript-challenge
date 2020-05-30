import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});

const UfoTable = ({ ufos }) => {
  const classes = useStyles();

  if (ufos === undefined)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  return (
    <Grid item xs>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Datetime</TableCell>
              <TableCell align="right">City</TableCell>
              <TableCell align="right">State</TableCell>
              <TableCell align="right">Country</TableCell>
              <TableCell align="right">Shape</TableCell>
              <TableCell align="right">Duration&nbsp;(min)</TableCell>
              <TableCell align="right">Comments</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ufos.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {row.datetime}
                </TableCell>
                <TableCell align="right">{row.city}</TableCell>
                <TableCell align="right">{row.state}</TableCell>
                <TableCell align="right">{row.country}</TableCell>
                <TableCell align="right">{row.shape}</TableCell>
                <TableCell align="right">{row.durationMinutes}</TableCell>
                <TableCell align="right">{row.comments}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export { UfoTable as default };
