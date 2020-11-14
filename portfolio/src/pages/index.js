import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/hero"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* 
    Hero 
    Blog preview
    Social media feed
    
    */}
    <Hero />
  </Layout>
)

export default IndexPage
