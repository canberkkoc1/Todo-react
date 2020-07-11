import React, {useState} from 'react';
import { Button, TextField } from "@material-ui/core";
import { v4 as uuidv4 } from 'uuid';



function TodoForm({addTodo}){
    const [todo,setTodo]=useState({
        id:"",
        title:"",
        completed:false,
    });

    function handleTitleChange(e){
        setTodo({...todo,title:e.target.value})
    }

    function handleSubmit (e){
        e.preventDefault();
        if(todo.title.trim()){ 
            addTodo({...todo,id:uuidv4() });
            setTodo({...todo,title:""})
        }
    }
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <TextField
                label="Title"
                type="text"
                name="title"
                value={todo.title}
                onChange={handleTitleChange}
            />
            <Button type="submit" color="primary">Submit</Button>
        </form>
    );
}

export default TodoForm;