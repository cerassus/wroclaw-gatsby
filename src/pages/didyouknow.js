import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StatMain from "../components/main/DIDYOUKNOW/StatMain"
import StatPeople from "../components/main/DIDYOUKNOW/StatPeople"
import StatRegion from "../components/main/DIDYOUKNOW/StatRegion"
import Curiosities from "../components/main/DIDYOUKNOW/Curiosities"
import year from "../data/2019year.json"
import decade from "../data/10years.json"

console.log(decade[0][2012]);
console.log(decade[0][2019].map(x => Number(x.count)).reduce((x,y) => x + y));

const DidYouKnow = () => {
  return (
  <Layout text_content="city in numbers ..." title="did you know">
    <SEO title="Did You Know" />
    <StatMain stat={year} />
    <StatPeople stat={year} decade={decade} />
    <StatRegion stat={decade} />
    <Curiosities />
  </Layout>
)
}

export default DidYouKnow