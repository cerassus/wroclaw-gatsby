import React from "react"
import { Spinner } from "../styles/common-styles"
import { nodata } from "../../redux/actions"

const Weather = ({weather, fetchWeather}) => {
  !weather && fetchWeather()
  return (
    <>
    {weather === "" && <Spinner desktop="-35%" mobile="-100%" />}
    {(weather && weather !== nodata) && Math.floor(weather[0])-273 + "\xB0 " + weather[1]}
    {weather === nodata && nodata}
    </>
  )
}

export default Weather;