import React from "react"
import moment from "moment-timezone"
import { Spinner } from "../styles/common-styles"

class DateAndTime extends React.Component {
  constructor(props) {
    super(props)
    this.gimmieMoment = ""
    this.state = {
      moment: <Spinner desktop="-200%" mobile="-100%" />,
    }
  }
  componentDidMount() {
    this.gimmieMoment = setInterval(() => {
      this.setState({
        moment: moment().tz("Europe/Warsaw").format("DD MMMM YYYY - HH:mm:ss"),
      })
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.gimmieMoment)
  }
  render() {
    return this.state.moment 
  }
}

export default DateAndTime;