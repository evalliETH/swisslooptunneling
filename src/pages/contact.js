import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { css } from "@emotion/react"
import styled from "@emotion/styled"
import {spacing, color} from "../constants"

import Layout from "../components/layout"
import SEO from "../components/seo"


export default function ContactPage(props) {
  
  return (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact</h1>
    <StaticImage
      src="../images/swissloop-tunneling-contact.png"
      width={900}
      quality={95}
      placeholder={"tracedSVG"}
      //tracedSVGOptions={{ background: "black", color: "yellow", blackOnWhite: false }}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      css={css`width: 100%; margin-bottom: 50px; max-height: 350px;`}
    />
    <h2>Address</h2>
    <p>
      The following address can be used for postal sendings including prototype parts:
      <br/>
      <br/>Empa – Swissloop Tunneling
      <br/>Ueberlandstrasse 129
      <br/>CH-8600 Dübendorf
      <br/>Switzerland
      <br/>
      <br/>Mail
      <br/><a href="mailto:info@swisslooptunneling.ch">info@swisslooptunneling.ch</a>
    </p>

  </Layout>
  )
}