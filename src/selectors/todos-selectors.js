import { createSelector } from '@reduxjs/toolkit'

const todos = (state) => state.todos
const completed = createSelector(todos,
  (tds) => tds.filter((todo) => todo.completed))
const current = createSelector(todos,
  (tds) => tds.filter((todo) => !todo.completed))

export const todosSelectors = {
  todos,
  completed,
  current,
}
