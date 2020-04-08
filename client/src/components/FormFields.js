import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';
import { addMeal } from '../actions/mealActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1.5),
      width: 210,
      borderColor: 'green',
    },
  },
  form: {
    marginTop: '20px',
  },
  submitButton: {
    marginLeft: 'auto',
    border: 'solid black',
  },
}));

const FormFields = ({ addMeal }) => {
  const [name, setName] = useState('');
  const [fat, setFat] = useState('');
  const [carbohydrate, setCarbohydrate] = useState('');
  const [protein, setProtein] = useState('');
  const [calories, setCalories] = useState('');
  const [date, setDate] = useState('');

  const getCalories = () => {
    return fat * 9 + carbohydrate * 4 + protein * 4;
  };

  const clickSubmit = () => {
    if (name === '') {
    }
    const newMeal = {
      name,
      fat,
      carbohydrate,
      protein,
      calories: getCalories(),
      date,
    };

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

  return (
    <form
      onSubmit={clickSubmit}
      className={classes.root}
      noValidate
      autoComplete='off'
    >
      <div className={classes.form}>
        <TextField
          id='standard-error'
          label='Name'
          variant='outlined'
          color='secondary'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          label='Date'
          id='date'
          name='date'
          variant='outlined'
          type='date'
          value={date}
          //defaultValue={Date.now}
          onChange={(e) => setDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div>
        <TextField
          id='outlined-error-helper-text'
          label='Protein'
          variant='outlined'
          name='protein'
          value={protein}
          onChange={(e) => setProtein(e.target.value)}
        />
        <TextField
          id='filled-error-helper-text'
          label='Carbohydrate'
          variant='outlined'
          name='carbohydrate'
          value={carbohydrate}
          onChange={(e) => setCarbohydrate(e.target.value)}
        />
      </div>
      <div>
        <TextField
          id='outlined-error'
          label='Fat'
          variant='outlined'
          name='fat'
          value={fat}
          onChange={(e) => setFat(e.target.value)}
        />
        <TextField
          id='outlined-error-helper-text'
          label='Calories'
          variant='outlined'
          name='calories'
          value={getCalories()}
          onChange={(e) => setCalories(e.target.value)}
        />
      </div>
      <CardActions>
        <Button className={classes.submitButton} size='small' type='submit'>
          Submit
        </Button>
      </CardActions>
    </form>
  );
};

FormFields.propTypes = {
  addMeal: PropTypes.func.isRequired,
};

export default connect(null, { addMeal })(FormFields);
