import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Atractions from "../components/main/PLACES/Atractions"
import Neon from "../components/main/PLACES/Neon"
import Food from "../components/main/PLACES/Food"
import SkyTower from "../components/main/PLACES/SkyTower"
import Island from "../components/main/PLACES/Island"
import Districts from "../components/main/PLACES/Districts"

const Places = () => (
    <Layout text_content="city of meetings ..." title="places">
      <SEO title="Places" />
      <Atractions />
      <Neon />
      <Island />
      <SkyTower />
      <Districts />
      <Food />
    </Layout>
  )

export default Places