import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

export default function DailyTotals({ meals }) {

  console.log('mealsss', meals);

  let fat = 0;
  meals.forEach((meal) => {
    console.log('meal fat', meal.fat);
    fat = fat + parseInt(meal.fat, 10);
  });

  let carbohydrate = 0;
  meals.forEach((meal) => {
    console.log('meal fat', meal.carbohydrate);
    carbohydrate = carbohydrate + parseInt(meal.carbohydrate, 10);
  });

  let protein = 0;
  meals.forEach((meal) => {
    console.log('meal fat', meal.protein);
    protein = protein + parseInt(meal.protein, 10);
  });

  let calories = 0;
  meals.forEach((meal) => {
    console.log('meal fat', meal.calories);
    calories = calories + parseInt(meal.calories, 10);
  });

  return (
    <TableRow>
      <TableCell align='center' component='th' scope='row'></TableCell>
      <TableCell align='right'></TableCell>
      <TableCell align='center'>{fat}</TableCell>
      <TableCell align='center'>{carbohydrate}</TableCell>
      <TableCell align='center'>{protein}</TableCell>
      <TableCell align='center'>{calories}</TableCell>
      <TableCell align='right'></TableCell>
      <TableCell align='right'></TableCell>
    </TableRow>
  );
}
