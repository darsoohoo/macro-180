import React, { useEffect, Fragment } from 'react';
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
import Preloader from '../layout/Preloader';
import GroupDescription from './GroupDescription';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 100,
  },
  preloader: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const Meals = ({ meal: { meals, loading }, getMeals }) => {
  const classes = useStyles();
  useEffect(() => {
    getMeals();
  }, []);


  console.log("meals", meals)

  if (loading || meals === null) {
    return <Preloader className={classes.preloader} />;
  }

  const table = meals.map((key, index) => {
    
    const group = Object.entries(meals[index]).map((attr, i) => {
     
      const groupDescription = (
        <GroupDescription
        meals={meals}
        index={index}
        i={i}
      />
      );

      const groupTableHeader = (
        <TableHead key={i}>
        <TableRow key={i}>
          <TableCell>meal</TableCell>
          <TableCell>name</TableCell>
          <TableCell>fat</TableCell>
          <TableCell>carbs</TableCell>
          <TableCell>protein</TableCell>
          <TableCell>Calories</TableCell>
          <TableCell>date</TableCell>
        </TableRow>
      </TableHead>
      );
      
      const row = attr[1].map((meal, i) => {
        return <MealItem index={i} meal={meal} key={meal._id} />
      });

      return (
        <TableContainer className={classes.root}>
        {groupDescription}
        <Table>
          {groupTableHeader}
          <TableBody>
            {row}
          </TableBody>
        </Table>
      </TableContainer>
      );
    });

    return group;
  })

  return table;
  
      
   

};

Meals.propTypes = {
  meal: PropTypes.object.isRequired,
  getMeals: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  meal: state.meal
});

export default connect(mapStateToProps, { getMeals })(Meals);