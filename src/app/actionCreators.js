import {INPUT} from './actions';

const inputCreator = (input) => {
    return {
        type: INPUT,
        input
    }
}

export default inputCreator;