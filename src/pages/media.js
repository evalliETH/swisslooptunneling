import * as React from "react"
import { Link } from "gatsby"
import { StaticImage, GatsbyImage} from "gatsby-plugin-image"
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { graphql } from "gatsby"

import { css } from "@emotion/react"
import styled from "@emotion/styled"
import {spacing, color} from "../constants"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Divider from "../components/divider";

const PartnerWrapper = styled.div`
  display: flex; 
  background-color: white;
  margin-bottom: 2em;
  transition: all 0.3s ease-in-out;
`

const LogoWrapper = styled.div`
  display: flex; 
  flex-direction: row; 
  flex-wrap: wrap; 
  align-items: center; 
  justify-content: center; 
  width: 100%;
`

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

const MediaPage = ({data}) => {
  
  const meta = {
    "m1-reteuno-logo": {"url" : "https://www.rsi.ch/play/tv/albachiara-in-tv/video/albachiara-in-tv?urn=urn:rsi:video:13943251"},
    "m2-suedostschweiz-logo": {"url" : "https://www.suedostschweiz.ch/aus-dem-leben/2021-04-19/schneller-als-all-die-anderen-sein"},
    "m3-buewo-logo": {"url" : "https://reader.somedia.ch/epaper/pdf/blaettern.php?publication=wzbw&date=2021-04-21&keyauth=KNBss9PpQ4OvpcG4HJ4jJDy534XWETJO0_Ukq2_WgXw"},
    "m4-minuten20-logo": {"url" : "https://www.wirsindzukunft.ch/articles/42891-2"},
    "m5-baukader-logo": {"url" : "https://issuu.com/baukader/docs/bk_7-8_2021_web/6"},
    "m6-tecindustry-logo": {"url" : "https://www.tecindustry.ch/de/aktuelles/ich-moechte-der-menschheit-etwas-hinterlassen.html?no_cache=1#c25522"},
    "m8-the-stat-trade-times-logo": {"url" : "https://www.stattimes.com/news/gebrder-weiss-commits-to-hyperloop-project-highspeed-transport-system-air-cargo/"},
    "m9-hsg-student-podcast-logo": {"url" : "https://hsg-student-podcast.captivate.fm/episode/swissloop-tunneling"},
    "m10-prisma-logo": {"url" : "https://prisma-hsg.ch/2021/08/13/licht-am-ende-des-tunnels-swissloop-tunneling/"},
  }

  const medienspiegel = data.medienspiegel.edges
  // console.log("test" + JSON.stringify(medienspiegel));
  // medienspiegel.map((element) => {
  //   console.log(element.node)
  // })

  return (
  <Layout>
    <SEO title="Media" />
    <h1>Media</h1>
    <h2>Press Kits</h2>
    <div>
      <p>
        Download our Press Kit Documents: <br/>
        <Button target="_blank" rel="noopener noreferrer" href="/media/Media-Kit-Download-EN.pdf">Swissloop Tunneling Media Kit - EN</Button>
        <Button href="/media/Pictures-2021.zip">Pictures 2021</Button>
      </p>            
    </div>
    <Divider />
    <h2>Featured On</h2>
    <div css={css`
      background-color: white;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      
      & > a {
        flex: 1 1 300px; margin: 5px;
      }
      `}>
      
      <PartnerWrapper>
        <LogoWrapper>
        {
          medienspiegel.map((element) => (
            <a target="_blank" rel="noopener noreferrer" key={element.node.name} css={css`flex: 0 1 180px;`} href={meta[element.node.name] ? meta[element.node.name].url : ''}>
              <GatsbyImage css={css`margin: 2em 1em;`} alt={meta[element.node.name] ? meta[element.node.name].name : 'Swissloop Tunneling Media'} image={element.node.childImageSharp.gatsbyImageData} />
            </a>
          ))
        }
        </LogoWrapper>
      </PartnerWrapper>

      {/* <a href="https://reader.somedia.ch/epaper/pdf/blaettern.php?publication=wzbw&date=2021-04-21&keyauth=KNBss9PpQ4OvpcG4HJ4jJDy534XWETJO0_Ukq2_WgXw">
        <StaticImage
          src="../images/medienspiegel/buewo-logo.png"
          quality={95}
          placeholder={"tracedSVG"}
          //tracedSVGOptions={{ background: "black", color: "yellow", blackOnWhite: false }}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Buewo"
          layout="constrained"
          width={800}
        />
      </a>
      <a href="https://www.suedostschweiz.ch/aus-dem-leben/2021-04-19/schneller-als-all-die-anderen-sein">
        <StaticImage
          src="../images/medienspiegel/suedostschweiz-logo.png"
          quality={95}
          placeholder={"tracedSVG"}
          //tracedSVGOptions={{ background: "black", color: "yellow", blackOnWhite: false }}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Suedostschweiz"
          layout="constrained"
          width={800}
        />
      </a>
      <a href="https://prisma-hsg.ch/2021/08/13/licht-am-ende-des-tunnels-swissloop-tunneling/">
        <StaticImage
          src="../images/medienspiegel/prisma-logo.png"
          quality={95}
          placeholder={"tracedSVG"}
          //tracedSVGOptions={{ background: "black", color: "yellow", blackOnWhite: false }}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Swissloop Tunneling"
          layout="constrained"
          width={800}
        />
      </a>
      <a href="https://hsg-student-podcast.captivate.fm/episode/swissloop-tunneling">
        <StaticImage
          src="../images/medienspiegel/hsg-student-podcast-logo.png"
          quality={95}
          placeholder={"tracedSVG"}
          //tracedSVGOptions={{ background: "black", color: "yellow", blackOnWhite: false }}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="HSG Student Podcast"
          layout="constrained"
          width={800}
        />
      </a>
      <a href="https://issuu.com/baukader/docs/bk_7-8_2021_web/6">
        <StaticImage
          src="../images/medienspiegel/baukader-logo.png"
          quality={95}
          placeholder={"tracedSVG"}
          //tracedSVGOptions={{ background: "black", color: "yellow", blackOnWhite: false }}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Baukader"
          layout="constrained"
          width={800}
        />
      </a>
      <a href="https://www.wirsindzukunft.ch/articles/42891-2">
        <StaticImage
          src="../images/medienspiegel/20minuten-logo.png"
          quality={95}
          placeholder={"tracedSVG"}
          //tracedSVGOptions={{ background: "black", color: "yellow", blackOnWhite: false }}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="20 Minuten"
          layout="constrained"
          width={800}
        />
      </a>
      <a href="https://www.tecindustry.ch/de/aktuelles/ich-moechte-der-menschheit-etwas-hinterlassen.html?no_cache=1#c25522">
        <StaticImage
          src="../images/medienspiegel/tecindustry-logo.png"
          quality={95}
          placeholder={"tracedSVG"}
          //tracedSVGOptions={{ background: "black", color: "yellow", blackOnWhite: false }}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Tecindustry"
          layout="constrained"
          width={800}
        />
      </a>
      <a href="https://www.rsi.ch/play/tv/albachiara-in-tv/video/albachiara-in-tv?urn=urn:rsi:video:13943251">
        <StaticImage
          src="../images/medienspiegel/reteuno-logo.png"
          quality={95}
          placeholder={"tracedSVG"}
          //tracedSVGOptions={{ background: "black", color: "yellow", blackOnWhite: false }}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Reteuno"
          layout="constrained"
          width={800}
        />
      </a>
      <a href="https://www.stattimes.com/news/gebrder-weiss-commits-to-hyperloop-project-highspeed-transport-system-air-cargo/">
        <StaticImage
          src="../images/medienspiegel/the-stat-trade-times-logo.png"
          quality={95}
          placeholder={"tracedSVG"}
          //tracedSVGOptions={{ background: "black", color: "yellow", blackOnWhite: false }}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="STAT Trade Times"
          layout="constrained"
          width={800}
        />
      </a>
      */}      

    </div>
    <Divider/>
    <h2>Pictures</h2>
    {/* <div css={css`
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
    </div> */}
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
        src="../images/mediaimages/swissloop-tunneling-media-1.png"
        quality={95}
        placeholder={"tracedSVG"}
        //tracedSVGOptions={{ background: "black", color: "yellow", blackOnWhite: false }}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Swissloop Tunneling"
        layout="constrained"
        width={1280}
      />
      <StaticImage
        src="../images/mediaimages/swissloop-tunneling-media-2.png"
        quality={95}
        placeholder={"tracedSVG"}
        //tracedSVGOptions={{ background: "black", color: "yellow", blackOnWhite: false }}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Swissloop Tunneling"
        layout="constrained"
        width={1280}
      />
      <StaticImage
        src="../images/mediaimages/swissloop-tunneling-media-3.JPG"
        quality={95}
        placeholder={"tracedSVG"}
        //tracedSVGOptions={{ background: "black", color: "yellow", blackOnWhite: false }}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Swissloop Tunneling"
        layout="constrained"
        width={1280}
      />
      <StaticImage
        src="../images/mediaimages/swissloop-tunneling-media-4.JPG"
        quality={95}
        placeholder={"tracedSVG"}
        //tracedSVGOptions={{ background: "black", color: "yellow", blackOnWhite: false }}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Swissloop Tunneling"
        layout="constrained"
        width={1280}
      />
      <StaticImage
        src="../images/mediaimages/swissloop-tunneling-reveal-event6.jpg"
        quality={95}
        placeholder={"tracedSVG"}
        //tracedSVGOptions={{ background: "black", color: "yellow", blackOnWhite: false }}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Swissloop Tunneling"
        layout="constrained"
        width={1280}
      />
      <StaticImage
        src="../images/mediaimages/swissloop-tunneling-media-5.JPG"
        quality={95}
        placeholder={"tracedSVG"}
        //tracedSVGOptions={{ background: "black", color: "yellow", blackOnWhite: false }}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Swissloop Tunneling"
        layout="constrained"
        width={1280}
      />
      <StaticImage
        src="../images/mediaimages/swissloop-tunneling-media-6.JPG"
        quality={95}
        placeholder={"tracedSVG"}
        layout="constrained"
        width={1280}
        //tracedSVGOptions={{ background: "black", color: "yellow", blackOnWhite: false }}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Swissloop Tunneling"
      />
      <StaticImage
        src="../images/mediaimages/swissloop-tunneling-media-7.JPG"
        quality={95}
        placeholder={"tracedSVG"}
        layout="constrained"
        width={1280}
        //tracedSVGOptions={{ background: "black", color: "yellow", blackOnWhite: false }}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Swissloop Tunneling"
      />
      <StaticImage
        src="../images/mediaimages/swissloop-tunneling-media-8.JPG"
        quality={95}
        placeholder={"tracedSVG"}
        layout="constrained"
        width={1280}
        //tracedSVGOptions={{ background: "black", color: "yellow", blackOnWhite: false }}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Swissloop Tunneling"
      />
      <StaticImage
        src="../images/mediaimages/swissloop-tunneling-media-9.JPG"
        quality={95}
        placeholder={"tracedSVG"}
        layout="constrained"
        width={1280}
        //tracedSVGOptions={{ background: "black", color: "yellow", blackOnWhite: false }}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Swissloop Tunneling"
      />
      <StaticImage
        src="../images/mediaimages/swissloop-tunneling-media-10.JPG"
        quality={95}
        placeholder={"tracedSVG"}
        layout="constrained"
        width={1280}
        //tracedSVGOptions={{ background: "black", color: "yellow", blackOnWhite: false }}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Swissloop Tunneling"
      />
      <StaticImage
        src="../images/mediaimages/swissloop-tunneling-media-11.JPG"
        quality={95}
        placeholder={"tracedSVG"}
        layout="constrained"
        width={1280}
        //tracedSVGOptions={{ background: "black", color: "yellow", blackOnWhite: false }}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Swissloop Tunneling"
      />
      <StaticImage
        src="../images/mediaimages/swissloop-tunneling-media-12.png"
        quality={95}
        placeholder={"tracedSVG"}
        layout="constrained"
        width={1280}
        //tracedSVGOptions={{ background: "black", color: "yellow", blackOnWhite: false }}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Swissloop Tunneling"
      />
      <StaticImage
        src="../images/mediaimages/swissloop-tunneling-media-13.JPG"
        quality={95}
        placeholder={"tracedSVG"}
        layout="constrained"
        width={1280}
        //tracedSVGOptions={{ background: "black", color: "yellow", blackOnWhite: false }}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Swissloop Tunneling"
      />
      <StaticImage
        src="../images/mediaimages/swissloop-tunneling-media-14.jpg"
        quality={95}
        placeholder={"tracedSVG"}
        layout="constrained"
        width={1280}
        //tracedSVGOptions={{ background: "black", color: "yellow", blackOnWhite: false }}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Swissloop Tunneling"
      />
      <StaticImage
        src="../images/mediaimages/swissloop-tunneling-media-15.jpg"
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
    <p css={css`text-align:right; margin-top: 1em;`}>Fotografie © <a href="https://janick-entremont.com/">Janick Entremont</a></p>
    

  </Layout>
  )
}

export default MediaPage

export const pageQuery2 = graphql`
query {
  medienspiegel: allFile(filter: {relativeDirectory: {eq: "medienspiegel"}}, sort: {order: ASC, fields: name}) {
    edges {
      node {
        childImageSharp {
          gatsbyImageData(
            width: 250
            quality: 90
            layout: CONSTRAINED
            placeholder: TRACED_SVG
          )
        },
        name
      }
    }
  }
}
`