import styled from "styled-components"

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
  ${props => props.cell && 
    `& > * {
      display: table-cell;
      vertical-align: middle;
    }`};
  `

export const Content = styled.div`
  ${props => (props.width && `width: min(${props.width}rem, 100%)`)};
  ${props => props.cell && 
    `& > * {
      display: table-cell;
      vertical-align: middle;
    }`};
  position: relative;
  margin: ${props => (props.nomargin ? `0` : `0 auto`)};
  padding: ${props => (props.nopadding ? `0` : `4vw`)};
  padding: ${props => (props.padding && props.padding)};
  ${props => props.shadow && `box-shadow: 0 0 5px ${colors.shadow}`};
  ${props => props.transparent &&
    `
        background-color: ${colors.transparent}
    `};
  ${props => props.centered &&
    `
        top: 50vh;
        left: 50vw;
        transform: translate(-50vw,-50%);
        position: relative;
        border-radius: 4px;
        `};
  ${props => props.blue &&
    `
        background-color: ${colors.primary};
        color: ${colors.white};
        `};
  ${props => props.row &&
    `
        width: ${props.row}%;
        padding: 3vw 5vw;
        `};
  ${props => props.nunito &&
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
  margin-bottom: ${props => props.nomargin ? `0` : `2vh`};
`

export const BackgroundImg = styled.div`
  background-size: cover;
  background-position: ${props => props.pos ? props.pos : `center`};
  background-repeat: no-repeat;
  width: ${props => props.width ? props.width : `100%`};
  height: ${props => props.height ? props.height : `100vh`};
  ${props => props.src && (
      props.gradient ? 
      `background-image: linear-gradient(to right bottom, rgba(22, 89, 134, 0.6), rgba(22, 89, 134, 0.6)), url(${props.src})` : 
      `background-image: url(${props.src})`
      )};  
  ${props => props.absoluteSibling && `
      @media (max-width: 600px) {
        height: 66vh;
        transform: translateY(34vh);
      }
    `}  
  `

export const Flex = styled.div`
  display: flex;
  ${props => props.reverse && `flex-direction: row-reverse`};
  width: 100%;
  height: 100%;
  @media (max-width: 750px) {
    flex-direction: ${props => props.reverse ? `column-reverse` : `column`};
    & > * {
      width: 100%;
      height: 100%;
      &:last-child > * {
        top: 25vh;
        transform: translate(-50vw,-25vh);
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











export const FullWidthImg = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
`
export const ContentRow = styled(Content)`
  width: 100%;
  margin: 0;
  padding: 3rem 5rem;
  & * {
    width: min(70rem, 100%);
    margin: 0 auto;
  }
  @media (max-width: 1200px) {
    padding: 3rem;
  }
  @media (max-width: 700px) {
    height: 70vh;
  }
`

export const TextContent = styled.div`
  width: min(100rem, 100%);
  margin: 0 auto;
`

export const TextContentRow = styled.div`
  top: 50vh;
  left: 50vw;
  transform: translate(-50vw, -50%);
  position: relative;
  @media (max-width: 700px) {
    top: 30vh;
  }
`

export const SectionRow = styled(Section)`
    display: flex;
    flex-direction: row;
    @media (max-width: 700px) {
        flex-direction: column;
    `

export const Container = styled.div`
  width: min(120rem, 95%);
  margin: 0 auto;
`
export const SectionContainer = styled(Container)`
  margin: 3rem auto;
  text-align: center;
`
export const FlexC = styled.div`
  display: flex;`