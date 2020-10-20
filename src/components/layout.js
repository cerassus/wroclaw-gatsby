import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Menu from "./header/Menu/Menu"
import Moment from "./header/Moment/Moment"
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
    overflow-x: hidden;
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
    line-height: 2rem;
    text-align: justify;
  }
  span {
    font-weight: 500;
  }
  main {
    scroll-snap-type: y mandatory;
  }
  `

const Layout = ({ children }) => {
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
      <Menu />
      <Moment />
        <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
