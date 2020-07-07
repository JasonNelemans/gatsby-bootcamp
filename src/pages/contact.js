import React, { useState } from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  const [guest, setGuest] = useState("normal")

  const button = (
    <button
      onClick={() =>
        guest === "normal" ? setGuest("mystery") : setGuest("normal")
      }
    >
      Switch
    </button>
  )

  if (guest === "normal") {
    return (
      <div>
        <Layout>
          <Head title="Contact" />
          <h1>Contact details</h1>
          <p>
            Jason Nelemans <br />
            jasonnelemans@hotmail.com <br />
            Amsterdam, the Netherlands. <br />
            <a
              href="https://www.linkedin.com/in/jasonnelemans/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Find me on LinkedIn.{" "}
            </a>
          </p>
          {button}
        </Layout>
      </div>
    )
  } else {
    return (
      <div>
        <Layout>
          <h2>Mystery guest</h2>
          {button}
        </Layout>
      </div>
    )
  }
}

export default ContactPage
