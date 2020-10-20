import styled from 'styled-components';
import * as Common from "../../../styles/common-styles"

export const Container = styled.div`
    width: 100%;
    text-align: center;
    `
    export const Title = styled(Common.Title)`
        margin: 8rem auto;
        `

    export const Desc = styled.div`
        padding: 7rem 7%;
        &:nth-of-type(4) {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
        }
        `    
        export const TextTitle = styled(Common.TextTitle)``

        export const Text = styled.p`
            width: min(70rem, 100%);
            `

    export const Img = styled(Common.FullWidthImg)`
        height: 25vw;
        min-height: 20rem;
        &:nth-of-type(1) {
            background-image: url(img/fullwidth/panorama.jpg);
        }
        &:nth-of-type(3) {
            background-image: url(img/fullwidth/zoo.jpg);
            background-position: right;
        }
        &:nth-of-type(5) {
            background-image: url(img/fullwidth/hala.jpg);
            background-position-y: 60%;
        }
        `