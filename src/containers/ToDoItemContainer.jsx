import React from "react";

const ToDoItemContainer = ({todo, index, deleteTodo, toggleTodo}) => {
    return (
        <li>
            <span onClick={() => toggleTodo(index)}>
                {todo.text}
            </span>
            <button onClick={() => deleteTodo(index)}>삭제</button>
        </li>
    );
}

export default ToDoItemContainer;