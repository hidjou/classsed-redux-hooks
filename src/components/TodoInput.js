import React, { useState } from 'react';
import uuid from 'uuid/v4';
import { addTodo } from '../redux';
import { useDispatch } from 'react-redux';

const TodoInput = (props) => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState('Value');

  const onChange = (event) => {
    setTodo(event.target.value);
  };
  
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo.trim() === '') return;
    dispatch(addTodo({
      id: uuid(),
      name: todo,
      complete: false
    }));
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
