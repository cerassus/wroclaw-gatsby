import styled from 'styled-components';
import * as Common from "../../../styles/common-styles"

export const Content = styled(Common.Content)`
    width: 100%;
    position: relative;
    top: 3vw;
    & * {
        width: min(100rem, 100%) ;
    }
    `

export const Img = styled(Common.FullWidthImg)`
    background-image: url(img/home/monuments.jpg);
    height: calc(49vw + 10px);
    `
