import styled from 'styled-components';
import * as Common from "../../../styles/common-styles"

export const Container = styled.div`
    width: 100%;
    background-image: linear-gradient(to right bottom, rgba(22, 89, 134, 0.6), rgba(22, 89, 134, 0.6)), url(img/fullwidth/bridge.jpg);
    background-size: cover;
    background-position: top;
    height: 100vh;
    text-align: center;
    `
    
export const Title = styled(Common.TitleBig)`
    color: #FFF;
    margin: 5rem auto;
    &::before {
        background: linear-gradient(270deg, #FFF 0%, rgba(9, 56, 88, 0) 100%);
    };
    &::after {
        background: linear-gradient(90deg, #FFF 0%, rgba(9, 56, 88, 0) 100%);
    }
    `

export const Content = styled(Common.Container)`
    margin: 6rem auto;
    background-color: #FFF;
    height: 60rem;
    width: min(100rem, 100%);
    box-shadow: 0 0 5px #000;
    border-radius: 5px;
    `

