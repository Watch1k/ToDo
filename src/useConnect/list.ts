import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from 'react'
import { deleteTodo, editTodo, toggleTodo } from '../actions'
import { IState } from '../interfaces/state'
import { VisibilityFiltersEnum } from '../enums'

export const useListConnect = () => {
  const todos = useSelector(({ todos, visibilityFilter }: IState) => {
    switch (visibilityFilter) {
      case VisibilityFiltersEnum.SHOW_ALL:
        return todos
      case VisibilityFiltersEnum.SHOW_COMPLETED:
        return todos.filter(todo => todo.completed)
      case VisibilityFiltersEnum.SHOW_ACTIVE:
        return todos.filter(todo => !todo.completed)
      default:
        return todos
    }
  })
  const dispatch = useDispatch()
  const editTodoDispatch = useCallback(
    (text, id) => dispatch(editTodo(text, id)),
    [dispatch],
  )
  const toggleTodoDispatch = useCallback(
    (id) => dispatch(toggleTodo(id)),
    [dispatch],
  )
  const deleteTodoDispatch = useCallback(
    (id) => dispatch(deleteTodo(id)),
    [dispatch],
  )

  return {
    todos,
    editTodoDispatch,
    toggleTodoDispatch,
    deleteTodoDispatch,
  }
}
