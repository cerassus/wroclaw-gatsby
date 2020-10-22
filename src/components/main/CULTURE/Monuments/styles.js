import styled from 'styled-components';
import * as Common from "../../../styles/common-styles"

export const Container = styled.section`
    width: min(120rem, 100%);
    margin: 0 auto;
    `

export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: 8rem auto;
    padding: 3rem 0;
    `

export const WrapElement = styled.div`
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: center;
    padding: 5rem 6rem;

    &:nth-child(odd) {
        width: 45%;
        height: 40rem;
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
    `




    // &:nth-child(5) {
    //     background-image: url(img/culture/hydropolis.jpg);
    //     background-position-x: right;
    // }