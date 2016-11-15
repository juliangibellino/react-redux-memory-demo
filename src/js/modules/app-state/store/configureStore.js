/**
 * Module for creating and configuring a redux store
 */

//Library Dependencies
import {applyMiddleware, createStore, compose, combineReducers}  from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

/**
 * @description Sets the compose enhancer to enable Redux dev tools if the build is for a dev environment;
 * otherwise returns the default compose
 */
const composeEnhancers = process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
    compose;

/**
 * @description Sets middleware based on environment
 * @type {*[]}
 */
const middleware = process.env.NODE_ENV !== 'production' ?
    [reduxImmutableStateInvariant(), thunk] :
    [thunk];

/**
 * @method
 * @param configureStore
 * @description Creates a redux app store with initial reducers and registers the store to update its
 * reducers when a new reducer is added to the reducerRegistry
 *
 * @returns {*} instance of a redux store
 */
export default function configureStore(rootReducer, initialState) {
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(...middleware)
        )
    );
}
