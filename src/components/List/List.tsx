import React from 'react'
import { List } from 'antd'
import Item from '../Item'
import { useListConnect } from '../../useConnect'
import { ITodo } from '../../interfaces/state'

interface IProps {
  todos: ITodo[]
}

const ToDoList = ({ todos }: IProps) => {
  const {
    deleteTodoDispatch,
    editTodoDispatch,
    toggleTodoDispatch,
  } = useListConnect()

  return (
    <List data-testid='list'>
      {todos.length ? (
        todos.map(item => (
          <Item
            key={item.id}
            item={item}
            editTodoDispatch={editTodoDispatch}
            toggleTodoDispatch={toggleTodoDispatch}
            deleteTodoDispatch={deleteTodoDispatch}
          />
        ))
      ) : (
        <div style={{ textAlign: 'center' }}>No data</div>
      )}
    </List>
  )
}

export default ToDoList
