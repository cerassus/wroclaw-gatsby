import React from "react"
import * as SC from "./styles"
import * as Common from "../../../styles/common-styles"


const StatMain = () => (
  <Common.Section>
    <Common.Container>
      <SC.ContentBox>
        <SC.StatTitle>At the end of 2019 in wrocław lives...</SC.StatTitle>
        <SC.ContentBar>
          <SC.StatResult>599 158 <span>&nbsp;&nbsp;people</span></SC.StatResult>
          <SC.ContentChart></SC.ContentChart>
        </SC.ContentBar>
        <div>
          <SC.StatResult>322 145 <span>&nbsp;&nbsp;men</span></SC.StatResult>
          <SC.StatResult>274 515 <span>&nbsp;&nbsp;women</span></SC.StatResult>
        </div>
        </SC.ContentBox>
    </Common.Container>
  </Common.Section>
)

export default StatMain
