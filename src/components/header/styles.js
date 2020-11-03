import styled from "styled-components"
import * as Common from "../styles/common-styles"


export const HeaderContent = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media (max-width: 600px) {
    height: 100vh;
  }
  `
export const HeaderTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

export const HeaderImg = styled.img`
  width: 35%;
  filter: brightness(0.8);
  @media (max-height: 700px) {
    display: none;
    & + *:first-of-type {
      transform: translate(0,0);
    }
  };
  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 7rem;
  }
`
export const HeaderTitle = styled.h1`
  font-weight: 700;
  font-size: 4.8rem;
  text-transform: uppercase;
  transform: translate(-10%, -5%);
  letter-spacing: 0.12em;
  color: ${Common.colors.secondary};
  @media (max-width: 600px) {
    transform: translate(-100%, -5%);
  }
`

export const HeaderBottom = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  letter-spacing: 0.12em;
  position: relative;
`
export const HeaderLine = styled.div`
  height: 2px;
  width: 100%;
  background-color: ${Common.colors.secondary};
  margin: 0.5vh 0;
`
export const HeaderSubtitle = styled.h2`
  font-weight: normal;
  font-size: 2rem;
  padding-left: 0.5rem;
  position: absolute;
  background-color: ${Common.colors.white};
  transform: translateY(5px);
`

export const Nav = styled.ul`
  display: flex;
  list-style: none;
  @media (max-width: 800px) {
    margin-top: 2rem;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    & > * {
      margin: 1vw 0;
    }
  }
`

export const NavItem = styled.li`
  text-transform: uppercase;
  margin-right: 1vw;
  font-size: 2rem;
  letter-spacing: 0.15em;
  transition: all .2s;
  &:not(:first-child)::before {
    content: "|";
    margin-right: 5px;
    @media (max-width: 600px) {
      content: "";
      margin-right: 0;
    }
  }
  &:hover a {
    letter-spacing: .1em;
    border-bottom: 2px solid ${Common.colors.primary}!important;
  }
  & a {
    &,
    &:link,
    &:visited {
      display: inline-block;
      text-decoration: none;
      color: ${Common.colors.primary};
      transition: all .4s;
      border-bottom: 2px solid ${Common.colors.white};
    }

  }
  ${props => props.bold && "font-weight: 800"};
`