import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from 'react'
import { setVisibilityFilter } from '../actions'
import { IState } from '../interfaces/state'

export const useFilterConnect = () => {
  const visibilityFilter = useSelector(
    (state: IState) => state.visibilityFilter
  )
  const dispatch = useDispatch()
  const setVisibilityFilterDispatch = useCallback(
    visibilityFilter => dispatch(setVisibilityFilter(visibilityFilter)),
    [dispatch]
  )

  return {
    visibilityFilter,
    setVisibilityFilter: setVisibilityFilterDispatch,
  }
}
