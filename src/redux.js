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
// Reducer
function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, complete: !todo.complete }
            : todo
        )
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload)
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

export const deleteTodoAction = (todoId) => ({
  type: 'DELETE_TODO',
  payload: todoId
});
