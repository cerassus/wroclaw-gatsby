import React from "react"
import { Spinner } from "../styles/common-styles"

const Weather = () => {
  const [weather, setWeather] = React.useState("");
  async function fetchWeather() {
      const shot = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Wroclaw&appid=074a49e2ca39f7ea0ec283efbda4aedf');
      if(!shot.ok) {
        setWeather("No data");
      } else {
        const response = await shot.json();
        setWeather(response);
      }
    }
  fetchWeather();
  return (
    (weather && weather !== "No data") ? Math.floor(weather.main.temp)-273 + "\xB0 " + weather.weather[0].main : <Spinner desktop="-35%" mobile="-100%" />
  )
}

export default Weather;