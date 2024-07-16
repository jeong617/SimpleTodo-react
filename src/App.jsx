import * as React from 'react';
import './App.css';
import ToDoInputContainer from './containers/ToDoInputContainer'
import ToDoListContainer from './containers/ToDoListContainer'


function App() {
  const [todos, setTodos] = React.useState(() => {
    const localData = localStorage.getItem('todos');
    return localData ? JSON.parse(localData) : [];
  });

  React.useEffect(() => {
    console.log('todos가 바뀌었단다');
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    console.log(todos);
    setTodos([...todos, {text: todo, completed: false}]);
  }

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  }

  const toggleTodo = (idx) => {
    const newTodos = todos.map((todo, i) => 
      i === idx ? {...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  }
 

  return (
    <div className="container">
      <h1>TODO LIST</h1>
      <ToDoListContainer 
        todos={todos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
        />
      <ToDoInputContainer addTodo={addTodo}/>
    </div>
  )
}

export default App;
