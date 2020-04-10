import { 
    GET_MEALS, 
    SET_LOADING, 
    MEALS_ERROR, 
    ADD_MEAL, 
    DELETE_MEAL,
    SET_CURRENT,
    CLEAR_CURRENT
 } from './types';

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

// Get meals from server
export const getMeals = () => async dispatch => {
    try {
        setLoading();

        const res = await fetch('/api/meals');
        const data = await res.json();
        let meals = [];
          // Group By Algorithm
        const groupMeals = () => {
            const items  = data;
            let keyMap = {};
            for (let i = 0; i < items.length; i++) {
            if (!keyMap[items[i]["date"]]) {
                keyMap[items[i]["date"]] = [];
                keyMap[items[i]["date"]].push(items[i]);
            } else {
                keyMap[items[i]["date"]].push(items[i]);
            }
            }
            console.log("keyMap", keyMap)
            meals.push(keyMap)    
            return meals;
        };
              

        dispatch({
            type: GET_MEALS,
            payload: groupMeals()
        });
        
    } catch (err) {
        dispatch({
            type: MEALS_ERROR,
            payload: err.response.statusText
        });
    }
};


// Add meal from server
export const addMeal = (meal) => async dispatch => {
    try {
        setLoading();

        const res = await fetch('/api/meals', {
            method: 'POST',
            body: JSON.stringify(meal),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();

        dispatch({
            type: ADD_MEAL,
            payload: data
        });
        
    } catch (err) {
        dispatch({
            type: MEALS_ERROR,
            payload: err.response.statusText
        });
    }
};

// Delete meal from server
export const deleteMeal = id => async dispatch => {
    try {
        setLoading();

        await fetch(`/api/meals/${id}`, {
            method: 'DELETE'
        });
    
        dispatch({
            type: DELETE_MEAL,
            payload: id
        });
    } catch (err) {
        dispatch({
            type: MEALS_ERROR,
            payload: err.response.statusText
        });
    }
};


// Set current meal
export const setCurrent = meal => {
    return {
      type: SET_CURRENT,
      payload: meal
    };
  };
  
  // Clear current meal
  export const clearCurrent = () => {
    return {
      type: CLEAR_CURRENT
    };
  };
  
  // Set loading to true
  export const setLoading = () => {
    return {
      type: SET_LOADING
    };
  };
  