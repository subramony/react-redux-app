import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

// you can name it as courses if lhs = rhs short hand property name
const rootReducer =  combineReducers({
    courses : courses ,
    authors : authors

});

export default rootReducer;