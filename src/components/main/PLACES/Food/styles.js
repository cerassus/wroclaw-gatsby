import styled from 'styled-components';
import * as Common from "../../../styles/common-styles"

export const Container = styled(Common.FlexC)`
    width: 100%;
    position: relative;
    background-color: #093858;
    color: #FFF;
    padding: 3rem;
    & * {
        width: min(100rem, 100%) ;
    }
    `

export const Img = styled(Common.FullWidthImg)`
    height: 100%;
    background-image: url(img/places/food/food.jpg);
    background-position: 0 -17rem;
    display: flex;
    align-items: flex-end;
    `
export const Content = styled.div`
    margin: 0 auto;
    padding: 4rem 0;
    width: min(100rem, 100%);
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
            background-image: url(img/places/food/whiskey.png);
            `

        export const Ragu = styled.div`
            background-image: url(img/places/food/ragu.png);
            `

        export const Oliwa = styled.div`
            background-image: url(img/places/food/oliwa.jpg);
            `

