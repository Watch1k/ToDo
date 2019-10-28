import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { IState } from '../interfaces/state'
import Filter from '../components/Filter/Filter'
import { setVisibilityFilter } from '../actions'

const mapStateToProps = (state: IState) => ({
  visibilityFilter: state.visibilityFilter,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  ...bindActionCreators({ setVisibilityFilter }, dispatch),
})

export type IVisibilityFilterProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
