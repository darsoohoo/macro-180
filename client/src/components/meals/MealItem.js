import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import { deleteMeal } from '../../actions/mealActions';

const TableItem = ({ meal, deleteMeal } ) => {

    const onDelete = () => {
      console.log(meal._id)
        deleteMeal(meal._id);
    }

    return (
        <TableRow >
        <TableCell align='center' component='th' scope='row'>
          { 1}
        </TableCell>
        <TableCell align='left'>{meal.name}</TableCell>
        <TableCell align='right'>{meal.fat}</TableCell>
        <TableCell align='right'>{meal.carbohydrate}</TableCell>
        <TableCell align='right'>{meal.protein}</TableCell>
        <TableCell align='right'>{meal.calories}</TableCell>
        <TableCell align='left'>{meal.date}</TableCell>
        <TableCell align='left'><DeleteForeverSharpIcon onClick={onDelete}/></TableCell>
      </TableRow>
    )
}

TableItem.propTypes = {
    meal: PropTypes.object.isRequired,
    deleteMeal: PropTypes.func.isRequired,
   
}


export default connect(
    null,
    { deleteMeal }
  )(TableItem);
  
