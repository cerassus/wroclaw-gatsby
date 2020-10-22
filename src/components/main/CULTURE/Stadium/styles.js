import styled from 'styled-components';
import * as Common from "../../../styles/common-styles"

export const Img = styled(Common.FullWidthImg)`
    background-image: url(img/culture/stadium_in.jpg);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `

export const ImgInside = styled.img`
    width: 100%;
    padding: 0 3rem;
    margin: 2rem 0;
    height: 25rem;
    object-fit: cover;
    object-position: 0 60%;
    `
