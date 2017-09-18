import { Contants } from './constants';

//actions
export const increment = () => {
    return {
        type: Contants.Increment
    };
};

export const decrement = () => {
    return {
        type: Contants.Decrement
    };
};
