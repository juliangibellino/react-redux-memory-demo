// Library dependencies
import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

//Module dependencies
import {reducerConnect} from 'modules/app-state';

//Local dependencies
import * as memoryBoardActions from './../actions/memoryBoardActions';
import memoryReducer from './../reducers/memoryReducer';

class MemoryBoard extends Component {

    constructor(props, context) {
        super(props, context);

        this.actions = this.props.actions;
    }

    componentDidMount() {
        this.actions.getBoardData();
    }

    renderOptions(options) {
        return (
            <ul>
                {
                   options.map((option, index) => {
                       return (
                           <li key={index}>
                               <img src={`/resources/assets/images/${option.image}`} alt=""/></li>
                       );
                   })
                }
            </ul>
        );

    }

    renderLoading() {
        return (
            <div>Loading...</div>
        );
    }

    render() {
        const {memoryBoard} = this.props;

        return(
            <div>
                <h1>Memory Board</h1>
                {memoryBoard && memoryBoard.options ? this.renderOptions(memoryBoard.options) : this.renderLoading()}
            </div>
        );
    }
}

/**
 * @method registerReducer
 * @description Registers reducer properties to the redux store
 * @returns {{}}
 */
function registerReducer() {
    return {
        memoryBoard: memoryReducer
    };
}

/**
 * @method mapStateToProps
 * @description Sets the state properties to map to the Redux store instance
 *
 * @param state
 * @returns {{memoryBoard: (*|memoryBoard)}}
 */
function mapStateToProps(state) {
    return {
        memoryBoard: state.memoryBoard
    };
}

/**
 * @method mapDispatchToProps
 * @description Sets the action properties to map to the Redux actions
 * @param dispatch {Function} dispatch function from react-redux
 * @param ownProps {object} Properties object of component
 * @returns {{actions: *}}
 */
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(memoryBoardActions, dispatch)
    };
}

//Export the connected Redux-React component
export default reducerConnect(registerReducer)(
    connect(mapStateToProps, mapDispatchToProps)(MemoryBoard)
);
