import React from "react"
import { Spinner } from "../styles/common-styles"

const DateAndTime = ({ moment, fetchMoment }) => {
  !moment && fetchMoment()
  return moment ? moment : <Spinner desktop="-200%" mobile="-100%" />
}

export default DateAndTime
