import React from 'react'
import Main from './Main'
import { Strings } from '../../enums/strings'
import { renderWithRedux } from '../../utils/tests'
import { store } from '../../store'

describe('Main component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = renderWithRedux(<Main />, store)
  })

  it('Renders', () => {
    expect(wrapper.getByTestId('main')).toBeInTheDocument()
  })

  it('Matches snapshot', () => {
    expect(wrapper.asFragment()).toMatchSnapshot()
  })

  it('All text lines are present', () => {
    ;[Strings.mainListOfTasks, Strings.mainCreateTusk].forEach(text =>
      expect(wrapper.getByText(text)).toBeInTheDocument()
    )
  })
})
