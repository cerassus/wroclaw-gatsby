import React from "react"
import styled from "styled-components"
import { colors } from "../styles/common-styles"

const Bluebar = ({text_content, title}) => (
    <>
        <BluebarContent>
            <div>{text_content}</div>
        </BluebarContent>
        <Title>{title}</Title>
    </>
)


const BluebarContent = styled.div`
        font-family: 'Nunito', 'sans-serif';
        background-color: ${colors.primary};
        width: 100%;
        & div {
            color: ${colors.white};
            font-size: 3.5rem;
            letter-spacing: 0.2em;
            text-align: center;
            padding: 5rem;
            @media (max-width: 600px) {
                font-size: 3vh;
                padding: 2rem;
            }
        }
    }
    `

const Title = styled.h1`
  margin: 7vw auto;
  font-weight: normal;
  display: inline-block;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: -1.5rem;
    right: 0;
    height: 2px;
    width: 30rem;
    background: linear-gradient(
      270deg,
      ${colors.primary} 0%,
      rgba(9, 56, 88, 0) 100%
    );
    border-radius: 25%;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: -1.5rem;
    left: 0;
    height: 2px;
    width: 30rem;
    background: linear-gradient(
      90deg,
      ${colors.primary} 0%,
      rgba(9, 56, 88, 0) 100%
    );
    border-radius: 25%;
  }
  @media (max-height: 650px) {
    display: none;
  }
`


export default Bluebar