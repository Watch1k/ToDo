import { connect } from 'react-redux'
import { IState } from '../interfaces/state'
import Header from '../components/Header'

const mapStateToProps = (state: IState) => ({
  darkMode: state.darkMode,
})

export type IHeaderProps = ReturnType<typeof mapStateToProps>

export default connect(mapStateToProps)(Header)
