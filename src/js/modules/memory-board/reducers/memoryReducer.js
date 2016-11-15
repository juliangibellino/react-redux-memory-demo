//Module dependencies
import * as types from './../actions/memoryBoardActionTypes';

/**
 * @constant initalState
 * @description The initial state and data model for the reducer
 */
const initialState = {
    options: null
};

/**
 * Reducer for managing the state of a memory board
 */
export default function memoryReducer(state = initialState, action) {

    switch (action.type) {

        case types.LOAD_OPTIONS:
            return { ...state, options: action.data };

        case types.FLIP_OPTION:
            return { ...state, option: action.data };


        default:
            return state;
    }

}
