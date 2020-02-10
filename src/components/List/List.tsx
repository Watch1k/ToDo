import React from 'react'
import { List } from 'antd'
import Item from '../Item'
import { useListConnect } from '../../useConnect'

const ToDoList = () => {
  const {
    todos,
    deleteTodoDispatch,
    editTodoDispatch,
    toggleTodoDispatch,
  } = useListConnect()

  return (
    <List data-testid='list'>
      {todos.map(item => (
        <Item
          key={item.id}
          item={item}
          editTodoDispatch={editTodoDispatch}
          toggleTodoDispatch={toggleTodoDispatch}
          deleteTodoDispatch={deleteTodoDispatch}
        />
      ))}
    </List>
  )
}

export default ToDoList
