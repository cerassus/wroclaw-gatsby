import styled from 'styled-components';
import * as Common from "../../../styles/common-styles"

export const ContentBox = styled.div`
    box-shadow: 0 0 5px #000;
    border-radius: 5px;
    width: min(90rem, 100%);
    padding: 3rem 5rem;
    & > *:last-child  {
        padding: 3rem;
        & > *:first-child {
            margin-bottom: 2rem;
        }
        @media (max-width: 900px) {
            margin-top: 28rem;
          }
    }
    `
export const ContentChart = styled.div`
    position: absolute;
    bottom: 0;
    right: 50%;
    width: 50rem;
    height: 250%;
    transform: translate(100%, 100%);
    background-color: #093858;
    z-index: 0;
    box-shadow: 0 0 5px #000;
    `

export const StatTitle = styled.h2`
    text-transform: uppercase;
    font-size: 2.5rem;
    font-weight: 400;
    letter-spacing: 0.15em;
    text-align: left;
    padding: 3rem;
    `

export const ContentBar = styled.div`
    width: 200vw;
    background-color: #093858;
    color: #FFF;
    transform: translateX(-50%);
    left: 67%;
    position: relative;
    padding: 3rem;
    margin: 3rem 0;
    box-shadow: 0 1px 1rem #000;
    position: relative;
    & *:first-child {
        text-align: center;
    }

    `

export const StatResult = styled(Common.TextTitle)`
    margin: 0;
    text-transform: lowercase;
    letter-spacing: 0.15em;
    `