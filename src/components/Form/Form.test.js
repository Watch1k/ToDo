import React from 'react'
import { fireEvent } from '@testing-library/react'
import { store } from '../../store'
import { renderWithRedux } from '../../utils/tests'
import FormContainer from '../../containers/FormContainer'

describe('Form component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = renderWithRedux(<FormContainer />, store)
  })

  it('Renders', () => {
    expect(wrapper.getByTestId('form')).toBeInTheDocument()
  })

  it('Matches snapshot', () => {
    expect(wrapper.asFragment()).toMatchSnapshot()
  })

  it('Input works', () => {
    const input = wrapper.getByTestId('form-input')
    const value = 'New task'

    fireEvent.change(input, { target: { value } })
    expect(input.value).toBe(value)
  })

  it('Submit adds new task and prevent if empty', () => {
    const input = wrapper.getByTestId('form-input')
    const value = 'New task'

    fireEvent.change(input, { target: { value } })
    fireEvent.submit(wrapper.getByTestId('form'))

    expect(store.getState().todos.some(_ => _.text === value)).toBe(true)

    // Prevent if empty
    const getLength = () => store.getState().todos.length
    const length = getLength()
    fireEvent.change(input, { target: { value: '' } })
    fireEvent.submit(wrapper.getByTestId('form'))

    expect(getLength()).toBe(length)
  })
})
