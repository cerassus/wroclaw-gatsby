import styled from 'styled-components';
import * as Common from "../../../styles/common-styles"

export const Container = styled(Common.Container)`
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        & * {
            color: #FFF;
            text-shadow: 0 0 5px #000;
            &:first-child {
                margin-bottom: 5rem;
            }
            &:not(:first-child) {
                transform: scaleY(0.9);
                line-height: 5rem;
                font-size: 2rem;
            }
        }
        `

export const Img = styled.div`
        width: 100%;
        background-image: linear-gradient(to right bottom,rgba(22,89,134,0.6),rgba(22,89,134,0.6)),url(img/didyouknow/cementary.jpg);
        background-size: cover;
        background-position: top;
        height: 100vh;
    `