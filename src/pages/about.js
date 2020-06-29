import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"

const AboutPage = () => {
  return (
    <div>
      <Header />
      <h1>About</h1>
      <p>A driven and passionate developer aiming for greater heights, with a new found love for programming.</p>
      <p>I have much to learn still, but I am excited to learn all of it.</p>
      <p>Want to work with me? <Link to="/contact">Reach out.</Link></p>
      <Footer />
    </div>
  )
}

export default AboutPage