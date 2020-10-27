import styled from 'styled-components';


export const colors = {
    primary: "#093858",
    secondary: "#165986",
    shadow: "rgba(0, 0, 0, 0.75)",
    white: "#FFF",
    black: "#000",
}

export const Flex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    `

export const FlexC = styled(Flex)`
    flex-direction: column;
    `

export const Section = styled.section`
    height: 100vh;
    `
    // display: flex;
    // flex-direction: column;
    // justify-content: space-around;

export const Container = styled.div`
    width: min(120rem, 95%);
    margin: 0 auto;
`
export const SectionContainer = styled(Container)`
    margin: 3rem auto;
    text-align: center;
    `
export const Content = styled.div`
    width: min(90rem, 100%);
    margin: 0 auto;
    background-color: rgba(255, 255, 255, 0.95);
    border-radius: 4px;
    padding: 3rem;
    `
    
export const ContentRow = styled(Content)`
    width: 50%;
    margin: 0;
    background-color: #093858;
    border-radius: 0;
    color: #FFF;
    padding: 3rem 5rem;
    & * {
        width: min(70rem, 100%);
    }
    `
export const TextContent = styled.div`
    width: min(100rem, 100%);
    margin: 0 auto;
    `

export const TextTitle = styled.h2`
    font-weight: 600;
    font-size: 2.8rem;
    letter-spacing: 0.05em;
    margin-bottom: 2rem;
    text-align: left;
    text-transform: capitalize;
    ${props => props.lowercase && "text-transform: lowercase"};
    ${props => props.uppercase && "text-transform: uppercase"};
    ${props => props.center && "text-align: center;"};
    ${props => props.bold && "font-weight: 800" };
    ${props => props.thin && "font-weight: 400" };
    ${props => props.wide && "letter-spacing: 0.15em"};
    `

export const FullWidthImg = styled.div`
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    `

