import React from 'react'
import { Menu } from 'antd'
import { Link, withRouter } from 'react-router-dom'
import { navItemStyles, navStyles } from './NavStyles'
import { RouteComponentProps } from 'react-router'

const Nav = (props: RouteComponentProps) => {
  const { pathname } = props.location

  return (
    <Menu mode='horizontal' style={navStyles} selectedKeys={[pathname]}>
      <Menu.Item key='/' style={navItemStyles}>
        <Link to='/'>Home</Link>
      </Menu.Item>
      <Menu.Item key='/search' style={navItemStyles}>
        <Link to='/search'>Search</Link>
      </Menu.Item>
    </Menu>
  )
}

export default withRouter(Nav)
