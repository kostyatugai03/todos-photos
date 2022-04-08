import { useEffect, useState } from "react"
import { ToDo } from "../../pages/Todos"
import ToDoItem from "./ToDoItem"

const TodoList = ({todos, setTodos}: {todos: Array<ToDo> | [], setTodos: any}) => {
    const [filtered, setFiltered] = useState<any>(null)
    const [filterBy, setFilterBy] = useState<string | null>(null);

    const filterTodos = (filter: any) => {
        if(filter === 'done') {
            return todos.filter(item => item.done)
        }
        if(filter === 'todo') {
            return todos.filter(item => !item.done)
        }
        return todos.filter(item => item)
    }

    useEffect(() => {
        setFiltered(filterTodos(filterBy))
    }, [todos, filterBy])

    return (
        <>
            <button onClick={() => setFilterBy(null)}>all</button>
            <button onClick={() => setFilterBy('done')}>done</button>
            <button onClick={() => setFilterBy('todo')}>todo</button>
            <ul>
                {filtered &&
                    filtered.map((todo: ToDo) => {
                        return <ToDoItem todo={todo} setTodos={setTodos}/>
                    })
                }
            </ul>
        </>
    )
}

export default TodoList