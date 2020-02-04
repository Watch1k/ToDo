import React from 'react';
import { fireEvent } from '@testing-library/react'
import { store } from '../../../store'
import { renderWithRedux } from '../../../utils/tests'
import DarkMode from '../../../components/DarkMode/DarkMode'

describe('DarkMode component', () => {
  const wrapper = renderWithRedux(<DarkMode />, store);

  it('Renders', () => {
    expect(wrapper.getByTestId('darkMode')).toBeInTheDocument();
  });

  it('Matches snapshot', () => {
    expect(wrapper.asFragment()).toMatchSnapshot();
  });

  it('DarkMode state should be true after click', () => {
    fireEvent.click(wrapper.getByTestId('darkMode'))
    expect(store.getState().darkMode).toBe(true)
  })
});
