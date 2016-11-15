//Library dependencies
import React, {Component, PropTypes, Children} from 'react';
import {connect} from 'react-redux';

/**
 * Component for providing the `reducerRegistry` to its children through context
 * 
 * Note: to access the the `reducerRegistry` within a child component, the contextType will need to be defined within
 * the childs properties. 
 * 
 * eg:
 * 
 * ChildComponent.contextTypes = {
 *      reducerRegistry: PropTypes.object
 * };
 * 
 */
class ReducerProvider extends Component {

    constructor(props, context) {
        super(props, context);

        this.reducerRegistry = props.reducerRegistry;
    }

    /**
     * @description Provides the `reducerRegistry` to the childContext 
     * @returns {{reducerRegistry: *}}
     */
    getChildContext() {
        return {
            reducerRegistry: this.reducerRegistry
        };
    }

    /**
     * @description Renders children nodes of the component
     * @returns {XML}
     */
    render() {
        return Children.only(this.props.children);
    }
}

/**
 * @property
 * @description Defined incoming property types for component
 * @type {{reducerRegistry: *, children: *}}
 */
ReducerProvider.propTypes = {
    reducerRegistry: PropTypes.object.isRequired,
    children: PropTypes.element.isRequired
};

/**
 * @property
 * @description Defined childContext types for component
 * @type {{reducerRegistry: *}}
 */
ReducerProvider.childContextTypes = {
    reducerRegistry: PropTypes.object.isRequired
};

/**
 * Exports react component
 */
export default ReducerProvider;
