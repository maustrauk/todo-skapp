import React from "react";
import PropTypes from 'prop-types';

import StyledLi from "../styles/styledLi";

const TodoItem = (props) => {
    const { id, item, onCheck } = props;
    return (
        <>
        <StyledLi
            onClick={() => {onCheck(id)}}
        >
            {item}  
        </StyledLi>
        </>
    )
}

TodoItem.propTypes ={
    id: PropTypes.number.isRequired,
    item: PropTypes.string.isRequired,
    onCheck: PropTypes.func.isRequired,
}

export default TodoItem;