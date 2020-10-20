import React from "react"
import * as SC from "./styles"

const Header = () => (
  <SC.Footer>
    <div>
      <div>
        <SC.HeaderTitle>WROSTAT</SC.HeaderTitle>
        <SC.HeaderSubtitle>a stat about Wro</SC.HeaderSubtitle>
      </div>
      <div>
        © {new Date().getFullYear()} Michał Wiśniewski. All rights reserved.
        Website has been created for my Portfolio. Technologies:{" "}
        <a href="https://www.gatsbyjs.com">Gatsby</a>, Styled Components,
        Moment, Charts
      </div>
    </div>
  </SC.Footer>
)

export default Header
