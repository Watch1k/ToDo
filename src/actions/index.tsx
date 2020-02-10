import * as Redux from 'redux'
import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  SET_DARK_MODE,
  SET_VISIBILITY_FILTER,
  TOGGLE_TODO,
} from '../constants'
import { IVisibilityFilter } from '../interfaces/state'

export interface ITodoAction extends Redux.Action {
  text: string
  id: number
}

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  id: new Date().valueOf(),
  text,
})

export const editTodo = (text: string, id: number) => ({
  type: EDIT_TODO,
  text,
  id,
})

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  id,
})

export const deleteTodo = (id: number) => ({
  type: DELETE_TODO,
  id,
})

export interface IVisibilityFilterAction extends Redux.Action {
  visibilityFilter: IVisibilityFilter
}

export const setVisibilityFilter = (visibilityFilter: IVisibilityFilter) => ({
  type: SET_VISIBILITY_FILTER,
  visibilityFilter,
})

export interface ISetDarkMode extends Redux.Action {
  darkMode: boolean
}

export const setDarkMode = (darkMode: boolean) => ({
  type: SET_DARK_MODE,
  darkMode,
})
