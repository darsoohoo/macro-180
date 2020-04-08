import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';
import { addMeal } from '../actions/mealActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { set } from 'mongoose';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1.50),
      width: 210,
      borderColor: 'green'
    },
  },
  form: {
      marginTop: '20px'
  },
  submitButton: {
    marginLeft: "auto",
    border: 'solid black'
  }
}));

const FormFields = ({ addMeal }) => {

  const [name, setName] = useState('');
  const [fat, setFat] = useState('');
  const [carbohydrate, setCarbohydrate] = useState('');
  const [protein, setProtein] = useState('');
  const [calories, setCalories] = useState('');
  const [date, setDate] = useState('');

  const clickSubmit = () => {
    if (name === '') {
      
    }
    const newMeal = {
      name,
      fat,
      carbohydrate,
      protein,
      calories,
      date: new Date()
    }

    addMeal(newMeal);

    // Clear Fields
    setName('');
    setFat('');
    setCarbohydrate('');
    setProtein('');
    setCalories('');
    setDate('');
  };

  const classes = useStyles();
  const timeConverter = () => {
    const date = new Date();
    const month = date.getUTCMonth();
    const day = date.getDate();
    const year = date.getFullYear();
    const formattedTime = month + 1 + '/' + day + '/' + year;
    return formattedTime;
  }

  return (
    <form onSubmit={clickSubmit} className={classes.root} noValidate autoComplete="off">
      <div className={classes.form}>
        <TextField 
            id="standard-error" 
            label="Name" 
            defaultValue=" " 
            variant="outlined"
            color="secondary"
            name='name'
            value={name}
            onChange={e => setName(e.target.value)}
        />
        <TextField
          disabled
          label="Date"
          variant="outlined"
          name='date'
          value={timeConverter()}
          onChange={e => setDate(e.target.value)}
        />
      </div>
      <div>
        <TextField
          id="outlined-error-helper-text"
          label="Protein"
          variant="outlined"
          name='protein'
          value={protein}
          onChange={e => setProtein(e.target.value)}
        />
        <TextField
          id="filled-error-helper-text"
          label="Carbohydrate"
          variant="outlined"
          name='carbohydrate'
          value={carbohydrate}
          onChange={e => setCarbohydrate(e.target.value)}
        />
      </div>
      <div>
        <TextField
          id="outlined-error"
          label="Fat"
          variant="outlined"
          name='fat'
          value={fat}
          onChange={e => setFat(e.target.value)}
        />
        <TextField
          id="outlined-error-helper-text"
          label="Calories"
          variant="outlined"
          name='calories'
          value={calories}
          onChange={e => setCalories(e.target.value)}
        />
      </div>
      <CardActions>
         <Button className={classes.submitButton} size="small" type="submit">Submit</Button>
      </CardActions>
    </form>
  );
}

FormFields.propTypes = {
  addMeal: PropTypes.func.isRequired
}

export default connect(null, { addMeal })(FormFields);