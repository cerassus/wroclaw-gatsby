import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Bluebar from "../components/main/Bluebar/Bluebar"
import Numbers from "../components/main/DIDYOUKNOW/Numbers/Numbers"


const DidYouKnow = () => (
  <Layout>
    <SEO title="Did You Know" />
    <Bluebar text_content="city in numbers ..."/>
    <Numbers />
  </Layout>
)

export default DidYouKnow
