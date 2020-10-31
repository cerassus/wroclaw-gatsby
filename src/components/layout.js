import React from "react"
import PropTypes from "prop-types"
import Header from "./header/Header"
import Footer from "./footer/Footer"
import { createGlobalStyle } from 'styled-components'
import { colors } from "./styles/common-styles"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  body {
    font-family: 'Spartan', sans-serif;
    background-color: ${colors.white};
    width: 100%;
    overflow: hidden;
    font-size: 1.4rem;
    color: ${colors.primary};
    text-align: center;
  }
  h1 {
    font-size: 3.6rem;
    text-align: center;
    letter-spacing: 0.25em;
    text-transform: lowercase;
  }
  p {
    
    font-size: clamp(1rem, 0.7857rem + 1.0390vw, 1.5rem);
    line-height: clamp(1.4rem, 1.1000rem + 1.4545vw, 2.1rem);
    font-weight: 300;
    text-align: justify;
    margin-bottom: 1rem;
    @media (max-width: 500px) {
      margin-bottom: 0;
    }
  }
  span {
    font-weight: 500;
  }
  body > * > * {
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: y mandatory;
    height: 100vh;
    overflow-x: hidden;
  & > * {
    scroll-snap-align: start;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
`

const Layout = ({ children, title, text_content }) => {
  return (
    <>
      <GlobalStyle />
      <Header title={title} text_content={text_content}/>
       {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout