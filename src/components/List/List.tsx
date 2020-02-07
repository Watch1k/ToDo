import React from 'react'
import { List } from 'antd'
import { IListProps } from '../../containers/ListContainer'
import Item from '../Item'

const ToDoList = (props: IListProps) => (
  <List data-testid='list'>
    {props.todos.map(item => (
      <Item
        key={item.id}
        item={item}
        editTodo={props.editTodo}
        toggleTodo={props.toggleTodo}
        deleteTodo={props.deleteTodo}
      />
    ))}
  </List>
)

export default ToDoList
