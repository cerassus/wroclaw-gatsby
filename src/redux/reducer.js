import { combineReducers } from "redux"
import { SET_WEATHER, SET_WEATHER_ERROR, SET_MOMENT } from "./actions"


const weather_reducer = (state = "", action) => {
  if(action.type === SET_WEATHER) {
      return [action.temp, action.weather]
   } else if(action.type === SET_WEATHER_ERROR) {
    return action.error
  } else return state;
}

const moment_reducer = (state = "", action) => 
    action.type === SET_MOMENT ? action.string : state;
  

export default combineReducers({
  weather_reducer,
  moment_reducer
})