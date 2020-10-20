import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Architecture from "../components/main/CULTURE/Architecture/Architecture"
import Monuments from "../components/main/PLACES/Monuments/Monuments"
import Bluebar from "../components/main/Bluebar/Bluebar"


const Culture = () => (
  <Layout>
    <SEO title="Culture" />
    <Bluebar text_content="city of bridges, monuments and dwarfs ..."/>
    <Architecture />
    <Monuments />
  </Layout>
)

export default Culture
