import React from "react"
import * as Common from "../../styles/common-styles"

const StatPeople = ({ stat }) => {
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
          <Common.Row>
            <Common.Box>
              <div>OF LEGAL AGE...</div>
              <div>{legal.toLocaleString()} people</div>
            </Common.Box>
            <Common.Box>
              <div>and IN PRODUCTIVE STATE...</div>
              <div>{productive.toLocaleString()} people</div>
            </Common.Box>
          </Common.Row>
          <Common.Row>
            <Common.Box>
              <div>ARE RETIRED...</div>
              <div>{retired.toLocaleString()} people</div>
            </Common.Box>
            <Common.Box>
              <div>and OVER 100 YEARS OLD...</div>
              <div>{hundred.toLocaleString()} people</div>
            </Common.Box>
          </Common.Row>
          <Common.Row>
            <Common.Box>
              <div>NEWBORN...</div>
              <div>{newborn.toLocaleString()} people</div>
            </Common.Box>
            <Common.Box>
              <div>and DIED...</div>
              <div>{dead.toLocaleString()} people</div>
            </Common.Box>
          </Common.Row>
        </div>
      </Common.Content>
    </Common.Section>
  )
}

export default StatPeople
