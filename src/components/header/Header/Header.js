import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import * as SC from "./styles"
import Moment from "../Moment/Moment"
import Bluebar from "../../main/Bluebar/Bluebar"

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
  </SC.HeaderContainer>
  <Moment />
  <Bluebar title={title} text_content={text_content} />
  </header>
)

export default Header
