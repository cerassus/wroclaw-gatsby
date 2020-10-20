import styled from 'styled-components';
import * as Common from "../../../styles/common-styles"

export const Container = styled(Common.SectionContainer)``

export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: 8rem auto;
    `

export const WrapElement = styled.div`
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: center;
    padding: 5rem 7rem;

    &:nth-child(odd) {
        width: 44%;
        height: 45rem;
    }
    &:nth-child(even) {
        width: 55%;
    }
    &:nth-child(1) {
        background-image: url(img/culture/oldtown.jpg);
    }
    &:nth-child(4) {
        background-image: url(img/culture/museum.png);
    }
    &:nth-child(5) {
        background-image: url(img/culture/hydropolis.jpg);
        background-position-x: right;
    }
    `

    
    export const Title = styled(Common.Title)``

    export const Text = styled.p``

    export const TextTitle = styled(Common.TextTitle)``
