import React from 'react'
import Item from './'
import { renderWithRedux } from '../../utils/tests'
import { store } from '../../store'
import { fireEvent } from '@testing-library/react'

const todo = {
  text: 'todo1',
  completed: false,
  id: new Date().getTime(),
}

describe('Item component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = renderWithRedux(<Item item={todo} />, store)
  })

  it('Renders', () => {
    expect(wrapper.getByTestId('list-item')).toBeInTheDocument()
  })

  it('Matches snapshot', () => {
    expect(wrapper.asFragment()).toMatchSnapshot()
  })

  it('Edit button works', () => {
    const button = wrapper.getByTestId('item-edit')

    // shows paragraph only
    expect(wrapper.queryByTestId('item-input')).not.toBeInTheDocument()
    expect(wrapper.queryByTestId('item-p')).toBeInTheDocument()

    fireEvent.click(button)

    // show input only
    expect(wrapper.queryByTestId('item-input')).toBeInTheDocument()
    expect(wrapper.queryByTestId('item-p')).not.toBeInTheDocument()
  })
})
