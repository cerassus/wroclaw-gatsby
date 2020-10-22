import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Architecture from "../components/main/CULTURE/Architecture/Architecture"
import Monuments from "../components/main/CULTURE/Monuments/Monuments"
import Pedestrian from "../components/main/CULTURE/Pedestrian/Pedestrian"
import Stadium from "../components/main/CULTURE/Stadium/Stadium"


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
