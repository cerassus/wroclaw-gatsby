import styled from 'styled-components';
import * as Common from "../../../styles/common-styles"

export const ImageContent = styled.div`
    width: 100%;
    position: relative;
    top: 3vw;
    background-color: ${Common.colors.white};
    padding: 3rem;
    `

export const Img = styled(Common.FullWidthImg)`
    background-image: url(img/home/monuments.jpg);
    height: 100vh;
    `
