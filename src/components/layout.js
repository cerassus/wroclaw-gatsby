import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import Header from "./header/Header"
import Footer from "./footer/Footer"
import { createGlobalStyle } from 'styled-components'
import Scroll from "../components/ScrollToTop/ScrollToTop"

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
    background-color: #FFF;
    width: 100%;
    overflow: hidden;
    font-size: 1.4rem;
    color: #093858;
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
`
// font-size: 1.65vh;
// line-height: 2.6vh;
// @media (max-width: 1200px) {
//   font-size: 1.3vw;
// }
// @media (max-width: 400px) {
//   font-size: 3vw;
//   line-height: 3.5vw;
// }

// @media (max-width: 600px) {
//   font-size: 1.3rem;
//   line-height: 2.2rem;
// }
// @media (max-width: 450px) {
//   font-size: 1.2rem;
//   line-height: 2rem;
//   margin-bottom: 0.5rem;
// }
// @media (max-width: 330px) {
//   font-size: 1rem;
//   line-height: 1.5rem;
// }
// }


const Layout = ({ children, title, text_content }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <GlobalStyle />
      <Header title={title} text_content={text_content}/>
       {children}
       <Scroll />
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
