import React from "react";
import PropTypes from 'prop-types';

const TodoItem = (props) => {
    const { id, item, onCheck } = props;
    return (
        <>
        <li
            onClick={() => {onCheck(id)}}
        >
            {item}  
        </li>
        </>
    )
}

TodoItem.propTypes ={
    id: PropTypes.number.isRequired,
    item: PropTypes.string.isRequired,
    onCheck: PropTypes.func.isRequired,
}

export default TodoItem;