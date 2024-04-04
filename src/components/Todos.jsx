import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector((state) => {
        return state.todos;
    })
    const dispatch = useDispatch();
  return (
    <div>
      {todos.map((todo) => {
        return <li className='listStyle' key={todo.id}>
            {todo.text}
            <button className='pl-4 p-2' onClick={()=>{dispatch(removeTodo(todo.id))}}>X</button>
        </li>
      })}
    </div>
  )
}

export default Todos
