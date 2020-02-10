import { ISetDarkMode } from '../actions'
import { SET_DARK_MODE } from '../constants'

export const defaultState = true

export const darkMode = (
  state: boolean = defaultState,
  action: ISetDarkMode
) => {
  if (action.type === SET_DARK_MODE) {
    return action.darkMode
  } else {
    return state
  }
}
