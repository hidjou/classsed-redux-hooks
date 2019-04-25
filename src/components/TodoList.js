import React from 'react';

import { connect } from 'react-redux';
import { toggleTodoComplete, deleteTodoAction } from '../redux';

const TodoList = (props) => {
  const { todos } = props;

  const toggleComplete = (todoId) => {
    props.toggleTodoComplete(todoId);
  };
  const deleteTodo = (todoId) => {
    props.deleteTodoAction(todoId);
  };

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.complete}
            onChange={toggleComplete.bind(null, todo.id)}
          />
          <span className={todo.complete ? 'complete' : null}>{todo.name}</span>
          <span
            className="delete-button"
            onClick={deleteTodo.bind(null, todo.id)}
          >
            X
          </span>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos
});

export default connect(
  mapStateToProps,
  { toggleTodoComplete, deleteTodoAction }
)(TodoList);
