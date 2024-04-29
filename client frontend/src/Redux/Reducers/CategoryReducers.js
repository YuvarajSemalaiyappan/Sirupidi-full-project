import {
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE
  } from '../Constants/CategoryConstants'; // Adjust the path as per your project structure
  
  export const categoryListReducer = (state = { categories: [] }, action) => {
    switch (action.type) {
      case FETCH_CATEGORIES_REQUEST:
        return { loading: true, categories: [] };
      case FETCH_CATEGORIES_SUCCESS:
        return { loading: false, categories: action.payload };
      case FETCH_CATEGORIES_FAILURE:
        return { loading: false, error: action.payload, categories: [] };
      default:
        return state;
    }
  };