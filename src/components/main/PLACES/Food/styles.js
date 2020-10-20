import styled from 'styled-components';
import * as Common from "../../../styles/common-styles"

export const Container = styled(Common.SectionContainer)`
    width: min(80rem, 100%);`

    export const Title = styled(Common.Title)``

    export const TextTitle = styled(Common.TextTitle)`
        margin: 5rem auto;
        text-align: center;
        `

    export const Text = styled.p`
        padding: 2rem;
        `

    export const Img = styled(Common.FullWidthImg)`
        height: 33vw;
        background-image: url(img/fullwidth/food.jpg);
        background-position-y: 35%;
        min-height: 25rem;
        `

    export const Restaurants = styled.div`
        display: flex;
        justify-content: space-around;
        margin: 8rem auto;
        & > * {
            width: 20rem;
            height: 20rem;
            background-size: contain;
            background-repeat: no-repeat;
            border-radius: 50%;
            box-shadow: 0 5px 5px #000;
            transition: all .2s;
            & > * {
                position: absolute;
                visibility: hidden;
                opacity: 0;
            };
            &:hover {
                box-shadow: 0 15px 15px #000;
                transform: translateY(-2rem);
            } 
            &:hover * {
                visibility: visible;
                opacity: 1;
            } 
        }
        `

        export const Whisky = styled.div`
            background-image: url(img/food/whiskey.png);
            `

        export const Ragu = styled.div`
            background-image: url(img/food/ragu.png);
            `

        export const Oliwa = styled.div`
            background-image: url(img/food/oliwa.jpg);
            `

