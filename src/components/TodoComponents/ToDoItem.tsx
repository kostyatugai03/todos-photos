import { Checkbox, FormControlLabel } from '@mui/material'
import React from 'react'
import { ToDo } from '../../pages/Todos'
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';


const ToDoItem = ({todo, setTodos}: {todo: ToDo, setTodos: any}) => {
    const changeStatus = () => {
        setTodos((prev: any) => {
            const index = prev.findIndex((item: ToDo) => item.id === todo.id)
            if(!(prev[index].done)) {
                const moveDown = prev.splice(index, 1)[0];
                moveDown.done = !(moveDown.done);
                prev.push(moveDown)
            } else if(prev[index].done){
                const moveUp = prev.splice(index, 1)[0];
                moveUp.done = !(moveUp.done);
                prev.unshift(moveUp)
            }
            return [...prev]
        })
    }

    const handleDelete = () => {
        setTodos((prev: any) => {
            const index = prev.findIndex((item: ToDo) => item.id === todo.id)
            prev.splice(index, 1)
            return [...prev]
        })
    }

    return (
        <li key={todo.id} style={{ display: 'flex', alignItems: 'center' }}>
            <FormControlLabel 
            control={<Checkbox onClick={changeStatus} checked={todo.done} id={`${todo.id}`}/>} 
            label={<Link to={`/todos/todo/${todo.id}`}>{todo.title.toUpperCase()}</Link>}/>
            
            <DeleteIcon
                onClick={handleDelete}
                style={{ cursor: 'pointer' }}/>
        </li>
    )
}

export default ToDoItem;