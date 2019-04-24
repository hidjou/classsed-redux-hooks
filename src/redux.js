import { createStore } from 'redux';
import uuid from 'uuid/v4';

const initialState = {
  todos: [
    {
      id: uuid(),
      name: 'Read a bit',
      complete: true
    },
    {
      id: uuid(),
      name: 'Do laundry',
      complete: false
    }
  ]
};

export const store = createStore(
  reducer,
  initialState,
  window.devToolsExtension && window.devToolsExtension()
);

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case 'TOGGLE_TODO':
      let newTodos = [...state.todos];
      let index = newTodos.findIndex((todo) => todo.id === action.payload);
      newTodos[index].complete = !newTodos[index].complete;
      return {
        ...state,
        todos: [...newTodos]
      };
    default:
      return state;
  }
}
// Actions
export const addTodoAction = (todo) => ({
  type: 'ADD_TODO',
  payload: todo
});

export const toggleTodoComplete = (todoId) => ({
  type: 'TOGGLE_TODO',
  payload: todoId
});
