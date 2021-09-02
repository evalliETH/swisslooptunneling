import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { css } from "@emotion/react"
import styled from "@emotion/styled"
import {spacing, color} from "../constants"

import Layout from "../components/layout"
import SEO from "../components/seo"

import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

const Button = styled.a`
  color: ${color.BG};
  text-decoration: none;
  padding: 0.75em 1em;
  display: inline-block;
  margin: 1em 1em 1em 0;
  background-color: rgba(246, 223, 109,1);
  transition: background-color 0.2s;

  &:hover {
    
    background-color: rgba(246, 223, 109, 0.8);
  }
`

const RevealEventPage = () => {
  return (
  <Layout>
    <SEO title="Reveal Event" />
    <h1>Reveal Event Partner</h1>
    <SimpleReactLightbox>
      <SRLWrapper>
      <div css={css`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        //grid-template-rows: repeat(8, 1fr);
        grid-gap: 15px;

        & > div {
          cursor: pointer;
        }
      `}>

      <StaticImage
        src="../images/revealevent/swissloop-tunneling-reveal-event2.jpg"
        quality={95}
        placeholder={"tracedSVG"}
        //tracedSVGOptions={{ background: "black", color: "yellow", blackOnWhite: false }}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Swissloop Tunneling"
        layout="constrained"
        width={1280}
      />
      <StaticImage
        src="../images/revealevent/swissloop-tunneling-reveal-event3.jpg"
        quality={95}
        placeholder={"tracedSVG"}
        //tracedSVGOptions={{ background: "black", color: "yellow", blackOnWhite: false }}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Swissloop Tunneling"
        layout="constrained"
        width={1280}
      />
      <StaticImage
        src="../images/revealevent/swissloop-tunneling-reveal-event4.jpg"
        quality={95}
        placeholder={"tracedSVG"}
        //tracedSVGOptions={{ background: "black", color: "yellow", blackOnWhite: false }}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Swissloop Tunneling"
        layout="constrained"
        width={1280}
      />
      <StaticImage
        src="../images/revealevent/swissloop-tunneling-reveal-event5.jpg"
        quality={95}
        placeholder={"tracedSVG"}
        //tracedSVGOptions={{ background: "black", color: "yellow", blackOnWhite: false }}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Swissloop Tunneling"
        layout="constrained"
        width={1280}
      />
      <StaticImage
        src="../images/revealevent/swissloop-tunneling-reveal-event6.jpg"
        quality={95}
        placeholder={"tracedSVG"}
        //tracedSVGOptions={{ background: "black", color: "yellow", blackOnWhite: false }}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Swissloop Tunneling"
        layout="constrained"
        width={1280}
      />
      <StaticImage
        src="../images/revealevent/swissloop-tunneling-reveal-event7.jpg"
        quality={95}
        placeholder={"tracedSVG"}
        //tracedSVGOptions={{ background: "black", color: "yellow", blackOnWhite: false }}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Swissloop Tunneling"
        layout="constrained"
        width={1280}
      />
      <StaticImage
        src="../images/revealevent/swissloop-tunneling-reveal-event8.jpg"
        quality={95}
        placeholder={"tracedSVG"}
        layout="constrained"
        width={1280}
        //tracedSVGOptions={{ background: "black", color: "yellow", blackOnWhite: false }}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Swissloop Tunneling"
      />
      <StaticImage
        src="../images/revealevent/swissloop-tunneling-reveal-event9.jpg"
        quality={95}
        placeholder={"tracedSVG"}
        layout="constrained"
        width={1280}
        //tracedSVGOptions={{ background: "black", color: "yellow", blackOnWhite: false }}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Swissloop Tunneling"
      />
      <StaticImage
        src="../images/revealevent/swissloop-tunneling-reveal-event10.jpg"
        quality={95}
        placeholder={"tracedSVG"}
        layout="constrained"
        width={1280}
        //tracedSVGOptions={{ background: "black", color: "yellow", blackOnWhite: false }}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Swissloop Tunneling"
      />
      <StaticImage
        src="../images/revealevent/swissloop-tunneling-reveal-event11.jpg"
        quality={95}
        placeholder={"tracedSVG"}
        layout="constrained"
        width={1280}
        //tracedSVGOptions={{ background: "black", color: "yellow", blackOnWhite: false }}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Swissloop Tunneling"
      />
      <StaticImage
        src="../images/revealevent/swissloop-tunneling-reveal-event12.jpg"
        quality={95}
        placeholder={"tracedSVG"}
        layout="constrained"
        width={1280}
        //tracedSVGOptions={{ background: "black", color: "yellow", blackOnWhite: false }}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Swissloop Tunneling"
      />
      <StaticImage
        src="../images/revealevent/swissloop-tunneling-reveal-event1.jpg"
        quality={95}
        placeholder={"tracedSVG"}
        layout="constrained"
        width={1280}
        //tracedSVGOptions={{ background: "black", color: "yellow", blackOnWhite: false }}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Swissloop Tunneling"
      />
      </div>
      </SRLWrapper>
    </SimpleReactLightbox>
    <p css={css`text-align:right; margin-top: 1em;`}>Fotografie © Janick Entremont</p>
  </Layout>
  )
}

export default RevealEventPage