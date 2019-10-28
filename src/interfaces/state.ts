import { VisibilityFiltersEnum } from '../enums'

export interface ITodo {
  text: string,
  completed: boolean,
  id: number
}

export type IVisibilityFilter = VisibilityFiltersEnum

export interface IState {
  todos: ITodo[],
  visibilityFilter: IVisibilityFilter,
  darkMode: boolean,
}
