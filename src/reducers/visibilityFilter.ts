import { IVisibilityFilter } from '../interfaces/state'
import { IVisibilityFilterAction } from '../actions'
import { VisibilityFilters } from '../constants'
import { VisibilityFiltersEnum } from '../enums'

const defaultState = VisibilityFilters.SHOW_ACTIVE

export const visibilityFilter = (
  state: IVisibilityFilter = defaultState,
  action: IVisibilityFilterAction
) => {
  switch (action.visibilityFilter) {
    case VisibilityFiltersEnum.SHOW_ALL:
      return VisibilityFiltersEnum.SHOW_ALL
    case VisibilityFiltersEnum.SHOW_ACTIVE:
      return VisibilityFiltersEnum.SHOW_ACTIVE
    case VisibilityFiltersEnum.SHOW_COMPLETED:
      return VisibilityFiltersEnum.SHOW_COMPLETED
    default:
      return state
  }
}
