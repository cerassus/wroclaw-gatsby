import styled from "styled-components"
import React from "react"

export const colors = {
  primary: "#093858",
  secondary: "#165986",
  shadow: "rgba(0, 0, 0, 0.75)",
  white: "#FFF",
  black: "#000",
  transparent: "rgba(255, 255, 255, 0.95)",
}

export const Section = styled.section`
  position: relative;
  height: 100vh;
  ${props =>
    props.cell &&
    `& > * {
      display: table-cell;
      vertical-align: middle;
    }`};
  ${props =>
    props.flex &&
    `
      display: flex;
      flex-direction: ${props.flex};
      `};
`

export const Content = styled.div`
  ${props => props.width && `width: min(${props.width}rem, 95%)`};
  ${props =>
    props.cell &&
    `& > * {
      display: table-cell;
      vertical-align: middle;
    }`};
  position: relative;
  ${props => props.white && `color: white`};
  margin: ${props => props.nomargin ? `0` : props.margin ? props.margin : `0 auto`};
  padding: ${props => (props.nopadding ? `0` : props.padding ? props.padding : `4vw`)};
  ${props => props.shadow && `box-shadow: 0 0 5px ${colors.shadow}`};
  ${props =>
    props.transparent &&
    `
        background-color: ${colors.transparent}
    `};
  ${props =>
    props.centered &&
    `
        top: 50vh;
        left: 50vw;
        transform: translate(-50vw,-50%);
        position: relative;
        border-radius: 4px;
        `};
  ${props =>
    props.blue &&
    `
        background-color: ${colors.primary};
        color: ${colors.white};
        `};
  ${props =>
    props.row &&
    `
        width: ${props.row}%;
        padding: 3vw 5vw;
        `};
  ${props =>
    props.nunito &&
    `
        font-family: "Nunito", "sans-serif";
        `};
`

export const TextTitle = styled.h2`
  font-weight: 600;
  font-size: clamp(1.2rem, 0.5143rem + 3.3247vw, 2.8rem);
  letter-spacing: 0.05em;
  text-align: left;
  text-transform: capitalize;
  ${props => props.lowercase && "text-transform: lowercase"};
  ${props => props.uppercase && "text-transform: uppercase"};
  ${props => props.center && "text-align: center;"};
  ${props => props.bold && "font-weight: 800"};
  ${props => props.thin && "font-weight: 400"};
  ${props => props.wide && "letter-spacing: 0.15em"};
  ${props => props.padding && `padding: ${props.padding}`};
  ${props => props.shadow && `text-shadow: 0 0 5px ${colors.shadow}`};
  margin-bottom: ${props => (props.nomargin ? `0` : `2vh`)};
`
export const TextBig = styled.div`
  font-size: clamp(1.2rem, 0.5143rem + 1.3247vw, 2.5rem);
  text-transform: uppercase;
  text-shadow: 0 0 5px ${colors.shadow};
  margin-bottom: 3vw;
  ${props => props.bold && "font-weight: 600"};
`

export const BackgroundImg = styled.div`
  background-size: cover;
  background-position: ${props => (props.pos ? props.pos : `center`)};
  background-repeat: no-repeat;
  width: ${props => (props.width ? props.width : `100%`)};
  height: ${props => (props.height ? props.height : `100vh`)};
  ${props =>
    props.src &&
    (props.gradient
      ? `background-image: linear-gradient(to right bottom, rgba(22, 89, 134, 0.6), rgba(22, 89, 134, 0.6)), url(${props.src})`
      : `background-image: url(${props.src})`)};
  ${props =>
    props.absoluteSibling &&
    `
      @media (max-width: 600px) {
        height: 66vh;
        transform: translateY(34vh);
      }
    `};
  ${props =>
    props.flex &&
    `
    display: flex;
    flex-direction: ${props.flex};
    `};
`

export const Flex = styled.div`
  display: flex;
  ${props => props.reverse && `flex-direction: row-reverse`};
  width: 100%;
  height: 100%;
  @media (max-width: 750px) {
    flex-direction: ${props => (props.reverse ? `column-reverse` : `column`)};
    & > * {
      width: 100%;
      &:last-child > * {
        top: 25vh;
        transform: translate(-50vw, -25vh);
      }
    }
  }
`

export const ContentChart = styled.div`
  position: absolute;
  top: 19vh;
  right: 0%;
  width: 45rem;
  height: 30rem;
  background-color: ${colors.primary};
  z-index: 0;
  box-shadow: 0 0 5px ${colors.shadow};
  @media (max-width: 500px) {
    width: 100%;
    height: 0;
    padding-bottom: 66%;
  }
`

export const StyledSpinner = styled.div`
  display: inline-block;
  position: relative;
  width: 2.4rem;
  height: 2.4rem;
  transform: ${props =>
    props.desktop ? `translateX(${props.desktop})` : `translateX(0%)`};
  @media (max-width: 600px) {
    transform: ${props =>
      props.mobile ? `translateX(${props.mobile})` : `translateX(0%)`};
  }
  & div {
    position: absolute;
    top: 10px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: ${colors.primary};
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  & div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  & div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  & div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  & div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }
`

export const Spinner = ({ desktop, mobile }) => (
  <StyledSpinner desktop={desktop} mobile={mobile}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </StyledSpinner>
)
