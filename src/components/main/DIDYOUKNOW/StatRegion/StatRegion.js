import React from "react"
import * as SC from "./styles"
import * as Common from "../../../styles/common-styles"

const StatRegion = () => (
  <Common.Section>
    <Common.Container>
      <Common.TextTitle center>THE MOST COMMON AGE IS...</Common.TextTitle>
      <Common.TextTitle center bold>42</Common.TextTitle>
      <Common.TextTitle center lowercase>...and this age is incresing year to year</Common.TextTitle>
      <SC.Row>
        <SC.Box>
          <div>TOP 5 REGIONS where the population has increased</div>
          <div>... people</div>
        </SC.Box>
        <SC.Box>
          <div>TOP 5 REGIONS where the population has decreased</div>
          <div>... people</div>
        </SC.Box>
      </SC.Row>
    </Common.Container>
  </Common.Section>
)

export default StatRegion
