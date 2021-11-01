import React, { useState } from 'react'
import { Button, Icon, Input, List } from 'antd'
import {
  completeIconStyles,
  completeStyles,
  confirmStyles,
  deleteStyles,
  editStyles,
  inputStyles,
} from './ItemStyles'
import { ITodo } from '../../interfaces/state'
import { useMapDispatchToProps } from '../../useConnect/list'

export type IProps = ReturnType<typeof useMapDispatchToProps> & { item: ITodo }

const Item = (props: IProps) => {
  const { item } = props
  const [isEdit, setEdit] = useState(false)
  const [value, setValue] = useState(item.text)
  const [completed, setCompleted] = useState(item.completed)

  console.log('render Item!')

  const handleEdit = () => {
    setEdit(true)
  }

  const handleDelete = () => {
    props.deleteTodoDispatch(item.id)
  }

  const handleConfirm = () => {
    props.editTodoDispatch(value, item.id)
    setEdit(false)
  }

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  const handleCompleted = () => {
    props.toggleTodoDispatch(item.id)
    setCompleted(completed => !completed)
  }

  const getActionButtons: () => React.ReactElement[] = () => [
    isEdit ? (
      <Button
        key='btn_1'
        icon='check'
        onClick={handleConfirm}
        style={confirmStyles}
      />
    ) : (
      <Button
        key='btn_2'
        icon='edit'
        data-testid='item-edit'
        onClick={handleEdit}
        style={editStyles}
      />
    ),
    <Button
      key='btn_3'
      icon='delete'
      style={deleteStyles}
      onClick={handleDelete}
    />,
    <Button
      key='btn_4'
      type='link'
      style={completeStyles}
      onClick={handleCompleted}
    >
      <Icon
        type='check-circle'
        theme={completed ? 'twoTone' : 'outlined'}
        style={completeIconStyles}
        twoToneColor='#52c41a'
        onClick={handleCompleted}
      />
    </Button>,
  ]

  return (
    <List.Item data-testid='list-item' actions={getActionButtons()}>
      <List.Item.Meta
        title={
          isEdit ? (
            <Input
              style={inputStyles}
              data-testid='item-input'
              value={value}
              onChange={handleChange}
            />
          ) : (
            <p data-testid='item-p' style={inputStyles}>
              {value}
            </p>
          )
        }
      />
    </List.Item>
  )
}

export default Item
