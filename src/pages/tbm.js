import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { css } from "@emotion/react"
import styled from "@emotion/styled"
import {spacing, color} from "../constants"

import Layout from "../components/layout"
import SEO from "../components/seo"


export default function TBM(props) {
  
  return (
  <Layout>
    <SEO title="TBM Groundhog Alpha" />
    <h1>Groundhog Alpha</h1>
    <h3>Tunnel Boring Machine by Swissloop Tunneling</h3>
    <StaticImage
      src="../images/tbm-groundhog-alpha-inner.png"
      width={1920}
      quality={95}
      placeholder={"tracedSVG"}
      //tracedSVGOptions={{ background: "black", color: "yellow", blackOnWhite: false }}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      css={css`width: 100%; margin-bottom: 50px; max-height: 350px;`}
    />

    <h2>Erosion</h2>
    <div
      css={css`
        background-color: white;
        color: black;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1em 2em 1em 1em;
        margin-bottom: 50px;

        @media (max-width: 900px) {
          flex-direction: column;
        }
      `}>
      <div css={css`
          flex: 1 0 500px;
          @media (max-width: 900px) {
            flex: auto;
          }`}>
        <StaticImage
          src="../images/tbm-groundhog-alpha-erosion.png"
          width={500}
          quality={95}
          placeholder={"tracedSVG"}
          //tracedSVGOptions={{ background: "black", color: "yellow", blackOnWhite: false }}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
        />
      </div>
    <p css={css`
      flex: 1 1 auto;
      margin-left: 1em;
      margin-bottom: 0;`}>
The massive Erosion system cuts out large stones using our customly designed cutting wheel. Subsequently, it crushes those stones to smaller sizes (a few centimeters) using our cone crusher. The tungsten-carbide coating ensures longevity and enables the crusher to get a better grip. 
In the last step, all the slurry is washed out of the chamber using 10bar high pressure water and a Venturi vacuum pump which can be found in the back of the machine. 
With a torque of 8.5kNm, a rotation speed of 27 rpm and a pushing force of 100kN, we are prepared for any soil conditions that could come our way.
    </p>
    </div>

    <h2>Steering</h2>
    <div
      css={css`
        background-color: white;
        color: black;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1em 2em 1em 1em;
        margin-bottom: 50px;

        @media (max-width: 900px) {
          flex-direction: column;
        }
      `}>
      <div css={css`
          flex: 1 0 500px;
          @media (max-width: 900px) {
            flex: auto;
          }`}>
        <StaticImage
          src="../images/tbm-groundhog-alpha-steering.png"
          width={500}
          quality={95}
          placeholder={"tracedSVG"}
          //tracedSVGOptions={{ background: "black", color: "yellow", blackOnWhite: false }}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
        />
      </div>
    <p css={css`
      flex: 1 1 auto;
      margin-left: 1em;
      margin-bottom: 0;`}>
In order to dig curved tunnels, allowing for more flexibility and more potential use-cases, an innovative custom-made hydraulic hexapod system is used. 
Using six hydraulic high-precision cylinders, it allows us to move in six degrees of freedom to dig the best and most precise tunnel possible.
Utilizing custom software, it is additionally possible to use this setup as a jackhammer, allowing for strong vibrations of frequencies as high as 20Hz.
    </p>
    </div>

    <h2>Liner</h2>
    <div
      css={css`
        background-color: white;
        color: black;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1em 2em 1em 1em;
        margin-bottom: 50px;

        @media (max-width: 900px) {
          flex-direction: column;
        }
      `}>
      <div css={css`
          flex: 1 0 500px;
          @media (max-width: 900px) {
            flex: auto;
          }`}>
        <StaticImage
          src="../images/tbm-groundhog-alpha-liner.png"
          width={500}
          quality={95}
          placeholder={"tracedSVG"}
          //tracedSVGOptions={{ background: "black", color: "yellow", blackOnWhite: false }}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
        />
      </div>
    <p css={css`
      flex: 1 1 auto;
      margin-left: 1em;
      margin-bottom: 0;`}>
To create a tunnel wall, a special polymer 3D-printer is used in the machine. 
Using tough glass fibre lamellas and a two-component polymer mix, it is possible to create a 15mm thick and highly reliable tunnel wall to press against and to ensure structural integrity along the whole length of the tunnel.
    </p>
    </div>

    <h2>Propulsion</h2>
    <div
      css={css`
        background-color: white;
        color: black;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1em 2em 1em 1em;
        margin-bottom: 50px;

        @media (max-width: 900px) {
          flex-direction: column;
        }
      `}>
      <div css={css`
          flex: 1 0 500px;
          @media (max-width: 900px) {
            flex: auto;
          }`}>
        <StaticImage
          src="../images/tbm-groundhog-alpha-propulsion.png"
          width={500}
          quality={95}
          placeholder={"tracedSVG"}
          //tracedSVGOptions={{ background: "black", color: "yellow", blackOnWhite: false }}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
        />
      </div>
    <p css={css`
      flex: 1 1 auto;
      margin-left: 1em;
      margin-bottom: 0;`}>
In the propulsion section, we use sixteen high-performance hydraulic cylinders. Coordinated with each other, their bracing plates press against the tunnel wall in a continuous fashion and allow for uninterrupted movement and a propulsion force of 200kN.    </p>
    </div>

    <h2>Starting Platform</h2>
    <div
      css={css`
        background-color: white;
        color: black;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1em 2em 1em 1em;
        margin-bottom: 50px;

        @media (max-width: 900px) {
          flex-direction: column;
        }
      `}>
      <div css={css`
          flex: 1 0 500px;
          @media (max-width: 900px) {
            flex: auto;
          }`}>
        <StaticImage
          src="../images/tbm-groundhog-alpha-starting-platform.png"
          width={500}
          quality={95}
          placeholder={"tracedSVG"}
          //tracedSVGOptions={{ background: "black", color: "yellow", blackOnWhite: false }}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
        />
      </div>
    <p css={css`
      flex: 1 1 auto;
      margin-left: 1em;
      margin-bottom: 0;`}>
        Starting from the surface will make it possible to not dig a starting pit and enable us to start digging down straight away, saving valuable time. 
To enable this, the starting platform initially takes all the propulsion forces and guides the machine into the ground.
    </p>
    </div>
    

  </Layout>
  )
}