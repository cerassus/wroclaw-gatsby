import styled from 'styled-components';
import * as Common from "../../../styles/common-styles"

export const Content = styled(Common.Content)`
    position: relative;
    height: 100vh;
    border-radius: 0;
    width: 60rem;
    margin: 0 3vw 0 auto;
    & * {
        width: min(55rem, 100%);
    }
    `

export const Img = styled(Common.FullWidthImg)`
    background-image: url(img/home/cathedral.jpg);
    `