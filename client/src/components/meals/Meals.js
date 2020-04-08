import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMeals } from '../../actions/mealActions';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import MealItem from './MealItem';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 100,
  },
}));



const Meals = ({ meal: { meals, loading }, getMeals}) => {
  const classes = useStyles();


  useEffect(() => {
    getMeals();
  }, []);


  if (loading || meals === null) {
    return 'Loading...';
  }

  return (
    <TableContainer className={classes.root}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Meal</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Fat</TableCell>
            <TableCell>Carbs</TableCell>
            <TableCell>Protein</TableCell>
            <TableCell>Calories</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {meals.map((meal, index) => (
            <MealItem key={meal._id} index={index} meal={meal} />


          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

Meals.propTypes = {
  meal: PropTypes.object.isRequired,
  getMeals: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  meal: state.meal
});

export default connect(mapStateToProps, { getMeals })(Meals);

