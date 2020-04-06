import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AppContainer from "../components/appContainer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div id="some-div" style={{ marginBottom: `1.45rem` }}>
      <AppContainer />
    </div>
  </Layout>
)

export default IndexPage
