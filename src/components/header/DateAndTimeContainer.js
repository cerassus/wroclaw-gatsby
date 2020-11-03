import DateAndTime from "./DateAndTime"
import { connect } from "react-redux"
import { fetchMoment } from "../../redux/actions"

const mapStateToProps = state => ({
    moment: state.moment_reducer,
})

const mapDispatchToProps = dispatch => ({
    fetchMoment: () => dispatch(fetchMoment()),
})

export default connect(mapStateToProps, mapDispatchToProps)(DateAndTime);
