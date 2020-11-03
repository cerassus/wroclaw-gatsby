import Weather from "./Weather"
import { connect } from "react-redux"
import { fetchWeather } from "../../redux/actions"

const mapStateToProps = state => ({
    weather: state.weather_reducer,
})

const mapDispatchToProps = dispatch => ({
    fetchWeather: () => dispatch(fetchWeather()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
