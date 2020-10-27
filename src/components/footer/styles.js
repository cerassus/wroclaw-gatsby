import styled from "styled-components"
import * as Common from "../styles/common-styles"

export const Footer = styled.footer`
  width: 100%;
  font-family: "Nunito", "sans-serif";
  padding: 3rem 0;
  position: relative;
  text-align: left;
  background-color: ${Common.colors.primary};
  color: ${Common.colors.white};
  & > * {
    width: 70%;
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
`

export const HeaderTitle = styled.h1`
  font-weight: 700;
  font-size: 4.8rem;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  @media (max-width: 400px) {
    font-size: 4rem;  
  }
`

export const HeaderSubtitle = styled.h2`
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
