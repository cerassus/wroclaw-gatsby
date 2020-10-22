import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header/Header/Header"
import Footer from "./footer/Footer"
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
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
    font-size: 1.4rem;
    font-weight: 300;
    line-height: 2.5rem;
    text-align: justify;
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

  



const Layout = ({ children, title, text_content }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

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
