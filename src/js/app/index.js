/**
 * Main app entry for Memory Game
 */

// Library dependencies
import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';

// Module dependencies
import {createAppState, ReducerProvider } from 'modules/app-state';
import {MemoryBoard} from 'modules/memory-board';

/**
 * @constant
 * An AppState object to manage the reducer and store state of the application
 */
const appState = createAppState();

/**
 * @method
 * @description Initializes the app by registering inventory reducers and bootstrapping the app
 */
function init() {
    bootstrapApp();
}

/**
 * @method
 * @description Bootstraps the Lead Form application by providing the app the store and setting the DealerForm
 * component then rendering it to the DOM
 */
function bootstrapApp() {
    render(
        <Provider store={appState.store}>
            <ReducerProvider reducerRegistry={appState.reducerRegistry}>
                <MemoryBoard />
            </ReducerProvider>
        </Provider>,
        document.getElementById('memory-game')
    );
}

/**
 * On load initialize app
 */
init();
