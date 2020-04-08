import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMeals } from './../actions/mealActions';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const Meals = ({ meal: { meals, loading }, getMeals }) => {

    useEffect(() => {
        getMeals();
    
    }, []);

    if(loading || meals === null) {
        return "Loading..."
    }

    return (          
            <TableContainer>
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
                            <TableRow key={meal.id}>
                                <TableCell align="center" component="th" scope="row">
                                    {index + 1}
                                </TableCell>
                                <TableCell align="left">{meal.name}</TableCell>
                                <TableCell align="right">{meal.fat}</TableCell>
                                <TableCell align="right">{meal.carbohydrate}</TableCell>
                                <TableCell align="right">{meal.protein}</TableCell>
                                <TableCell align="right">{meal.calories}</TableCell>
                                <TableCell align="left">{meal.date}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
    );
};

Meals.propTypes = {
    meal: PropTypes.object.isRequired,
    getLods: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    meal: state.meal
});

export default connect(mapStateToProps, { getMeals })(Meals);