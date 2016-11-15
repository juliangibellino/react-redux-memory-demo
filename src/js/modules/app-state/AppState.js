/**
 * Module for creating a redux store for maintaining application state
 *
 * This module follows the redux methodology of using one store per redux application and enforces a singleton pattern
 * when instantiating an appState module so that each app will receive the same instance when creating their stores
 */

//Dependencies
import configureStore from './store/configureStore';
import rootReducer from './reducers/rootReducer';
import ReducerRegistry from './reducers/ReducerRegistry';
import configureReducers from './reducers/configureReducers';

/**
 * @property
 * Stores the instance created from
 */
let instance;

/**
 * Class representing an AppState containing a redux store and reducerRegistry for dynamically
 * registering reducers to store
 *
 * @returns {Object} singleton instance of AppState
 */
class AppState {
    constructor() {
        if(instance){
            return instance;
        }

        //set the instance to instantiated AppState
        instance = this;

        // set initial root reducer and expose ReducerRegistry for dynamically adding reducers
        this.reducerRegistry = new ReducerRegistry({ root: rootReducer});

        //configure redux store with initial root reducers
        this.store = configureStore(configureReducers(this.reducerRegistry.getReducers()));

        // Reconfigure the store's reducer when the reducer registry is changed - we
        // depend on this for loading reducers via code splitting and for hot
        // reloading reducer modules.
        this.reducerRegistry.setChangeListener((reducers) => {
            this.store.replaceReducer(configureReducers(reducers));
        });
    }
}

/**
 * @method
 * @description Creates an instance of AppState
 *
 * @returns {AppState}
 */
function createAppState() {
    return new AppState();
}

/**
 * Exports factory method for creating an AppState
 */
export default createAppState;
