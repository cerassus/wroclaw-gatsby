import React from "react"
import styled from 'styled-components';


class Scroll extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
    }
    this.website = false
  }
  listenerFunction = () => {
    this.website.scrollTop > 500 ? this.setState({visible: true}) : this.setState({visible: false}) 
  }
  componentDidMount() {
    this.website = document.getElementById("gatsby-focus-wrapper")
    this.website.addEventListener("scroll", this.listenerFunction)
  }
  componentWillUnmount() {
    this.website.removeEventListener("scroll", this.listenerFunction)
  }
  getToTop = () => {
    this.website.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  render() {
    return (
      <ScrollContainer onClick={() => this.getToTop()} visible={this.state.visible}>
        <Arrow></Arrow>
        <Arrow></Arrow>
      </ScrollContainer>
    )
  }
}


const ScrollContainer = styled.div`
    position: fixed;
    right: 5vw;
    bottom: 5vw;
    width: 5rem;
    height: 5rem;
    z-index: 10;
    background-color: #093858;
    border: 4px solid #FFF;
    border-radius: 50%;
    box-shadow: 0 3px 5px #000;
    transition: all 0.4s;
    transform: scale(1.2);
    &:hover {
        cursor: pointer;
    }
    &:hover > *:first-of-type {
        transform: rotate(-55deg);
    }
    &:hover > *:last-of-type {
        transform: rotate(55deg);
    }
    ${props => props.visible ? "visibility: visible; opacity: 1" : "visibility: hidden; opacity: 0"};
    @media (max-width: 600px) {
        transform: scale(1);
    }
    @media (max-width: 400px) {
        transform: scale(0.8);
    }
    `

const Arrow = styled.div`
    position: absolute;
    height: 4px;
    border-radius: 10px;
    width: 2rem;
    background-color: #FFF;
    transition: all .2s;
    &:first-of-type {
        transform: rotate(-45deg);
        transform-origin: right;
        top: 25%;
        left: 5%;
    }
    &:last-of-type {
        transform: rotate(45deg);
        transform-origin: left;
        top: 25%;
        right: 5%;
    }
    `

export default Scroll
