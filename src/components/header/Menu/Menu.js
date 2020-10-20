import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import * as SC from "./styles"

const Menu = () => (
  <SC.HeaderContainer>
    <SC.HeaderTop>
      <SC.HeaderImg src="img/header/logo.png" alt="header_img" />
      <SC.HeaderTitle>wrostat</SC.HeaderTitle>
    </SC.HeaderTop>
    <SC.HeaderBottom>
      <SC.HeaderLine />
      <SC.HeaderSubtitle>a stat about Wro</SC.HeaderSubtitle>
    </SC.HeaderBottom>
  </SC.HeaderContainer>
)

export default Menu
