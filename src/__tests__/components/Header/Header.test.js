import React from 'react';
import { render } from '@testing-library/react';
import Header from '../../../components/Header/Header';
import { Strings } from '../../../enums/strings';

describe('Header component', () => {
  const title = Strings.header;
  const wrapper = {...render(<Header title={title}/>)};

  it('Renders', () => {
    expect(wrapper.getByTestId('header')).toBeInTheDocument();
    expect(wrapper.getByText(title)).toBeInTheDocument()
  });

  it('Matches snapshot', () => {
    expect(wrapper.asFragment()).toMatchSnapshot();
  });
});
