import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import City from "../components/main/HOME/City/City"
import Administration from "../components/main/HOME/Administation/Administration"
import Bluebar from "../components/main/Bluebar/Bluebar"
import History from "../components/main/HOME/History/History"
import Arms from "../components/main/HOME/Arms/Arms"
import Ostrow from "../components/main/HOME/Ostrow/Ostrow"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Bluebar text_content="city full of history..." title="city" />
    <City />
    <Administration />
    <History />
    <Arms />
    <Ostrow />
  </Layout>
)

export default IndexPage
