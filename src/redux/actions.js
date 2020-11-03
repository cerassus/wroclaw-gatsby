import moment from "moment-timezone"

const SET_WEATHER = "SET_WEATHER"
const SET_WEATHER_ERROR = "SET_WEATHER_ERROR"
const SET_MOMENT = "SET_MOMENT"
const nodata = "No data";

const setWeather = (temp, weather) => ({
  type: SET_WEATHER,
  temp,
  weather,
})

const setWeatherError = (error) => ({
    type: SET_WEATHER_ERROR,
    error
})

const setMoment = (string) => ({
    type: SET_MOMENT,
    string,
})

function fetchMoment() {
    return async function (dispatch) {
        setInterval(() => dispatch(setMoment(moment().tz("Europe/Warsaw").format("DD MMMM YYYY - HH:mm:ss"))), 1000)
    }
  }

function fetchWeather() {
  return async function (dispatch) {
    try {
      const shot = await fetch("http://api.openweathermap.org/data/2.5/weather?q=Wroclaw&appid=074a49e2ca39f7ea0ec283efbda4aedf")
      const response = await shot.json()
      console.log(response)
      dispatch(setWeather(response.main.temp, response.weather[0].main))
    } catch (error) {
      console.error(error)
      dispatch(setWeatherError(nodata))
    }
  }
}

export { fetchWeather, fetchMoment, SET_WEATHER, setWeather, setMoment, nodata, SET_WEATHER_ERROR, SET_MOMENT }
