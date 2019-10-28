import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { IState } from '../interfaces/state'
import DarkMode from '../components/DarkMode/DarkMode'
import { setDarkMode } from '../actions'

const mapStateToProps = (state: IState) => ({
  darkMode: state.darkMode,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  ...bindActionCreators({ setDarkMode }, dispatch),
})

export type IDarkModeProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

export default connect(mapStateToProps, mapDispatchToProps)(DarkMode)
