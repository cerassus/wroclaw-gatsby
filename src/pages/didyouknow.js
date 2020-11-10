import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StatMain from "../components/main/DIDYOUKNOW/StatMain"
import StatPeople from "../components/main/DIDYOUKNOW/StatPeople"
import StatRegion from "../components/main/DIDYOUKNOW/StatRegion"
import Curiosities from "../components/main/DIDYOUKNOW/Curiosities"
import year from "../../src/data/2017year.json"
import decade from "../../src/data/10years.json"

const DidYouKnow = () => {
  return (
  <Layout text_content="city in numbers ..." title="did you know">
    <SEO title="Did You Know" />
    <StatMain stat={year} decade={decade} />
    <StatPeople stat={year} />
    <StatRegion stat={year} decade={decade} />
    <Curiosities />
  </Layout>
)
}

export default DidYouKnow