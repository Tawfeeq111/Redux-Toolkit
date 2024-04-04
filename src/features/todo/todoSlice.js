import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: nanoid(), text: "Tawfeeq"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((ele)=>{
                return ele.id !== action.payload
            })
        }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions;

export default todoSlice.reducer;