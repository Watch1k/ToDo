import React from 'react'
import { render } from '@testing-library/react'
import Header from './'
import { Strings } from '../../enums/strings'

describe('Header component', () => {
  let wrapper
  const title = Strings.header

  beforeEach(() => {
    wrapper = render(<Header title={title} />)
  })

  it('Renders', () => {
    expect(wrapper.getByTestId('header')).toBeInTheDocument()
    expect(wrapper.getByText(title)).toBeInTheDocument()
  })

  it('Matches snapshot', () => {
    expect(wrapper.asFragment()).toMatchSnapshot()
  })
})
