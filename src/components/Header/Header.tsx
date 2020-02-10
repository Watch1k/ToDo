import React from 'react'
import { Typography } from 'antd'
import { getHeaderStyles, getTitleStyles } from './HeaderStyles'
import { IHeaderProps } from '../../containers/HeaderContainer'

const { Title } = Typography

export type IProps = {
  title: string
} & IHeaderProps

const Header = (props: IProps) => {
  const { title } = props

  return (
    <header style={getHeaderStyles(props)} data-testid='header'>
      <Title style={getTitleStyles(props)}>{title}</Title>
    </header>
  )
}

export default Header
