import React from "react"
import { Link } from "gatsby"

const AboutPage = () => {
  return (
    <div>
      <h1>About</h1>
      <p>A driven and passionate developer aiming for greater heights, with a new found love for programming.</p>
      <p>I have much to learn still, but I am excited to learn all of it.</p>
      <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
    </div>
  )
}

export default AboutPage