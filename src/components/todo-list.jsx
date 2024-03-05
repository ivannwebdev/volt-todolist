import { Col, Flex, List } from 'antd'
import { TodoItem } from './todo-item'
import { useFilter } from '../hooks/use-filter'
import { Checkbox } from './checkbox'
import { useSelector } from 'react-redux'
import { todosSelectors } from '../selectors/todos-selectors'

function TodoList() {
  const allTodos = useSelector(todosSelectors.todos)
  const completedTodos = useSelector(todosSelectors.completed)
  const currentTodos = useSelector(todosSelectors.current)
  const { completed, current, all, data } = useFilter()
  const [showAll, setShowAll] = all
  const [showCompleted, setShowCompleted] = completed
  const [showCurrent, setShowCurrent] = current

  const renderTodos = (todo) => <TodoItem
    completed={todo.completed}
    text={todo.body}
    id={todo.id}
  />

  return (
    <Col>
      <Flex gap={'large'} justify={'flex-end'}>
        <Checkbox
          checked={showAll}
          onChange={setShowAll}
          label={`all (${allTodos.length})`}
        />
        <Checkbox
          checked={showCompleted}
          onChange={setShowCompleted}
          label={`completed (${completedTodos.length}/${allTodos.length})`}
        />
        <Checkbox
          checked={showCurrent}
          onChange={setShowCurrent}
          label={`current (${currentTodos.length}/${allTodos.length})`}
        />
      </Flex>
      <List
        dataSource={data}
        renderItem={renderTodos}
        locale={{
          'emptyText': 'No todo here ;(',
        }}
        style={{ 'width': 500 }}
      />
    </Col>
  )
}

export { TodoList }
