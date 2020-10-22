import styled from 'styled-components';
import * as Common from "../../../styles/common-styles"

export const Section = styled(Common.Section)`
    display: flex;
    flex-direction: row-reverse;
    `
export const ContentRow = styled(Common.ContentRow)`
    width: 60%;
    color: #093858;
    background-color: #FFF;
    & * {
        width: min(90rem, 100%);
    }
    `

export const Img = styled(Common.FullWidthImg)`
    width: 40%;
    background-position: center;
    background-image: url(img/places/denominations.jpg);
    `

