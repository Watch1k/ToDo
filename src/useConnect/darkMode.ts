import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
import { setDarkMode } from '../actions'

export const useDarkModeConnect = () => {
  const dispatch = useDispatch()
  const setDarkModeDispatch = useCallback(
    (darkMode) => dispatch(setDarkMode(darkMode)),
    [dispatch],
  )

  return {
    setDarkMode: setDarkModeDispatch,
  }
}
