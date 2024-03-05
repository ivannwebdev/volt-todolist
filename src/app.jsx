import { AddTodoModal } from './components/add-todo-modal'
import { TodoList } from './components/todo-list'
import { Flex } from 'antd'

function App() {
  return (
    <Flex
      align='center'
      gap='small'
      vertical
    >
      <h1 style={{
        'textAlign': 'center',
        'marginBottom': 50,
        'marginTop': 25,
      }}>
        Your todos are here!
      </h1>
      <TodoList />
      <AddTodoModal />
    </Flex>
  )
}

export default App
