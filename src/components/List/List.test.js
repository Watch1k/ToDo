import React from 'react'
import { render } from '@testing-library/react'
import ToDoList from './'

const todos = [
  {
    text: 'todo1',
    completed: false,
    id: new Date().getTime(),
  },
  {
    text: 'todo2',
    completed: true,
    id: new Date().getTime() + 1,
  },
]

describe('List component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = render(<ToDoList todos={[...todos]} />)
  })

  it('Renders', () => {
    expect(wrapper.getByTestId('list')).toBeInTheDocument()
  })

  it('Matches snapshot', () => {
    expect(wrapper.asFragment()).toMatchSnapshot()
  })

  it('Renders all items', () => {
    expect(wrapper.getAllByTestId('list-item')).toHaveLength(todos.length)
  })
})
