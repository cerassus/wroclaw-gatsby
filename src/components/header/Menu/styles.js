import styled from 'styled-components';
import * as Common from "../../styles/common-styles"

export const HeaderContainer = styled(Common.HeaderContainer)``

export const HeaderTop = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    `

    export const HeaderImg = styled.img`
        width: 35%;
        `
    export const HeaderTitle = styled.h1`
        font-weight: 700;
        font-size: 4.8rem;
        text-transform: uppercase;
        transform: translate(-10%, -5%);
        letter-spacing: 0.12em;
        color: #165986;
        `

export const HeaderBottom = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    letter-spacing: 0.12em;
    `
    export const HeaderLine = styled.div`
        height: 2px;
        width: 100%;
        background-color: #165986;
        margin: 0.5vh 0;
        `
    export const HeaderSubtitle = styled.h2`
        font-weight: normal;
        font-size: 2rem;
        padding-left: 0.5rem;
        position: absolute;
        background-color: white;
        transform: translateY(5px);
        `















// export const HeaderContainer = styled.header`
//         width: min(120rem, 100%);
//         background-color: #F7F3F3;
//         margin: 0 auto;
//         font-family: 'Nunito', 'sans-serif';
//         padding: 1rem;
//         display: flex;
//         `
//     export const HeaderLeft = styled.div`
//         width: 100%;
//         margin-right: 1rem;
//         `
    
//         export const HeaderImg = styled.img`
//             height: 10rem;
//             `
    
//         export const HeaderLine = styled.div`
//             height: 2px;
//             width: 100%;
//             background-color: #165986;
//             margin-bottom: 1rem;
//             `
    
//     export const HeaderRight = styled.div`
//         display: flex;
//         flex-direction: column;
//         align-items: flex-end;
//         justify-content: flex-end;
//         letter-spacing: 0.12em;
//         `
//         export const HeaderTitle = styled.h1`
//             position: absolute;
//             top: -200%;
//             right: 25%;
//             font-weight: 700;
//             font-size: 4.8rem;
//             text-transform: uppercase;
//             `
//         export const HeaderSubtitle = styled.h2`
//             position: relative;
//             font-weight: normal;
//             font-size: 2rem;
//             width: 20rem;
//             `