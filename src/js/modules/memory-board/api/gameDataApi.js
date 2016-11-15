//Library dependencies
import {shuffle} from 'lodash';

//module dependencies
import gameData from './../constants/gameData';

function getData() {
    return parseData(gameData);
}

function parseData(data) {
    let parsedData = Array.concat(data.slice(0), data.slice(0));

    parsedData = parsedData.map((option, index) => {
        return {
            ...option,
            code: `${option.id}-0${index}`,
            active: false,
            correct: false
        };
    });

    return shuffle(parsedData);
}

//Export public API
export default {
    getData
};
