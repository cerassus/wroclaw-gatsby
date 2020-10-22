import styled from 'styled-components';
import * as Common from "../../../styles/common-styles"

export const Container = styled(Common.FlexC)`
    width: 100%;
    background-image: linear-gradient(to right bottom, rgba(22, 89, 134, 0.6), rgba(22, 89, 134, 0.6)), url(img/culture/bridge.jpg);
    background-size: cover;
    background-position: top;
    height: 100vh;
    `
    

export const Content = styled(Common.Flex)`
    background-color: #FFF;
    width: min(100rem, 100%);
    box-shadow: 0 0 5px #000;
    border-radius: 5px;
    `
    export const Card = styled(Common.FlexC)`
        width: 33%;
        padding: 4rem;
        &:first-child img {
            object-position: 0 27px;
        }
        `
    export const CardIcon = styled.img`
        height: 15rem;
        `
    export const CardTitle = styled.h3`
        text-transform: uppercase;
        letter-spacing: 0.25em;
        font-weight: 600;
        margin: 4rem 0;
        `
    export const CardText = styled.p``

