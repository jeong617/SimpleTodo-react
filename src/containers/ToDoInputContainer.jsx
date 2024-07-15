import React, {useState} from 'react';

export default function ToDoInputContainer({addTodo}) {
    const [inputBox, setInputBox] = useState('');
    const handleChange = (e) => {
        setInputBox(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputBox.trim() !== '') {
            addTodo(inputBox);
            setInputBox('');
        }
    }
    return (
        <div className="todo-input">
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputBox} onChange={handleChange} placeholder='할 일을 입력하세요!' />
                <button type="submit">추가</button>
            </form>
        </div>
    )
}