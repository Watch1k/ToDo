import React from 'react'
import { Switch } from 'antd'
import { useDarkModeConnect } from '../../useConnect'
import { darkModeStyles } from './DarkModeStyles'

const DarkMode = () => {
  const { darkMode, setDarkMode } = useDarkModeConnect()
  const handleChange = (checked: boolean) => {
    setDarkMode(checked)
  }

  return (
    <div style={darkModeStyles}>
      <Switch
        onChange={handleChange}
        checked={darkMode}
        data-testid='darkMode'
      />
    </div>
  )
}

export default DarkMode
