import React, { useState } from 'react'
import { Button, Icon, Input, List } from 'antd'
import { completeIconStyles, completeStyles, confirmStyles, deleteStyles, editStyles, inputStyles } from './ItemStyles'
import { IListDispatchProps } from '../../containers/ListContainer'
import { ITodo } from '../../interfaces/state'

export type IProps = IListDispatchProps & { item: ITodo }

const Item = (props: IProps) => {
  const { item } = props
  const [isEdit, setEdit] = useState(false)
  const [value, setValue] = useState(item.text)
  const [completed, setCompleted] = useState(item.completed)

  const handleEdit = () => {
    setEdit(true)
  }

  const handleDelete = () => {
    props.deleteTodo(item.id)
  }

  const handleConfirm = () => {
    props.editTodo(value, item.id)
    setEdit(false)
  }

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  const handleCompleted = () => {
    props.toggleTodo(item.id)
    setCompleted(completed => !completed)
  }

  const getActionButtons: () => React.ReactElement[] = () => ([
    isEdit
      ? (<Button
          key="btn_1"
          icon="check"
          onClick={handleConfirm}
          style={confirmStyles}
        />
      ) : (<Button
        key="btn_2"
        icon="edit"
        onClick={handleEdit}
        style={editStyles}
      />)
    ,
    <Button
      key="btn_3"
      icon="delete"
      style={deleteStyles}
      onClick={handleDelete}
    />,
    <Button
      key="btn_4"
      type="link"
      style={completeStyles}
      onClick={handleCompleted}
    >
      <Icon
        type="check-circle"
        theme={completed ? 'twoTone' : 'outlined'}
        style={completeIconStyles}
        twoToneColor="#52c41a"
        onClick={handleCompleted}
      />
    </Button>,
  ])

  return (
    <List.Item
      actions={getActionButtons()}
    >
      <List.Item.Meta title={
        isEdit
          ? (<Input style={inputStyles} value={value} onChange={handleChange} />)
          : (<p style={inputStyles}>{value}</p>)
      } />
    </List.Item>
  )
}

export default React.memo(Item)
