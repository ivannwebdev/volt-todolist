import { List } from 'antd'
import { useDispatch } from 'react-redux'
import { setCompleted } from '../store/slices/todo'
import { Checkbox } from './checkbox'

function TodoItem({ text, completed, id }) {
  const dispatch = useDispatch()
  const todoStyle = completed ? {
    'textDecoration':
      completed ? 'line-through' : 'none',
    'textDecorationColor': 'red',
  } : undefined

  function handleChange() {
    dispatch(setCompleted(id))
  }

  return (
    <List.Item actions={
      [<Checkbox
        checked={completed}
        onChange={handleChange}
        label='done'
      />]
    }>
      <List.Item.Meta
        title={`Todo ${id}`}
        description={<div style={todoStyle}>{text}</div>}
      />
    </List.Item>
  )
}

export { TodoItem }
