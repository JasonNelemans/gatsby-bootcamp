import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <Head title="About" />
        <h1>About</h1>
        <p>A driven and passionate developer aiming for greater heights, with a new found love for programming.</p>
        <p>I have much to learn still, but I am excited to learn all of it.</p>
        <p>Want to work with me? <Link to="/contact">Reach out.</Link></p>
      </Layout>
    </div>
  )
}

export default AboutPage