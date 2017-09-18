import { Contants } from './constants';
import { combineReducers } from 'redux';

export const defaultState = {
    count: 0
}

// reducer 
export const countReducer = (state = defaultState, action) => {
    switch (action.type) {
        case Contants.Increment:
            return {count: state.count + 1}
        case Contants.Decrement:
            return {count: state.count - 1};
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    countReducer
})