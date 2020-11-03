import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Architecture from "../components/main/CULTURE/Architecture"
import Monuments from "../components/main/CULTURE/Monuments"
import Pedestrian from "../components/main/CULTURE/Pedestrian"
import Stadium from "../components/main/CULTURE/Stadium"


const Culture = () => (
  <Layout text_content="city of bridges, monuments and dwarfs ..." title="culture">
    <SEO title="Culture" />
    <Architecture />
    <Monuments />
    <Pedestrian />
    <Stadium />
  </Layout>
)

export default Culture
