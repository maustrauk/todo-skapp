import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from "./TodoItem";

const TodoList = (props) => {
    const {input, setInput, items, addItem, removeItem} = props;

    return (
      <div className="todolist">
          <div className="heading">
              <h1 className="title">To-Do List</h1>
          </div>
              <input
                  type="text"
                  value={input}
                  onChange={(event) => {setInput(event.target.value)}}
              />
              <button onClick={addItem}>Add</button>

          <div className="items">
            <ul>
                {items.map((item, index) => (
                    <TodoItem
                        key={index}
                        id={index}
                        item={item}
                        onCheck={removeItem}
                    />
                ))}
            </ul>
          </div>
      </div>
    );
}

TodoList.propTypes = {
    input: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    setInput: PropTypes.func.isRequired,
    addItem: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired,
}

export default TodoList;