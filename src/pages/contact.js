import React from "react"

import Footer from "../components/footer"
import Header from "../components/header"

const ContactPage = () => {
  return (
    <div>
      <Header />
      <h1>Contact details</h1>
      <p>Jason Nelemans <br/>
        jasonnelemans@hotmail.com <br/>
        Amsterdam, the Netherlands. <br/>
        <a href="https://www.linkedin.com/in/jasonnelemans/" target="_blank" rel="noreferrer"> Find me on LinkedIn. </a>
      </p>
      <Footer />
    </div>
  )
}

export default ContactPage