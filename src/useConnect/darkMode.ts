import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from 'react'
import { setDarkMode } from '../actions'
import { IState } from '../interfaces/state'

export const useDarkModeConnect = () => {
  const dispatch = useDispatch()
  console.log('omg')
  const darkMode = useSelector((state: IState) => state.darkMode)
  const setDarkModeDispatch = useCallback(
    darkMode => dispatch(setDarkMode(darkMode)),
    [dispatch]
  )

  return {
    darkMode,
    setDarkMode: setDarkModeDispatch,
  }
}
