import React from 'react'
import List from './'
import configureStore from 'redux-mock-store'
import { fakeTask1, fakeTask2 } from '../../mocks'
import { renderWithRedux } from '../../utils/tests'

describe('Form component', () => {
  let wrapper
  const mockStore = configureStore()
  const initialState = {
    todos: [fakeTask1, fakeTask2],
  }
  const store = mockStore(initialState)

  beforeEach(() => {
    wrapper = renderWithRedux(<List todos={initialState.todos} />, store)
  })

  it('Renders', () => {
    expect(wrapper.getByTestId('list')).toBeInTheDocument()
  })

  it('Matches snapshot', () => {
    expect(wrapper.asFragment()).toMatchSnapshot()
  })

  it('Renders all items', () => {
    expect(wrapper.getByText(fakeTask1.text)).toBeInTheDocument()
    expect(wrapper.getByText(fakeTask2.text)).toBeInTheDocument()
    expect(wrapper.getAllByTestId('list-item').length).toBe(
      initialState.todos.length
    )
  })
})
