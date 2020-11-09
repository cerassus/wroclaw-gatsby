import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout title="404"  text_content="error accessing page ...">
    <SEO title="404: Not found" />
    <div style={{padding: "3vh"}}>
      <h2>You just hit a route that doesn&#39;t exist... the sadness.</h2>
      <div style={{padding: "10vh"}}>Return to <a href="/">Homepage</a></div>
    </div>
  </Layout>
)

export default NotFoundPage
