import { connect } from 'react-redux'
import { addTodo } from '../actions'
import ToDoForm from '../components/Form/Form'
import { bindActionCreators, Dispatch } from 'redux'
import { IState } from '../interfaces/state'

const mapStateToProps = (state: IState) => ({
  todos: state.todos,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  ...bindActionCreators({ addTodo }, dispatch),
})

export type IToDoFormProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

export default connect(mapStateToProps, mapDispatchToProps)(ToDoForm)
