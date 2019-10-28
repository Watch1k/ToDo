import { VisibilityFiltersEnum } from '../enums'

export const ADD_TODO = 'ADD_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const DELETE_TODO = 'DELETE_TODO'

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const VisibilityFilters = {
  SHOW_ALL: VisibilityFiltersEnum.SHOW_ALL,
  SHOW_COMPLETED: VisibilityFiltersEnum.SHOW_COMPLETED,
  SHOW_ACTIVE: VisibilityFiltersEnum.SHOW_ACTIVE,
}

export const SET_DARK_MODE = 'SET_DARK_MODE'
