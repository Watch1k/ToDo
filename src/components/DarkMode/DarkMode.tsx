import React from 'react';
import { Switch } from 'antd';
import { useDarkModeConnect } from '../../useConnect/darkMode';

const DarkMode = () => {
  const { setDarkMode } = useDarkModeConnect();
  const handleChange = (checked: boolean) => {
    setDarkMode(checked);
  };

  return (
    <Switch onChange={handleChange}>
      Dark Mode
    </Switch>
  );
};

export default DarkMode
