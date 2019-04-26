import {configureStore, createSlice} from "redux-starter-kit";
import uuid from 'uuid/v4';

const initialState = [
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
];

const {actions, reducer : todosReducer} = createSlice({
  slice : "todos",
  initialState,
  reducers : {
    addTodo(state, action) {
      // You can "mutate" the state in a reducer, thanks to Immer
      state.push(action.payload)
    },
    toggleTodo(state, action) {
      const todo = state.find(todo => todo.id === action.payload);
      todo.complete = !todo.complete;
    },
    deleteTodo(state, action) {
      return state.filter((todo) => todo.id !== action.payload)
    }
  }
})

// configureStore automatically adds the Redux DevTools and combines reducers
export const store = configureStore({
  reducer : {
    todos : todosReducer
  }
});

export const {addTodo, toggleTodo, deleteTodo} = actions;
