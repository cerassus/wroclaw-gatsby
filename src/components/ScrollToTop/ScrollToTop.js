import React from "react"
import * as SC from "./styles"


const Scroll = () => {
  const [visible, toggleVisibility] = React.useState(false)
  const [didMount, setDidMount] = React.useState(false)
  const gat = didMount && document.getElementById('gatsby-focus-wrapper')
  didMount && gat.addEventListener('scroll', () => {
    gat.scrollTop > 500 ? toggleVisibility(true) : toggleVisibility(false);
  })
  const getToTop = () => {
    if(didMount) {
      gat.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
  React.useEffect( () => {
    setDidMount(true);
  }, [])

  return (
  <SC.Scroll onClick={getToTop} visible={visible}>
    <SC.Arrow></SC.Arrow>
    <SC.Arrow></SC.Arrow>
  </SC.Scroll>
)}

export default Scroll
