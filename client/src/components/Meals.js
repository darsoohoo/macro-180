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
        <div>
            <ul>
                <li>
                    <h4>All Meals</h4>
                </li>
                {!loading && meals.length === 0 ? (
                    <p>No logs to show...</p>
                ) : (
                meals.map(meal => <li meal={meal} key={meal.id}>{meal.name}</li>)
                )}
            </ul>
        </div>
    );
};

Meals.propTypes = {
    meal: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    meal: state.meal
});

export default connect(mapStateToProps, { getMeals })(Meals);