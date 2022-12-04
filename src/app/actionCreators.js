import {INPUT} from './actions';

const inputCreator = (input) => {
    return {
        type: INPUT,
        input
    }
}

export const viewCreator = (view) => {
    return {
        type: view
    }
}

export default inputCreator;