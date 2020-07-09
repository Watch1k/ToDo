import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from 'react'
import { deleteTodo, editTodo, toggleTodo } from '../actions'
import { IState } from '../interfaces/state'
import { VisibilityFiltersEnum } from '../enums'
import { createSelector } from 'reselect'

export const useMapDispatchToProps = () => {
  const dispatch = useDispatch()
  const editTodoDispatch = useCallback(
    (text, id) => dispatch(editTodo(text, id)),
    [dispatch]
  )
  const toggleTodoDispatch = useCallback(id => dispatch(toggleTodo(id)), [
    dispatch,
  ])
  const deleteTodoDispatch = useCallback(id => dispatch(deleteTodo(id)), [
    dispatch,
  ])

  return {
    editTodoDispatch,
    toggleTodoDispatch,
    deleteTodoDispatch,
  }
}

const selectTodos = (state: IState) => state.todos
const selectVisibilityFilter = (state: IState) => state.visibilityFilter
const todosSelector = createSelector([selectTodos, selectVisibilityFilter], (todos, visibilityFilter) => {
  switch (visibilityFilter) {
    case VisibilityFiltersEnum.SHOW_ALL:
      return todos
    case VisibilityFiltersEnum.SHOW_COMPLETED:
      console.log('calculate1')
      return todos.filter(todo => todo.completed)
    case VisibilityFiltersEnum.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
    default:
      return todos
  }
})

export const useListConnect = () => {
  const todos = useSelector(todosSelector)

  // const todos = useSelector(({ todos, visibilityFilter }: IState) => {
  //   switch (visibilityFilter) {
  //     case VisibilityFiltersEnum.SHOW_ALL:
  //       return todos
  //     case VisibilityFiltersEnum.SHOW_COMPLETED:
  //       console.log('calculate!')
  //       freeze(1)
  //       return todos.filter(todo => todo.completed)
  //     case VisibilityFiltersEnum.SHOW_ACTIVE:
  //       return todos.filter(todo => !todo.completed)
  //     default:
  //       return todos
  //   }
  // })

  return {
    todos,
    ...useMapDispatchToProps(),
  }
}
