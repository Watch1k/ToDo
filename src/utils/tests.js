import React from 'react'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'

export const renderWithRedux = (ui, store) => ({
  ...render(<Provider store={store}>{ui}</Provider>),
  store,
})
