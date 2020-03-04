import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import FormFields from './FormFields';

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 275,
    maxWidth: 500,
    marginTop: "100px",
    border: "solid black",
    marginLeft: "auto",
    marginRight: "auto"
  },
  title: {
    fontSize: 16,
  }
}));

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
          Add a Meal
        </Typography>
        <FormFields />
      </CardContent>
    </Card>
  );
}
