import { Button, Input } from '@mui/material';
import React, { useContext, useState } from 'react';
import { v4 } from 'uuid';
import { TodoContext } from '../context/TodoContext';
import TodoList from '../components/TodoComponents/ToDoList';

export type ToDo = {
    title: string,
    done: boolean,
    id: string
}

const Todos = () => {
    const [todo, setTodo] = useState<ToDo>({
        title: '',
        done: false,
        id: '',
    });
    const {todos, setTodos} = useContext(TodoContext)

    const handleTodo = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void => {
        setTodo({...todo, title: e.target.value, id: v4()})
    }

    const addTodo = () => {
        if(todo.title !== ''){
            setTodos((prev: any) => {
                prev.unshift(todo)
                return [...prev]
            })
            setTodo({...todo, title: '', id: ''})
        }
    }

    return (
        <div>
            <h1>Todos</h1>
            <Input onChange={(e) => handleTodo(e)} id="filled-basic" value={todo.title} />
            <Button onClick={addTodo}>ADD TODO</Button>
            <TodoList todos={todos} setTodos={setTodos}/>
        </div>
    );
};

export default Todos;