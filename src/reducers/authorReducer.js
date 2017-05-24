import * as types from '../actions/actionTypes';
import initalState from './initialState';

export default function authorReducer(state = initalState.author, action) {
    switch (action.type) {
        case types.LOAD_AUTHORS_SUCCESS :
            return action.authors;
        default :
            return state;
    }
}