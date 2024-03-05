import { useState } from 'react'
import { useSelector } from 'react-redux'
import { todosSelectors } from '../selectors/todos-selectors'

function useFilter() {
  const allTodos = useSelector(todosSelectors.todos)
  const completedTodos = useSelector(todosSelectors.completed)
  const currentTodos = useSelector(todosSelectors.current)

  const [showAll, setShowAll] = useState(true)
  const [showCompleted, setShowCompleted] = useState(false)
  const [showCurrent, setShowCurrent] = useState(false)

  function toggleShowAll() {
    setShowCompleted(false)
    setShowCurrent(false)
    setShowAll(!showAll)
  }

  function toggleShowCompleted() {
    setShowAll(false)
    setShowCurrent(false)
    setShowCompleted(!showCompleted)
  }

  function toggleShowCurrent() {
    setShowAll(false)
    setShowCompleted(false)
    setShowCurrent(!showCurrent)
  }

  let filtredData

  if (showAll) filtredData = allTodos
  else if (showCompleted) filtredData = completedTodos
  else if (showCurrent) filtredData = currentTodos
  else {
    setShowAll(true)
    filtredData = allTodos
  }

  return {
    'completed': [showCompleted, toggleShowCompleted],
    'current': [showCurrent, toggleShowCurrent],
    'all': [showAll, toggleShowAll],
    'data': filtredData,
  }
}

export { useFilter }
