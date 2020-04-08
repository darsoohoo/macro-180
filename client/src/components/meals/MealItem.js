import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import { deleteMeal } from '../../actions/mealActions';
import Moment from 'react-moment';


const TableItem = ({ meal, index, deleteMeal } ) => {
    const onDelete = () => {
        deleteMeal(meal._id);
    }

    return (
        <TableRow >
        <TableCell align='center' component='th' scope='row'>
          {index + 1}
        </TableCell>
        <TableCell align='left'>{meal.name}</TableCell>
        <TableCell align='right'>{meal.fat}</TableCell>
        <TableCell align='right'>{meal.carbohydrate}</TableCell>
        <TableCell align='right'>{meal.protein}</TableCell>
        <TableCell align='right'>{meal.calories}</TableCell>
        <TableCell align='left'><Moment format='M/D/YYYY'>{meal.date}</Moment></TableCell>
        <TableCell align='left'><DeleteForeverSharpIcon onClick={onDelete}/></TableCell>
      </TableRow>
    )
}

TableItem.propTypes = {
    meal: PropTypes.object.isRequired,
    deleteMeal: PropTypes.func.isRequired
}


export default connect(
    null,
    { deleteMeal }
  )(TableItem);
  
