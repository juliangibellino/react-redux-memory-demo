/**
 * Module for configuring redux reducers for an AppState
 */

//Dependencies
import {combineReducers} from 'redux';

/**
 * @method configureReducers
 * @description Creates a combined redux reducer and wires third-party middleware
 *
 * @param reducers {Object} Collection of reducer objects to be used in redux store
 * @returns {*}
 */
export default function configureReducers(reducers) {
    return combineReducers({
        ...reducers
        //TODO: Combine core third-party reducers here, e.g. `applyMiddleware`
    });
}
