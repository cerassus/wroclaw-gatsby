import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Atractions from "../components/main/PLACES/Atractions/Atractions"
import Neon from "../components/main/PLACES/Neon/Neon"
import Food from "../components/main/PLACES/Food/Food"
import SkyTower from "../components/main/PLACES/SkyTower/SkyTower"
import Island from "../components/main/PLACES/Island/Island"
import Districts from "../components/main/PLACES/Districts/Districts"

const Places = () => (
  <Layout text_content="city of meetings ..." title="places">
    <SEO title="Places" />
    <Atractions/>
    <Neon />
    <Island />
    <SkyTower />
    <Districts />
    <Food />

  </Layout>
)

export default Places
