import { GET_MEALS, SET_LOADING, MEALS_ERROR, ADD_MEAL } from '../actions/types';

const initialState = {
    meals: null,
    current: null,
    loading: false,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_MEALS:
            return {
                ...state,
                meals: action.payload,
                loading: false
            };
            case ADD_MEAL:
                return {
                    ...state,
                    meals: [...state.logs, action.payload],
                    loading: false
                };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case MEALS_ERROR:
            console.error(action.payload);
            return {
                ...state,
                error: action.payload
            }
            default:
                return state;
    }
};