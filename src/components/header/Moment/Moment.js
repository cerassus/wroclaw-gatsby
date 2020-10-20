import React from "react"
import * as SC from "./styles"

const Moment = () => (
  <SC.Container>
    <SC.Side>
      <SC.Label>actual weather</SC.Label>
      <SC.Value>18 degrees</SC.Value>
    </SC.Side>
    <SC.Side>
      <SC.Label>actual date and time in Wrocław</SC.Label>
      <SC.Value>20 October 2020</SC.Value>
    </SC.Side>
  </SC.Container>
)

export default Moment
