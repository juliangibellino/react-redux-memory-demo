/**
 * Module for storing and dynamically registering reducers to a redux store
 */

/**
 * Class representing a ReducerRegistry for managing a collection of reducers
 * and registered additional reducers dynamically
 */
export default class ReducerRegistry {
    constructor(initialReducers = {}) {
        this._reducers = {...initialReducers};
        this._emitChange = null;
    }

    /**
     * @method
     * @param newReducers {Object} Object of reducers to register
     * @description Adds new reducer(s) to the collection of _reducers and emits the change callback
     */
    register(newReducers) {
        if(typeof newReducers !== 'object') {
            throw new Error(`ReducerRegistry.register was expecting an object but receive a ${typeof newReducers}.`);
        }

        this._reducers = {...this._reducers, ...newReducers};

        if (this._emitChange !== null) {
            this._emitChange(this.getReducers());
        }
    }

    /**
     * @method unregister
     * @description Removes reducer(s) from the collection of _reducers and emits the change callback
     * @param reducers  Object} Object of reducers to unregister
     */
    //Currently Redux throws a warning when removing reducers from a store. Since not removing reducers currently does
    // not impose a performance issue, let's keep an eye on this and wait for this warning to be resolved from the Redux team
    //https://github.com/reactjs/redux/issues/1636
    /*unregister(reducers) {
        if(typeof reducers !== 'object') {
            throw new Error(`ReducerRegistry.unregister was expecting an object but receive a ${typeof reducers}.`);
        }

        const reducedReducers = Object.assign({}, ...this._reducers);

        Object.keys(reducers).forEach(reducerKey => {
            if(reducedReducers[reducerKey] === reducers[reducerKey]) {
                delete reducedReducers[reducerKey];
            }
        });

        this._reducers = {...reducedReducers};

        if (this._emitChange !== null) {
            this._emitChange(this.getReducers());
        }
    }*/

    /**
     * @method
     * @returns {{}} Collection of reducers
     * @description Getter for retrieving _reducers collection
     */
    getReducers() {
        return {...this._reducers};
    }

    /**
     * @method
     * @param listener {Function} Callback method to call on change event
     * @description Sets a callback function to _emitChange property
     */
    setChangeListener(listener) {
        if (this._emitChange !== null) {
            throw new Error('Can only set the listener for a ReducerRegistry once.');
        }
        this._emitChange = listener;
    }
}
