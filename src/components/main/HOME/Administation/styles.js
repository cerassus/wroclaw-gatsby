import styled from 'styled-components';

export const Map = styled.div`
    transition: all .2s;
    transform: rotateX(33deg);
    @media (max-width: 850px) {
        transform: rotateX(33deg) scale(0.8);
    }
    @media (max-width: 650px) {
        transform: rotateX(33deg) scale(0.6);
    }
    @media (max-width: 500px) {
        transform: rotateX(33deg) scale(0.4);
    }
    `

export const MapContainer = styled.div`
    width: 1px;
    height: 1px;
    display: inline-block;
    position: relative;
    background-color: black;
    margin: 25rem 0;
    
    & * {
        background-repeat: no-repeat;
        background-size: contain;
        position: absolute;
        transition: all 0.3s;
    }
    `
    export const PsiePole = styled.div`
        bottom: -20rem;
        left: -13rem;
        width: 504px;
        height: 397px;
        background-image: url(data/psiepole.png); visibility: hidden;
    `
    export const PsiePoleSibling = styled(PsiePole)`
        z-index: 1000; 
        visibility: visible!important;
        &:hover {
            filter: drop-shadow(0 25px 5px #000) brightness(0.5);
            transform: translateY(-3%);
        }
    `
    export const Fabryczna = styled.div`    
        bottom: -10.5%;
        left: -43%;
        width: 404px;
        height: 439px;
        background-image: url(data/fabryczna.png); visibility: hidden;
    `

    export const FabrycznaSibling = styled(Fabryczna)`  
        z-index: 1000; visibility: visible!important;
        &:hover {
            filter: drop-shadow(0 25px 5px #000) brightness(0.5);
            transform: translateY(-3%);
        }
    `

    export const Srodmiescie = styled.div`
        bottom: 22%;
        left: 92%;
        width: 107px;
        height: 97px;
        background-image: url(data/srodmiescie.png); visibility: hidden;
    `

    export const SrodmiescieSibling = styled(Srodmiescie)`
        z-index: 1000; visibility: visible!important;
        &:hover {
            filter: drop-shadow(0 25px 5px #000) brightness(0.5);
            transform: translateY(-3%);
        }
    `

    export const StareMiasto = styled.div`
        bottom: -18%;
        left: 39%;
        width: 211px;
        height: 114px;
        background-image: url(data/staremiasto.png); visibility: hidden;
    `

    export const StareMiastoSibling = styled(StareMiasto)`
        z-index: 1000; visibility: visible!important;
        &:hover {
            filter: drop-shadow(0 25px 5px #000) brightness(0.5);
            transform: translateY(-3%);
        }
    `
    export const Krzyki = styled.div`
        bottom: -138%;
        left: -57%;
        width: 369px;
        height: 206px;
        background-image: url(data/krzyki.png); visibility: hidden;
    `

    export const KrzykiSibling = styled(Krzyki)`
        z-index: 1000; visibility: visible!important;
        &:hover {
            filter: drop-shadow(0 25px 5px #000) brightness(0.5);
            transform: translateY(-3%);
        }
    `