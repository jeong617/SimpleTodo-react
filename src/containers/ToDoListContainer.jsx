import React from 'react';
import ToDoItemContainer from './ToDoItemContainer';

const ToDoListContainer = (props) => {
    console.log(props);
    return (
        <ul>
            {Array.isArray(props.todos) && props.todos.map((todo, index) => (
                <ToDoItemContainer
                    key={index}
                    todo={todo}
                    index={index}
                    toggleTodo={props.toggleTodo}
                    deleteTodo={props.deleteTodo}
                />
            ))}
        </ul>
    )
}

export default ToDoListContainer;