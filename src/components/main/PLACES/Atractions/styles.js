import styled from 'styled-components';
import * as Common from "../../../styles/common-styles"

export const Container = styled.div`
    width: 100%;
    text-align: center;
    `
    export const Title = styled.div`
        margin: 8rem auto;
        `

    export const Desc = styled.div`
        padding: 7rem 7%;
        `
    export const Desc2 = styled(Common.FlexC)`
        padding: 7rem 7%;
        align-items: flex-end;
        }
        `   

        export const Text = styled.p`
            width: min(70rem, 100%);
            `

    export const Img1 = styled(Common.FullWidthImg)`
            height: 45rem;
            background-image: url(img/places/panorama.jpg);
            `

    export const Img2 = styled(Common.FullWidthImg)`
            height: 45rem;
            background-image: url(img/places/zoo.jpg);
            background-position: right;
            `

    export const Img3 = styled(Common.FullWidthImg)`
            height: 45rem;
            background-image: url(img/places/hala.jpg);
            background-position-y: 60%;
            `