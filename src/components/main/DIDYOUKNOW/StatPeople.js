import React from "react"
import * as SC from "./styles"
import * as Common from "../../styles/common-styles"

const StatPeople = ({ stat, decade }) => {
  const legal = stat
    .map(x => x.AGE > 17 && x.NUMBERofRESIDENTS)
    .reduce((x, y) => x + y)
  const productive = stat
    .filter(x => (x.AGE > 17 && x.AGE < 65) && x)
    .filter(x => !(x.AGE > 59 && x.SEX === "Woman") && x)
    .map(x => x.NUMBERofRESIDENTS)
    .reduce((x, y) => x + y)
  const hundred = stat
    .map(x => x.AGE > 99 && x.NUMBERofRESIDENTS)
    .reduce((x, y) => x + y)
  const retired = legal - productive
    // stat
    // .filter(x => (x.AGE > 59) && x)
    // .filter(x => !(x.SEX === "Man" && x.AGE < 65) && x)
    // .map(x => x.NUMBERofRESIDENTS)
    // .reduce((x, y) => x + y)
    // .toLocaleString()
  const newborn = stat
    .map(x => x.AGE === 0 && x.NUMBERofRESIDENTS)
    .reduce((x, y) => x + y)
  const dead = 6892  // based on gus data
  return (
    <Common.Section>
      <Common.Content width="120" centered>
        <div>
          <SC.Row>
            <SC.Box>
              <div>OF LEGAL AGE...</div>
              <div>{legal.toLocaleString()} people</div>
            </SC.Box>
            <SC.Box>
              <div>and IN PRODUCTIVE STATE...</div>
              <div>{productive.toLocaleString()} people</div>
            </SC.Box>
          </SC.Row>
          <SC.Row>
            <SC.Box>
              <div>ARE RETIRED...</div>
              <div>{retired.toLocaleString()} people</div>
            </SC.Box>
            <SC.Box>
              <div>and OVER 100 YEARS OLD...</div>
              <div>{hundred.toLocaleString()} people</div>
            </SC.Box>
          </SC.Row>
          <SC.Row>
            <SC.Box>
              <div>NEWBORN...</div>
              <div>{newborn.toLocaleString()} people</div>
            </SC.Box>
            <SC.Box>
              <div>and DIED...</div>
              <div>{dead.toLocaleString()} people</div>
            </SC.Box>
          </SC.Row>
        </div>
      </Common.Content>
    </Common.Section>
  )
}

export default StatPeople
