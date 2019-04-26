import React, { useState } from 'react';
import uuid from 'uuid/v4';
import { addTodoAction } from '../redux';
import { useActions } from 'react-redux';

const TodoInput = (props) => {
  const [todo, setTodo] = useState('Value');
  const addTodo = useActions(addTodoAction);

  const onChange = (event) => {
    setTodo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo.trim() === '') return;
    addTodo({
      id: uuid(),
      name: todo,
      complete: false
    });
    setTodo('');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-div">
        <input
          type="text"
          name="todo"
          placeholder="Add a todo"
          value={todo}
          onChange={onChange}
        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default TodoInput;
