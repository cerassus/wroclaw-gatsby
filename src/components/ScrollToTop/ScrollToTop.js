import React from "react"
import * as SC from "./styles"

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
      <SC.Scroll onClick={() => this.getToTop()} visible={this.state.visible}>
        <SC.Arrow></SC.Arrow>
        <SC.Arrow></SC.Arrow>
      </SC.Scroll>
    )
  }
}

export default Scroll
