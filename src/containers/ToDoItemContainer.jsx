import React from "react";
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'

const ToDoItemContainer = ({todo, index, deleteTodo, toggleTodo}) => {

    return (
        <li>
            <div className="todo-text">
                <Checkbox checked={todo.completed} onChange={() => toggleTodo(index)}></Checkbox>
                <span>{todo.text}</span>
            </div>
            <Button onClick={() => deleteTodo(index)}>삭제</Button>
        </li>
    );
}

export default ToDoItemContainer;