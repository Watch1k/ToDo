import React from 'react'
import { Switch } from 'antd'
import { IDarkModeProps } from '../../containers/DarkModeContainer'

const DarkMode = (props: IDarkModeProps) => {
  const handleChange = (checked: boolean) => {
    props.setDarkMode(checked)
  }

  return (
    <Switch onChange={handleChange}>
      Dark Mode
    </Switch>
  )
}

export default DarkMode
