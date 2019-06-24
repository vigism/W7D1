import {RECEIVE_TODOS,RECEIVE_TODO,receiveTodo,receiveTodos} from '../actions/todo_actions';
const initialState = [
   {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
   {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
];


const todosReducer = (state={}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({},state);
  switch(action.type){
    case RECEIVE_TODOS:
      nextState = {};
      for(let i = 0;i < action.todos.length; i++){
        nextState[action.todos[i].id] = action.todos[i]; 
      }
      return nextState;
    case RECEIVE_TODO:
      nextState[action.todo.id] = action.todo;
      return nextState;
    default: 
      return state;
  }
};

export default todosReducer;