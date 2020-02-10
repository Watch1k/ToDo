import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO } from '../constants'
import { ITodoAction } from '../actions'
import { ITodo } from '../interfaces/state'

const defaultState: ITodo[] = JSON.parse(localStorage.getItem('todos') || '[]')

export const todos = (state: ITodo[] = defaultState, action: ITodoAction) => {
  switch (action.type) {
    case ADD_TODO: {
      const res = [
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
        ...state,
      ]
      localStorage.setItem('todos', JSON.stringify(res))
      return res
    }
    case EDIT_TODO: {
      const res = state.map(item =>
        item.id === action.id
          ? {
              ...item,
              text: action.text,
            }
          : item
      )
      localStorage.setItem('todos', JSON.stringify(res))
      return res
    }
    case TOGGLE_TODO: {
      const res = state.map(item =>
        item.id === action.id
          ? {
              ...item,
              completed: !item.completed,
            }
          : item
      )
      localStorage.setItem('todos', JSON.stringify(res))
      return res
    }
    case DELETE_TODO: {
      const res = state.filter(item => item.id !== action.id)
      localStorage.setItem('todos', JSON.stringify(res))
      return res
    }
    default:
      return state
  }
}
