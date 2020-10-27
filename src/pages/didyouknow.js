import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StatMain from "../components/main/DIDYOUKNOW/StatMain/StatMain"
import StatPeople from "../components/main/DIDYOUKNOW/StatPeople/StatPeople"
import StatRegion from "../components/main/DIDYOUKNOW/StatRegion/StatRegion"
import Curiosities from "../components/main/DIDYOUKNOW/Curiosities/Curiosities"

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