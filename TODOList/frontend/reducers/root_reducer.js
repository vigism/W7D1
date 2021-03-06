import {combineReducers} from 'redux';
import todosReducer from './todos_reducer';

const rootReducer = combineReducers( {

  todos: todosReducer // do not evoke the todosReducer
});

export default rootReducer;