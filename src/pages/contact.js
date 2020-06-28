import React from "react"
import { Link } from "gatsby"

const ContactPage = () => {
  return (
    <div>
      <h1>Contact details</h1>
      <p>Jason Nelemans <br/>
        jasonnelemans@hotmail.com <br/>
        Amsterdam, the Netherlands. <br/>
        <Link to="https://www.linkedin.com/in/jasonnelemans/"> Find me on LinkedIn. </Link>
      </p>
    </div>
  )
}

export default ContactPage