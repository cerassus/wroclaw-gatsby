import React from "react"
import styled from "styled-components"
import * as Common from "../styles/common-styles"

const Footer = () => (
  <FooterContainer>
    <div>
      <div>
        <HeaderTitle>WROSTAT</HeaderTitle>
        <HeaderSubtitle>a stat about Wro</HeaderSubtitle>
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
  </FooterContainer>
)

const FooterContainer = styled.footer`
  width: 100%;
  font-family: "Nunito", "sans-serif";
  padding: 3rem 0;
  position: relative;
  text-align: left;
  background-color: ${Common.colors.primary};
  color: ${Common.colors.white};
  & > * {
    width: 80%;
    margin: 0 auto;

    & > *:nth-child(1) {
      margin: 0 auto;
    }
    & > *:nth-child(2) {
      background-color: ${Common.colors.white};
      color: ${Common.colors.primary};
      margin: 5rem auto 0;
      text-align: center;
      padding: 0.5rem;
      border-radius: 4px;
    }
  }
  & a:link, a:visited {
    text-decoration: none;
    color: ${Common.colors.primary};
    font-weight: 800;
  }
  & a:hover, a:active {
    text-decoration: underline;
  }
`

const HeaderTitle = styled.h1`
  font-weight: 700;
  font-size: 4.8rem;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  @media (max-width: 400px) {
    font-size: 4rem;  
  }
`

const HeaderSubtitle = styled.h2`
  font-weight: normal;
  font-size: 2rem;
  padding-left: 0.5rem;
  position: absolute;
  transform: translate(12rem, -1rem);
  letter-spacing: 0.12em;
  @media (max-width: 400px) {
    transform: translate(0,0);  
  }
`

export default Footer
