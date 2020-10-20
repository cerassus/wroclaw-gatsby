import styled from 'styled-components';
import * as Common from "../styles/common-styles"

export const Footer = styled.footer`
    width: 100%;
    font-family: 'Nunito', 'sans-serif';
    padding: 3rem 0;
    position: relative;
    text-align: left;
    background-color: #093858;
    color: #FFF;
    & > * {
        width: 70%;
        margin: 0 auto;

        & > *:nth-child(1) {
            width: 60%;
            margin: 0 auto;
        }
        & > *:nth-child(2) {
            background-color: #FFF;
            color: #093858;
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

            `

        export const HeaderSubtitle = styled.h2`
            font-weight: normal;
            font-size: 2rem;
            padding-left: 0.5rem;
            position: absolute;
            transform: translate(12rem, -1rem);
            letter-spacing: 0.12em;

            `
    
    
    

