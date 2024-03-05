import { Button, Input, Modal, message } from 'antd'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/slices/todo'
import { MAX_LENGTH } from '../constants'

function AddTodoModal() {
  const dispatch = useDispatch()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [todoText, setTodoText] = useState('')

  const showModal = () => {
    setIsModalOpen(true)
  }

  function handleOk() {
    if (!todoText) setIsModalOpen(false)
    else if (todoText.length > MAX_LENGTH) {
      message.error('Your todo is too long!')
    } else {
      dispatch(addTodo(todoText))
      setIsModalOpen(false)
      setTodoText('')
      message.success('Todo was added!')
    }
  }

  const handleCancel = () => {
    setIsModalOpen(false)
    setTodoText('')
  }

  return (
    <>
      <Button type='primary' onClick={showModal}>
        NEW TODO
      </Button>
      <Modal
        title='Basic Modal'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}>
        <Input
          placeholder='your todo...'
          value={todoText}
          onChange={(event) => setTodoText(event.target.value)}
          count={{
            'show': true,
            'max': MAX_LENGTH,
          }}
        />
      </Modal>
    </>
  )
}

export { AddTodoModal }
