import { connect } from 'react-redux'
import { IState } from '../interfaces/state'
import ToDoList from '../components/List'
import { bindActionCreators, Dispatch } from 'redux'
import { deleteTodo, editTodo, toggleTodo } from '../actions'
import { createSelector } from 'reselect'
import { VisibilityFiltersEnum } from '../enums'

const getTodos = (state: IState) => state.todos
const getVisibilityFilter = (state: IState) => state.visibilityFilter

const filterTodos = createSelector(
  [getTodos, getVisibilityFilter],
  (todos, visibilityFilter) => {
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
  }
)

const mapStateToProps = (state: IState) => ({
  todos: filterTodos(state),
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  ...bindActionCreators(
    {
      editTodo,
      toggleTodo,
      deleteTodo,
    },
    dispatch
  ),
})

export type IListDispatchProps = ReturnType<typeof mapDispatchToProps>

export type IListProps = ReturnType<typeof mapStateToProps> & IListDispatchProps

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)
