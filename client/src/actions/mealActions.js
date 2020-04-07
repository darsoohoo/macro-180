import { GET_MEALS, SET_LOADING, MEALS_ERROR } from './types';

// export const getMeals = () => {
//     return (dispatch) => {
//         setLoading();

//         const res = await fetch('/logs');
//         const data = await res.json();

//         dispatch({
//             type: GET_LOGS,
//             payload: data
//         });
//     }
// }

// Get logs from server
export const getMeals = () => async dispatch => {
    try {
        setLoading();

        const res = await fetch('/api/meals');
        const data = await res.json();

        dispatch({
            type: GET_MEALS,
            payload: data
        });
        
    } catch (err) {
        dispatch({
            type: MEALS_ERROR,
            payload: err.response.data
        });
    }
};

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}