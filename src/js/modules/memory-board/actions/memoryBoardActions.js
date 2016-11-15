//Module dependencies
import gameDataApi from './../api/gameDataApi';
import * as types from './../actions/memoryBoardActionTypes';

export function getBoardData() {
    console.log('getBoardData');
    return (dispatch) => {
        const boardData = gameDataApi.getData();
        dispatch(loadBoardData(boardData));
    };
}

export function loadBoardData(boardData) {
    return {type: types.LOAD_OPTIONS, data: boardData};
}

export function flipOption(optionId) {

}
