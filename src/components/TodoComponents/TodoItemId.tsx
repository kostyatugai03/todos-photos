import { Button, Input } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { TodoContext } from '../../context/TodoContext'
import { ToDo } from '../../pages/Todos'

const TodoItemId = () => {
    const params = useParams()
    const [todo, setTodo] = useState<ToDo | null>(null)
    const [title, setTitle] = useState<string>('');
    const { todos, setTodos } = useContext(TodoContext)

    useEffect(() => {
        todos && setTodo(() => {
            return todos.filter((item: ToDo) => item.id === params.id)[0]
        })
    }, [todos])

    useEffect(() => {
        if(todo) {
            setTitle(todo.title)
        }
    }, [todo])

    const handleTodoTitle = (e: any) => {
        setTitle(e.target.value);
    }

    const saveTitle = () => {
        if(todos.length > 0){
            const todosCopy = [...todos]
            const index = todosCopy.findIndex((item: ToDo) => item.id === params.id);
            todosCopy[index].title = title;
            setTodo({...todosCopy[index]})
            setTodos(todosCopy)
        }

    }

    return (
        <div>
            <h1>ToDo:</h1>
            { todo && 
                <div>
                    <Input onChange={handleTodoTitle} id="filled-basic" value={title.toUpperCase()} />
                    <Button onClick={saveTitle}>Change title</Button>
                </div>
            }
        </div>
    )
}

export default TodoItemId