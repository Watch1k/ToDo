import React from 'react'
import { Switch } from 'antd'
import { useDarkModeConnect } from '../../useConnect/darkMode';
import { darkModeStyles } from './DarkModeStyles';

const DarkMode = () => {
  const { setDarkMode } = useDarkModeConnect()
  const handleChange = (checked: boolean) => {
    setDarkMode(checked)
  }

  return (
    <div style={darkModeStyles}>
      <Switch onChange={handleChange} data-testid='darkMode' />
    </div>
  )
}

export default DarkMode
