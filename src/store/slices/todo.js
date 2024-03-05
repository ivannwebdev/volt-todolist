import { createSlice } from '@reduxjs/toolkit'
import { STORAGED_TODOS } from '../../constants'

function getInitialState() {
  const storagedTodos = JSON.parse(localStorage.getItem(STORAGED_TODOS))

  if (!storagedTodos) {
    const todos = [
      { 'body': 'Buy chicken', 'completed': false, 'id': 1 },
      { 'body': 'Make cake', 'completed': true, 'id': 2 },
      { 'body': 'Go to dentist', 'completed': false, 'id': 3 },
    ]
    localStorage.setItem(STORAGED_TODOS, JSON.stringify(todos))

    return todos
  }

  return storagedTodos
}

const todoSlice = createSlice({
  'name': 'todos',
  'initialState': getInitialState(),
  'reducers': {
    'addTodo': (state, action) => {
      const newTodo = {
        'body': action.payload,
        'completed': false,
        'id': state.at(-1).id + 1,
      }
      state.push(newTodo)
      localStorage.setItem(STORAGED_TODOS, JSON.stringify(state))
    },
    'setCompleted': (state, action) => {
      const id = action.payload
      for (const todo of state) {
        if (todo.id === id) todo.completed = !todo.completed
      }

      localStorage.setItem(STORAGED_TODOS, JSON.stringify(state))
    },
  },
})

export const { addTodo, setCompleted } = todoSlice.actions
export default todoSlice.reducer
