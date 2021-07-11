import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TodoItem from "./TodoItem";
import Loading from './Loading';

import StyledButton from '../styles/styledButton';
import StyledInput from '../styles/styledInput';
import StyledH1 from '../styles/styledH1';

const StyledItems = styled.div`
    margin-top: 20px;
`;

const StyledHeading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledTodoList = styled.div`
    margin: 50px auto;
    padding: 16px;
    min-height: 580px;
    max-width: 300px;
    background-color: #f1f5f8;
    background-image: radial-gradient(#bfc0c1 7.2%, transparent 0);
    background-size: 40px 40px;
    border-radius: 20px;
    box-shadow: 4px 3px 7px 2px #00000040;
`;


const TodoList = (props) => {
    const {input, setInput, items, addItem, removeItem, handleMySkyLogout, loading, saveData} = props;

    return (
      <StyledTodoList>
          <StyledHeading>
              <StyledH1 className="title">To-Do List</StyledH1>
          </StyledHeading>
          <StyledInput
                  type="text"
                  value={input}
                  onChange={(event) => {setInput(event.target.value)}}
              />
        <StyledButton onClick={addItem}>Add</StyledButton>

          <StyledItems>
            <StyledButton onClick={saveData}>Save to MySky</StyledButton>
              {loading ? <Loading/> : 
                items.map((item, index) => (
                  <TodoItem
                      key={index}
                      id={index}
                      item={item}
                      onCheck={removeItem}
                  />
                ))}   
          </StyledItems>
          <StyledButton onClick={handleMySkyLogout}>Log Out</StyledButton>
      </StyledTodoList>
    );
}

TodoList.propTypes = {
    input: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    setInput: PropTypes.func.isRequired,
    addItem: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired,
    handleMySkyLogout: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    saveData: PropTypes.func.isRequired,
}

export default TodoList;