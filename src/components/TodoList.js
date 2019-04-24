import React from 'react';

import { connect } from 'react-redux';
import { toggleTodoComplete } from '../redux';

const TodoList = (props) => {
  const { todos } = props;
  const toggleComplete = (todoId) => {
    props.toggleTodoComplete(todoId);
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
  { toggleTodoComplete }
)(TodoList);
