import styled from 'styled-components';
import * as Common from "../../../styles/common-styles"

export const Row = styled(Common.Flex)`
    width: 100%;
    margin: 15rem 0 0;
    flex-wrap: wrap;
    `

export const Box = styled.div`
    width: 50%;
    background-color: #093858;
    color: #FFF;
    padding: 3rem;
    &:nth-child(2) {
        background-color: #FFF;
        color: #093858;
    }
    & * {
        padding: 2rem;
        letter-spacing: 0.15em;
    }
    `