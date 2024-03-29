/**
 * Created by s0m01dq on 5/18/17.
 */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import {Provider} from 'react-redux';
import {loadCourses} from './actions/CourseAction';
import {loadAuthors} from './actions/authorActions';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import configureStore from './store/configureStore';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render (
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById('app')
);
