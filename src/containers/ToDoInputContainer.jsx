import React, {useState} from 'react';
import ToDoInput from '../components/ToDoInput'

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
    return <ToDoInput handleSubmit={handleSubmit} handleChange={handleChange} inputBox={inputBox}/>
}