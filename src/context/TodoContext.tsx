import React, { useState, createContext, useEffect } from 'react'
import { ToDo } from '../pages/Todos'

export const TodoContext = createContext<{
    todos: Array<ToDo> | [],
    setTodos: (v: any) => void
}>({
    todos: [],
    setTodos: () => {}
})

export const TodoContextProvider = (props: any) => {
    const [todos, setTodos] = useState<Array<ToDo> | []>([]);

    useEffect(() => {
        const store: string | null = localStorage.getItem('todos')
        store && setTodos(JSON.parse(store))
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    return (
        <TodoContext.Provider value={{todos, setTodos}}>
            {props.children}
        </TodoContext.Provider>
    )
}