import React from 'react';
import { Typography } from 'antd';
import { headerStyles, titleStyles } from './HeaderStyles';

const { Title } = Typography;

const Header = () => (
  <header style={headerStyles}>
    <Title style={titleStyles}>ToDo List</Title>
  </header>
);

export default Header;
