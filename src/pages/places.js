import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Bluebar from "../components/main/Bluebar/Bluebar"
import Atractions from "../components/main/CULTURE/Atractions/Atractions"
import Food from "../components/main/PLACES/Food/Food"


const Places = () => (
  <Layout>
    <SEO title="Places" />
    <Bluebar text_content="city of meetings ..."/>
    <Atractions/>
    <Food />
  </Layout>
)

export default Places
