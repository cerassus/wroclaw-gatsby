import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StatMain from "../components/main/DIDYOUKNOW/StatMain"
import StatPeople from "../components/main/DIDYOUKNOW/StatPeople"
import StatRegion from "../components/main/DIDYOUKNOW/StatRegion"
import Curiosities from "../components/main/DIDYOUKNOW/Curiosities"

const DidYouKnow = () => (
  <Layout text_content="city in numbers ..." title="did you know">
    <SEO title="Did You Know" />
    <StatMain />
    <StatPeople />
    <StatRegion />
    <Curiosities />
  </Layout>
)

export default DidYouKnow