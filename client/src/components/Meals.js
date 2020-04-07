import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMeals } from './../actions/mealActions';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';

const Meals = ({ meal: { meals, loading }, getMeals }) => {

    useEffect(() => {
        getMeals();
    
    }, []);

    if(loading || meals === null) {
        return "Loading..."
    }

    return (          
            <TableContainer>
                <TableHead>
                    <TableRow>
                        <TableCell>Meal #</TableCell>
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
                        <TableRow key={meal.id}>
                            <TableCell align="right" component="th" scope="row">
                                {index + 1}
                            </TableCell>
                            <TableCell align="left">{meal.name}</TableCell>
                            <TableCell align="right">{meal.fat}</TableCell>
                            <TableCell align="right">{meal.carbs}</TableCell>
                            <TableCell align="right">{meal.protein}</TableCell>
                            <TableCell align="right">{meal.calories}</TableCell>
                            <TableCell align="right">{meal.date}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </TableContainer>
    );
};

Meals.propTypes = {
    meal: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    meal: state.meal
});

export default connect(mapStateToProps, { getMeals })(Meals);