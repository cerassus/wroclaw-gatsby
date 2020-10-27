import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import * as SC from "./styles"
import Moment from "../Moment/Moment"
import Bluebar from "../Bluebar/Bluebar"

const Header = ({title, text_content }) => (
  <header>
  <SC.HeaderContainer>
    <SC.HeaderTop>
      <SC.HeaderImg src="img/header/logo.png" alt="header_img" />
      <SC.HeaderTitle>wrostat</SC.HeaderTitle>
    </SC.HeaderTop>
    <SC.HeaderBottom>
      <SC.HeaderLine />
      <SC.HeaderSubtitle>a stat about Wro</SC.HeaderSubtitle>
    </SC.HeaderBottom>
    <SC.Nav>
      <SC.NavItem bold={title==="city" && true}><Link to="/">City</Link></SC.NavItem>
      <SC.NavItem bold={title==="culture" && true}><Link to="/culture">Culture</Link></SC.NavItem>
      <SC.NavItem bold={title==="places" && true}><Link to="/places">Places</Link></SC.NavItem>
      <SC.NavItem bold={title==="did you know" && true}><Link to="/didyouknow">Did You Know</Link></SC.NavItem>
    </SC.Nav>
  </SC.HeaderContainer>
  <Moment />
  <Bluebar title={title} text_content={text_content} />
  </header>
)

export default Header


Header.defaultProps = {
  title: '',
  text_content: 'city full of history...',
}

Header.propTypes = {
  title: PropTypes.string,
  text_content: PropTypes.string,
}