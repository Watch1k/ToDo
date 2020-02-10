import { IProps } from './Header'

export const getHeaderStyles = ({ darkMode }: IProps) => ({
  padding: 30,
  display: 'flex',
  justifyContent: 'center',
  background: darkMode ? '#2838ee' : 'transparent',
})

export const getTitleStyles = ({ darkMode }: IProps) => ({
  marginBottom: 0,
  color: darkMode ? '#fff' : 'inherit',
})
