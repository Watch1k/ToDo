import { ISetDarkMode } from '../actions'
import { SET_DARK_MODE } from '../constants'

const defaultState = false

export const darkMode = (state: boolean = defaultState, action: ISetDarkMode) => {
  if (action.type === SET_DARK_MODE) {
    return action.darkMode
  } else {
    return defaultState
  }
}
