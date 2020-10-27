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
  height: 100vh;
  ${props => props.row &&
    `
        display: flex;
        flex-direction: row;

        @media (max-width: 600px) {
            flex-direction: column;
        }
        `}
`

export const Content = styled.div`
  width: min(${props => (props.width ? `${props.width}rem` : "90rem")}, 100%);
  margin: ${props => (props.nomargin ? `0` : `0 auto`)};
  padding: ${props => (props.nopadding ? `0` : `3rem`)};
  padding: ${props => (props.padding && props.padding)};
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
        padding: 3rem 5rem;
        @media (max-width: 600px) {
            width: 100%;
            height: ${props.row}vh;
            & > *:first-child {
                top: calc(0.5 * ${props.row}vh);
            }
        }
        `};
  ${props => props.nunito &&
    `
        font-family: "Nunito", "sans-serif";
        `};
  @media (max-width: 600px) {
      padding: 1rem;
  }
`

export const TextTitle = styled.h2`
  font-weight: 600;
  font-size: 2.8rem;
  letter-spacing: 0.05em;
  margin-bottom: 3vw;
  text-align: left;
  text-transform: capitalize;
  ${props => props.lowercase && "text-transform: lowercase"};
  ${props => props.uppercase && "text-transform: uppercase"};
  ${props => props.center && "text-align: center;"};
  ${props => props.bold && "font-weight: 800"};
  ${props => props.thin && "font-weight: 400"};
  ${props => props.wide && "letter-spacing: 0.15em"};
`

export const BackgroundImg = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  ${props => props.src && `background-image: url(${props.src})`};
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

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FlexC = styled(Flex)`
  flex-direction: column;
`
