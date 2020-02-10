import React, { useState } from 'react'
import { Button, Form, Icon, Input } from 'antd'
import { iconStyles } from './FormStyles'
import { IToDoFormProps } from '../../containers/FormContainer'

const ToDoForm = (props: IToDoFormProps) => {
  const [value, setValue] = useState('')

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!value) return
    props.addTodo(value)
    // Clear input
    setValue('')
  }

  return (
    <Form data-testid='form' layout='inline' onSubmit={handleSubmit}>
      <Form.Item>
        <Input
          value={value}
          prefix={<Icon type='unordered-list' style={iconStyles} />}
          placeholder='New task...'
          onChange={handleChange}
          data-testid='form-input'
        />
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Create
        </Button>
      </Form.Item>
    </Form>
  )
}

export default ToDoForm
