import React from 'react'
import { fireEvent } from '@testing-library/react'
import { store } from '../../store'
import { renderWithRedux } from '../../utils/tests'
import DarkMode from './'

describe('DarkMode component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = renderWithRedux(<DarkMode />, store)
  })

  it('Renders', () => {
    expect(wrapper.getByTestId('darkMode')).toBeInTheDocument()
  })

  it('Matches snapshot', () => {
    expect(wrapper.asFragment()).toMatchSnapshot()
  })

  it('DarkMode enabled by default', () => {
    expect(wrapper.getByTestId('darkMode').checked).toBe(true)
  })

  it('DarkMode state should be true after click', () => {
    fireEvent.click(wrapper.getByTestId('darkMode'))
    expect(wrapper.getByTestId('darkMode').checked).toBe(false)
  })
})
