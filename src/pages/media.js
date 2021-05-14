import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { css } from "@emotion/react"
import styled from "@emotion/styled"
import {spacing, color} from "../constants"

import Layout from "../components/layout"
import SEO from "../components/seo"

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

export default function MediaPage(props) {
  
  return (
  <Layout>
    <SEO title="Team" />
    <h1>Media</h1>
    <div css={css`
      display: flex;
      flex-direction: row;
      margin-bottom: 20px;
      & > div {
        margin: 0 10px;
        &:nth-of-type(1){
          margin-left: 0;
        }
        &:nth-of-type(3){
          margin-right: 0;
        }
      }
      @media (max-width: 600px) {
        flex-direction: column;
        & > div {
          margin: 0;
        }
      }
      
    `}>
      <StaticImage
        src="../images/swissloop-tunneling-media-1.jpg"
        height={500}
        quality={95}
        placeholder={"tracedSVG"}
        //tracedSVGOptions={{ background: "black", color: "yellow", blackOnWhite: false }}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Swissloop Tunneling"
      />  
      <StaticImage
        src="../images/swissloop-tunneling-media-2.png"
        height={500}
        quality={95}
        placeholder={"tracedSVG"}
        //tracedSVGOptions={{ background: "black", color: "yellow", blackOnWhite: false }}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Swissloop Tunneling"
      />  
      <StaticImage
        src="../images/swissloop-tunneling-media-3-lukas.png"
        height={500}
        quality={95}
        placeholder={"tracedSVG"}
        //tracedSVGOptions={{ background: "black", color: "yellow", blackOnWhite: false }}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Swissloop Tunneling"
      />  
    </div>

    <div>
      <p>
        Download our Press Kit Documents: <br/>
        <Button target="_blank" rel="noopener noreferrer" href="/media/Press-Kit-Swissloop-Tunneling.pdf">News: Competition 2021 - EN</Button>
        <Button target="_blank" rel="noopener noreferrer" href="/media/Press-Kit-Text_deutsch.pdf">News: Competition 2021 - DE</Button>
        <Button href="/media/Media-Kit.zip">News: Pictures 2021</Button>
      </p>            
    </div>
    

  </Layout>
  )
}