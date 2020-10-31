import React from "react"
import * as SC from "./styles"
import * as Common from "../../styles/common-styles"

const StatPeople = () => (
  <Common.Section>
    <Common.Content width="120" centered>
      <div>
      <SC.Row>
        <SC.Box>
          <div>OF LEGAL AGE...</div>
          <div>... people</div>
        </SC.Box>
        <SC.Box>
          <div>and IN PRODUCTIVE STATE...</div>
          <div>... people</div>
        </SC.Box>
      </SC.Row>
      <SC.Row>
        <SC.Box>
          <div>ARE RETIRED...</div>
          <div>... people</div>
        </SC.Box>
        <SC.Box>
          <div>and OVER 100 YEARS OLD...</div>
          <div>... people</div>
        </SC.Box>
      </SC.Row>
      <SC.Row>
        <SC.Box>
          <div>NEWBORN...</div>
          <div>... people</div>
        </SC.Box>
        <SC.Box>
          <div>and DIED...</div>
          <div>... people</div>
        </SC.Box>
      </SC.Row>
      </div>
    </Common.Content>
  </Common.Section>
)

export default StatPeople
