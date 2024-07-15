import * as React from 'react';
import './App.css';
import ToDoInputContainer from './containers/ToDoInputContainer'
import Button from '@mui/material/Button';

function App() {
  const [todos, setTodos] = React.useState([]);
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  }

  return (
    <div className="container">
      <h1>TODO LIST</h1>
      <ToDoInputContainer addTodo={addTodo}/>
    </div>
  )
}

export default App;
