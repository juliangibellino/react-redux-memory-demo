//Library dependencies
import React, {Component, PropTypes } from 'react';

/**
 * @method reducerConnect
 * @param registerReducer
 * @description Component wrapper for dynamically registering reducer(s) to a redux store via an AppState.reducerRegistry
 *
 * Implementation example:
 *
 *      function registerReducer(ownProps) {
 *          return {
 *              reducerName: reducerFunction
 *          };
 *      }
 *
 *      export default reducerConnect(registerReducer)(ComponentToConnect);
 *
 * @returns wrapWithConnect {function(){}} Wrapper function to wrap component with
 */
export default function reducerConnect(registerReducer) {

    /**
     * @method wrapWithConnect
     */
    return function wrapWithConnect(WrappedComponent) {

        /**
         * @class ReducerConnect
         * @description React component for wrapping a child component with a registered reducer and
         * passing the initial properties/state down.
         */
        class ReducerConnect extends Component {

            /**
             * @method componentWillMount
             * @description When the component mounts register the reducers by applying the registerReducer
             * through the reducerRegistry
             */
            componentWillMount() {
                this.context.reducerRegistry.register(
                    registerReducer(this.props)
                );
            }

            /**
             * @method render
             * @description Renders the WrappedComponent and passes the inherited props/state
             * @returns {XML}
             */
            render () {
                return (<WrappedComponent { ...this.props } { ...this.state } />);
            }
        }

        /**
         * @property contextTypes
         * @description Exposes context types to provide component
         * @type {{reducerRegistry: *}}
         */
        ReducerConnect.contextTypes = {
            reducerRegistry: PropTypes.object
        };

        return ReducerConnect;
    };
}
