import React from "react"
import * as SC from "./styles"

const Footer = () => (
  <SC.Footer>
    <div>
      <div>
        <SC.HeaderTitle>WROSTAT</SC.HeaderTitle>
        <SC.HeaderSubtitle>a stat about Wro</SC.HeaderSubtitle>
      </div>
      <div>
        <div>
          <div>
            &copy; {new Date().getFullYear()} Michał Wiśniewski. All rights
            reserved. Website has been created for my Portfolio. Technologies:
          </div>
          <div>
            <a href="https://www.gatsbyjs.com">Gatsby</a>,{" "}
            <a href="https://redux.js.org/">Redux</a>,{" "}
            <a href="https://styled-components.com/">Styled Components</a>,{" "}
            <a href="https://momentjs.com/">Moment</a>,{" "}
            <a href="https://www.chartjs.org/">Charts</a>,{" "}
          </div>
          <div>
            All text included on this webpage come from{" "}
            <a href="https://visitwroclaw.eu/" target="__blank">
              Visit Wrocław
            </a>
            &nbsp;and{" "}
            <a
              href="https://en.wikipedia.org/wiki/Wroc%C5%82aw"
              target="__blank"
            >
              Wikipedia
            </a>
          </div>
        </div>
      </div>
    </div>
  </SC.Footer>
)

export default Footer
