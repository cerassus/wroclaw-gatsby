import styled from 'styled-components';
import * as Common from "../../../styles/common-styles"

export const Row = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 6vw 0;
    font-size: clamp(1.4rem, 1.2000rem + 1.0667vw, 2rem);
    &:nth-of-type(even) {
        flex-direction: row-reverse;
        @media (max-width: 750px) {
            flex-direction: column-reverse;
            & * {
                width: 95%;
            }
        }
        & > *:first-child::before {
            content: "";
            position: absolute;
            left: -10%;
            top: 50%;
            width: 5%;
            height: 50%;
            background-color: #093858;
            transform: translate(100%, -50%) rotate(180deg);
            clip-path: polygon(0 0, 100% 50%, 0 100%);
        }
    }
    &:nth-of-type(odd) {
        @media (max-width: 750px) {
            flex-direction: column;
            & > * {
                width: 95%;
            }
        }
        & > *:first-child::before {
        content: "";
        position: absolute;
        right: 0px;
        top: 50%;
        width: 5%;
        height: 50%;
        background-color: #093858;
        transform: translate(100%, -50%);
        box-sizing: border-box;
        background-clip: content-box;
        clip-path: polygon(0 0, 100% 50%, 0 100%);
    }
    `

export const Box = styled.div`
    width: 45%;
    background-color: #093858;
    color: #FFF;
    border-radius: 3px;
    border: 2px solid #093858;
    position: relative;
    &:nth-child(2) {
        background-color: #FFF;
        color: #093858;
    }
    & *:nth-child(2) {
        font-weight: 700;
    }
    & * {
        padding: 1.5vh;
        letter-spacing: 0.15em;
    }
    `
