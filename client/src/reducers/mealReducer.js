import {
  GET_MEALS,
  SET_LOADING,
  MEALS_ERROR,
  ADD_MEAL,
  DELETE_MEAL,
  SEARCH_MEALS,
  CLEAR_CURRENT,
  SET_CURRENT
} from '../actions/types';

const initialState = {
  meals: null,
  current: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MEALS:
      return {
        ...state,
        meals: action.payload,
        loading: false,
      };
    case ADD_MEAL:
      return {
        ...state,
        meals: [...state.meals, action.payload],
        loading: false,
      };
    case DELETE_MEAL:
      return {
        ...state,
        meals: state.meals.filter(meal => meal._id !== action.payload),
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case MEALS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    case SEARCH_MEALS:
      return {
        ...state,
        meals: action.payload,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };

    default:
      return state;
  }
};
