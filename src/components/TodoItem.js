import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

import StyledButton from "../styles/styledButton";
import StyledP from "../styles/styledP";


const StyledTodoItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    text-align: center;
`;

const StyledRemoveButton = styled(StyledButton)`
    margin-left: 20%;
    margin-right: 20%;
`;

const TodoItem = (props) => {
    const { id, item, onCheck } = props;
    return (
        <StyledTodoItem>
            <StyledP>{item}</StyledP>
            <StyledRemoveButton onClick={() => {onCheck(id)}}>Remove this item</StyledRemoveButton>
        </StyledTodoItem>
    )
}

TodoItem.propTypes ={
    id: PropTypes.number.isRequired,
    item: PropTypes.string.isRequired,
    onCheck: PropTypes.func.isRequired,
}

export default TodoItem;