import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import City from "../components/main/HOME/City"
import Administration from "../components/main/HOME/Administration"
import History from "../components/main/HOME/History"
import Arms from "../components/main/HOME/Arms"
import Ostrow from "../components/main/HOME/Ostrow"

const IndexPage = () => {
  return (  
  <Layout text_content="city full of history..." title="city">
    <SEO title="Home" />
    <City />
    <Administration />
    <History />
    <Arms />
    <Ostrow />
  </Layout>
)}

export default IndexPage
