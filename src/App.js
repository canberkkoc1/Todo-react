import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import "./App.css";
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const LOCAL_STORAGE_KEY ='todolist';


function App() {
  const [todos,setTodo] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(storageTodos){
      setTodo(storageTodos);
    }
  },[]);

  useEffect (() => {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos));
  },[todos]);

  function addTodo(todo){
    setTodo([todo,...todos])
  }

  function toggleComplete(id){
    setTodo(
      todos.map(todo => {
        if(todo.id === id){
          return {
            ...todo,
            completed:!todo.completed
          };        
        }
        return todo;
      })
    )
  }

  function removeTodo(id){
    setTodo(todos.filter(todo=>todo.id !== id));

  }



  return (
    <div className="App">
      <Typography style={{ padding: 14 }} variant="h2">
      Todo
      </Typography>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}

export default App;
