import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO } from '../constants'
import { ITodoAction } from '../actions'
import { ITodo } from '../interfaces/state'

const defaultState: ITodo[] = [
  { text: '1111', id: new Date().getTime(), completed: false },
  { text: '2222', id: new Date().getTime() + 1, completed: false },
  { text: '3333', id: new Date().getTime() + 2, completed: false },
]

export const todos = (state: ITodo[] = defaultState, action: ITodoAction) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ]
    case EDIT_TODO:
      return state.map(item =>
        item.id === action.id
          ? {
              ...item,
              text: action.text,
            }
          : item
      )
    case TOGGLE_TODO:
      return state.map(item =>
        item.id === action.id
          ? {
              ...item,
              completed: !item.completed,
            }
          : item
      )
    case DELETE_TODO:
      return state.filter(item => item.id !== action.id)
    default:
      return state
  }
}
