import styled from 'styled-components';
import * as Common from "../../../styles/common-styles"

export const Img = styled(Common.FullWidthImg)`
    background-image: url(img/home/rynek.jpg);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 500px) {
        & p {
            font-size: 1.2rem;
            line-height: 1.8rem;
        }
    @media (max-width: 360px) {
        & > *:first-child {
            padding: 1.5rem 0.5rem;
        }
        & p {
            font-size: 1rem;
            line-height: 1.6rem;
        }
    `