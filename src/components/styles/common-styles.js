import styled from 'styled-components';


export const HeaderContainer = styled.header`
    width: min(120rem, 100%);
    margin: 0 auto;
    font-family: 'Nunito', 'sans-serif';
    padding: 3rem 1rem;
`

export const Section = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    scroll-snap-align: start;
    `

export const Container = styled.div`
    width: min(120rem, 100%);
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
    & * {
        padding: 1rem;
        width: min(80rem, 100%);
        margin: 0 auto;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `
export const ContentRow = styled(Content)`
    display: flex;
    flex-direction: column;
    justify-content: center;
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

export const Title = styled.h1`
    margin: 5rem auto;
    font-weight: normal;
    display: inline-block;
    position: relative;
    &::before {
        content: "";
        position: absolute;
        top: -1.5rem;
        right: 0;
        height: 2px;
        width: 30rem;
        background: linear-gradient(270deg, #093858 0%, rgba(9, 56, 88, 0) 100%);
        border-radius: 25%;
    }
    &::after {
        content: "";
        position: absolute;
        bottom: -1.5rem;
        left: 0;
        height: 2px;
        width: 30rem;
        background: linear-gradient(90deg, #093858 0%, rgba(9, 56, 88, 0) 100%);
        border-radius: 25%;
    }
`

export const TitleBig = styled(Title)`
    &::before, &::after {
        width: 60rem;
    }
    `
    
export const TextTitle = styled.h2`
    font-weight: 600;
    font-size: 2.8rem;
    letter-spacing: 0.05em;
    margin-bottom: 2rem;
    text-align: left;
    `

export const FullWidthImg = styled.div`
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    `