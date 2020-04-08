import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import { deleteMeal } from '../../actions/mealActions';


const TableItem = ({ meal, index, deleteMeal }) => {
  const onDelete = () => {
    deleteMeal(meal._id);
  };
  const timeConverter = () => {
    if(meal.date) {
      const date = meal.date.toString();
      const month = date.slice(5, 7);
      const year = date.slice(0, 4);
      const day = date.slice(8, 10);
      const newDate = month + '/' + day + '/' + year;
      return <TableCell align='left'>{newDate}</TableCell>;
    } else {
      return <TableCell align='center'>NA</TableCell>;
    }

  };

  return (
    <TableRow>
      <TableCell align='center' component='th' scope='row'>
        {index + 1}
      </TableCell>
      <TableCell align='left'>{meal.name}</TableCell>
      <TableCell align='right'>{meal.fat}</TableCell>
      <TableCell align='right'>{meal.carbohydrate}</TableCell>
      <TableCell align='right'>{meal.protein}</TableCell>
      <TableCell align='right'>{meal.calories}</TableCell>
      {timeConverter()}
      <TableCell align='left'>
        <DeleteForeverSharpIcon onClick={onDelete} />
      </TableCell>
    </TableRow>
  );
};

TableItem.propTypes = {
  meal: PropTypes.object.isRequired,
  deleteMeal: PropTypes.func.isRequired,
};

export default connect(null, { deleteMeal })(TableItem);
