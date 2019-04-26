import React from 'react';
// import TodoItem from './TodoItem';
import { useSelector, useActions } from 'react-redux';
import { toggleTodoComplete, deleteTodoAction } from '../redux';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  const actions = useActions({toggleTodoComplete, deleteTodoAction})

  // const { toggleTodo, deleteTodo } = useActions({
  //   toggleTodo: (todoId) => toggleTodoComplete(todoId),
  //   deleteTodo: (todoId) => deleteTodoAction(todoId)
  // });

  // const [todos, toggleTodo] = useRedux(
  //   (state) => state.todos,
  //   (todoId) => toggleTodoComplete(todoId)
  // );

  // const [todos, { toggleTodo, deleteTodo }] = useRedux((state) => state.todos, {
  //   toggleTodo: (todoId) => toggleTodoComplete(todoId),
  //   deleteTodo: (todoId) => deleteTodoAction(todoId)
  // });

  console.log(todos);

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.complete}
            onChange={() => actions.toggleTodoComplete(todo.id)}
          />
          <span className={todo.complete ? 'complete' : null}>{todo.name}</span>
          <span
            className="delete-button"
            onClick={() => actions.deleteTodoAction(todo.id)}
          >
            X
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
