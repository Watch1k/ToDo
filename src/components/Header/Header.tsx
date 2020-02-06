import React from 'react'
import { Typography } from 'antd'
import { headerStyles, titleStyles } from './HeaderStyles'

const { Title } = Typography;

export type IProps = {
  title: string
}

const Header = ({ title }: IProps) => (
  <header style={headerStyles} data-testid='header'>
    <Title style={titleStyles}>{title}</Title>
  </header>
)

export default Header
