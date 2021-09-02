import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

import { css } from "@emotion/react"
import styled from "@emotion/styled"
import {spacing, color} from "../constants"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Person from "../components/person"


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

const PartnerLabel = styled.div`
  background-color: ${color.BGDARK};
  color: ${color.WHITE};
  position: relative;
  width: 50px;
  min-height: 150px;

  transition: all 0.5s ease-in-out;  
  
  & > span {
    -moz-transform: translateX(-50%) translateY(-50%) rotate(-90deg);
    -webkit-transform: translateX(-50%) translateY(-50%) rotate(-90deg);
    transform:  translateX(-50%) translateY(-50%) rotate(-90deg); 
    position: absolute;
    top: 50%;
    left: 50%;
  }
`
const TeamGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  
  //flex: 1 1 auto;
  background-color: white;
  min-height: 150px;

  & > div {
    flex: 1 0 auto;
    flex-direction: row;
  }

  & img {
    max-height:150px;
    height:auto;
    width:auto;
    //background-color: green;
  }

  & > div:nth-child(1) {
    background-color: blue;
    text-align: center;
    position: relative;
    height: auto;
    width: 50px;
    flex-grow: 0;
    /* flex: 0 1 50px; */

    & > p {
      -moz-transform: translateX(-50%) translateY(-50%) rotate(-90deg);
      -webkit-transform: translateX(-50%) translateY(-50%) rotate(-90deg);
      transform:  translateX(-50%) translateY(-50%) rotate(-90deg); 
            
      position: absolute;
      top: 50%;
      left: 50%;
    }
  } 
`


const DivisionWrapper = styled.div`
  padding: ${spacing.DOUBLE};
`

const PartnersPage = ({data}) => {
  const partnerMainImages = data.partnerMainImages.edges
  const foundingImages = data.foundingImages.edges
  const partnerPlatinumImages = data.partnerPlatinumImages.edges
  const partnerGoldImages = data.partnerGoldImages.edges
  const partnerSilverImages = data.partnerSilverImages.edges
  const partnerBronzeImages = data.partnerBronzeImages.edges
  const partnerPatronImages = data.partnerPatronImages.edges

  
  const meta = {
    "swissloop_sponsor_logos_01-eth-zurich": {"url" : "https://ethz.ch/de.html"},
    "swissloop_sponsor_logos_01-hagenbuch": {"url" : "http://www.hagenbuch.ch/de"},
    "swissloop_sponsor_logos_01-jackcontrol": {"url" : "https://www.jackcontrol.com/index.php/de/"},
    "swissloop_sponsor_logos_01-rollstar": {"url" : "https://www.rollstar.com/en/"},
    "swissloop_sponsor_logos_01-rothpletz-lienhard": {"url" : "https://www.rothpletz.ch/"},
    "swissloop_sponsor_logos_01-seal-able": {"url" : "https://seal-able.com/"},
    "swissloop_sponsor_logos_02-empa": {"url" : "https://www.empa.ch/"},
    "swissloop_sponsor_logos_02-ibag": {"url" : "http://ibag.ch/de/"},
    "swissloop_sponsor_logos_02-lastech-ag": {"url" : "https://www.lastech.ch/site/index.cfm"},
    "swissloop_sponsor_logos_02-sfs": {"url" : "https://www.sfs.ch/?gclid=Cj0KCQiA88X_BRDUARIsACVMYD97L8FDW0dfHZFs8xOQ-0KPVpy6yQbiWAP9xm5QrPyY02EWkNHmtcsaAoa-EALw_wcB"},
    "swissloop_sponsor_logos_02-skf": {"url" : "https://www.skf.com/group"},
    "swissloop_sponsor_logos_03-eth-student-project-house": {"url" : "https://sph.ethz.ch/"},
    "swissloop_sponsor_logos_03-infra-suisse": {"url" : "https://infra-suisse.ch/"},
    "swissloop_sponsor_logos_03-jumbo": {"url" : "https://www.jumbo.ch/de/"},
    "swissloop_sponsor_logos_03-laser-lab": {"url" : ""},
    "swissloop_sponsor_logos_04-afry": {"url" : "https://afry.com/de-ch/uber-uns"},
    "swissloop_sponsor_logos_04-chopfab": {"url" : "https://www.doppelleuboxer.ch/de/"},
    "swissloop_sponsor_logos_04-infra-tunnel": {"url" : "http://www.infratunnel.ch/"},
    "swissloop_sponsor_logos_04-obb-infra": {"url" : "https://infrastruktur.oebb.at/"},
    "swissloop_sponsor_logos_05-ea": {"url" : "https://www.eunda.ch/"},
    "swissloop_sponsor_logos_05-faserplast": {"url" : "https://faserplast.ch/?keyword=faserplast&device=c&network=g&gclid=Cj0KCQjwrsGCBhD1ARIsALILBYobrdWmHLHJ-7xGY6ahSk571I77yInJybGKXqnGVKvknOU-nsRiNdYaAtJFEALw_wcB"},
    "swissloop_sponsor_logos_05-krohne": {"url" : "https://krohne.com/en/"},
    "swissloop_sponsor_logos_05-perforator": {"url" : "http://www.perforator.de/de/"},
    "swissloop_sponsor_logos_10-implenia": {"url" : "https://implenia.com/"},
    "swissloop_sponsor_logos_06-kluber-lubrication": {"url" : "https://www.klueber.com/ch/de/"},
    "swissloop_sponsor_logos_06-vivi-kola": {"url" : "https://vivikola.ch/en/"},
    "swissloop_sponsor_logos_07-nespresso": {"url" : "https://www.nespresso.com/pro"},
    "swissloop_sponsor_logos_07-stickerei-stoiber": {"url" : "https://www.stickerei-stoiber.ch/"},
    "swissloop_sponsor_logos_07-swissrail": {"url" : "https://www.swissrail.com/"},
    "swissloop_sponsor_logos_08-hasler": {"url" : "https://www.hasler.ch/"},
    "swissloop_sponsor_logos_08-murr-elektronik": {"url" : "https://www.murrelektronik.com/"},
    "swissloop_sponsor_logos_09-astra": {"url" : "https://www.astra.admin.ch/astra/de/home.html"},
    "swissloop_sponsor_logos_09-liebherr": {"url" : "https://www.liebherr.com/"},
    "swissloop_sponsor_logos_10-kindlimann": {"url" : "https://www.kindlimann.ch/"},
    "swissloop_sponsor_logos_10-maedler": {"url" : "https://www.maedler.ch/"},
    "swissloop_sponsor_logos_11-spraying-systems": {"url" : "https://www.ssco.ch/"},
    "swissloop_sponsor_logos_11-twing": {"url" : "https://www.twing.swiss/"},
    "swissloop_sponsor_logos_13-schilliger-holz": {"url" : "https://www.schilliger.ch/"},
    "swissloop_sponsor_logos_12-nikon": {"url" : "https://www.nikon.ch/"},
    "swissloop_sponsor_logos_08-alpha-associates": {"url" : "https://alpha-associates.ch/"},
    "swissloop_sponsor_logos_14-wika": {"url": "https://www.wika.ch/"},
    "swissloop_sponsor_logos_15-meyer-blechtechnik": {"url": "https://www.meyer-blechtechnik.ch/"},
    "swissloop_sponsor_logos_16-sick-logo": {"url": "http://www.sick.ch/"},
    "swissloop_sponsor_logos_17-selec": {"url": "https://www.selec.ch"},
    "swissloop_sponsor_logos_12-pomtava": {"url": "https://www.pomtava.com/"},
    "swissloop_sponsor_logos_18-kbt-treuhand": {"url": "http://kbt.ch/"},
    "swissloop_sponsor_logos_19-kbt-revisions": {"url": "http://kbt.ch/"},
    "swissloop_sponsor_logos_13-dopag": {"url": "https://www.dopag.ch/"},
    "swissloop_sponsor_logos_09-anb": {"url": "https://werkzeugbau.ch/"},
    "swissloop_sponsor_logos_08-imhof-sew": {"url": "https://www.imhof-sew.ch/startseite.html"},
    "swissloop_sponsor_logos_10-ernst-goehner": {"url": "http://www.ernst-goehner-stiftung.ch"},
    "swissloop_sponsor_logos_14-kohler": {"url": "https://www.kohler.ch"},
    "swissloop_sponsor_logos_09-revendo": {"url": "https://revendo.ch/"},
    "swissloop_sponsor_logos_15-qualicut": {"url": "https://www.qualicut.ch/"},
    "swissloop_sponsor_logos_10-ggt": {"url": "https://gleitlager.ch/"},
    "swissloop_sponsor_logos_16-vse": {"url": "https://www.vse-flow.com/"},
    "swissloop_sponsor_logos_20-sireg": {"url": "https://www.sireggeotech.it/"},
    "swissloop_sponsor_logos_17-qperior": {"url": "https://www.q-perior.com/"},
    "swissloop_sponsor_logos_02-baugarten-zurich": {"url": "https://www.baugarten-zuerich.ch/"},
    "swissloop_sponsor_logos_21-haba": {"url": "https://www.haba.ch/"},
    "swissloop_sponsor_logos_18-wetter-ag": {"url": "https://www.wetter-ag.ch/"},
    "swissloop_sponsor_logos_11-hansa-flex": {"url": "https://ch.hansa-flex.com/"},
    "swissloop_sponsor_logos_12-schneider-electric": {"url": "https://www.se.com/"},
    "swissloop_sponsor_logos_13-hsg": {"url": "https://www.unisg.ch/"},
    "swissloop_sponsor_logos_14-tiefbauamt": {"url": "https://www.stadt-zuerich.ch/ted/de/index/taz.html"},
    "swissloop_sponsor_logos_15-swiss": {"url": "https://www.swissworldcargo.com/"},
    "swissloop_sponsor_logos_11-lombardi": {"url": "https://www.lombardi.ch/"},
    "swissloop_sponsor_logos_23-egolf": {"url": "https://www.egolfverpackungsag.ch/"},
    "swissloop_sponsor_logos_22-kaeser": {"url": "https://ch.kaeser.com/"},
    "swissloop_sponsor_logos_01-geb-weiss": {"url": "https://www.gw-world.com/"},
    "swissloop_sponsor_logos_02-ixblue": {"url": "https://www.ixblue.com/"},
    "swissloop_sponsor_logos_19-muttoni": {"url": "http://www.muttonicostruzioni.ch/"},
    "swissloop_sponsor_logos_20-frutiger": {"url": "https://frutiger.com/"},
    "swissloop_sponsor_logos_12-glencore": {"url": "https://www.glencore.ch/"},
    "swissloop_sponsor_logos_22-svs": {"url": "https://www.svs.ch/"},
    "swissloop_sponsor_logos_21-fgu": {"url": "https://www.swisstunnel.ch/"},
    "swissloop_sponsor_logos_24-winkler": {"url": "https://www.winkler.eu/"},
    "swissloop_sponsor_logos_25-alulineartechnik": {"url": "https://www.alulineartechnik.ch/"},
    "swissloop_sponsor_logos_26-prusa": {"url": "https://www.prusa3d.com/"},
    "swissloop_sponsor_logos_16-sottas": {"url": "https://www.sottas.ch/"},
    "swissloop_sponsor_logos_27-carify": {"url": "https://www.carify.com/"},
    "swissloop_sponsor_logos_23-tph": {"url": "https://www.tph-bausysteme.com/"},
    "swissloop_sponsor_logos_28-elcase": {"url": "https://elcase.ch"},
    "swissloop_sponsor_logos_26-kaeser": {"url": "https://us.kaeser.com/"},
    "swissloop_sponsor_logos_29-doka": {"url": "https://www.doka.com/"},
    "swissloop_sponsor_logos_30-dhl": {"url": "https://www.dhl.com/"},
    }
  

  return (
  <Layout headerImg={"team"}>
    <SEO title="Partners" />
    <h1>Why we should work together</h1>
    <h4>Challenging the status quo</h4>
    <p css={css`margin-bottom: 4em;`}>
      Swissloop Tunneling is creating synergies with industry and university partners to build a network in order to revolutionize the tunneling industry.
      <br/>Are you interested in a partnership? Contact us for more information: <a href="mailto:info@swisslooptunneling.ch">info@swisslooptunneling.ch</a>
    </p>

    <h1>Founding Partners</h1>
    <PartnerWrapper css={css`
      min-height: 200px;
      margin-bottom: 4em;
    `}>
      <PartnerLabel><span>Founding&nbsp;Partner</span></PartnerLabel>
      <LogoWrapper>
      {
        foundingImages.map((element) => (
          <a target="_blank" rel="noopener noreferrer" key={element.node.name} css={css`flex: 0 1 300px;`} href={meta[element.node.name] ? meta[element.node.name].url : ''}>
            <GatsbyImage css={css`margin: 2em 1em;`} alt={meta[element.node.name] ? meta[element.node.name].name : 'Swissloop Tunneling Partner'} image={element.node.childImageSharp.gatsbyImageData} />
          </a>
        ))
      }
      </LogoWrapper>
    </PartnerWrapper>

    <h1>Partners</h1>
    <PartnerWrapper>
      <PartnerLabel><span>Main&nbsp;Partner</span></PartnerLabel>
      <LogoWrapper>
      {
        partnerMainImages.map((element) => (
          <a target="_blank" rel="noopener noreferrer" key={element.node.name} css={css`flex: 0 1 350px;`} href={meta[element.node.name] ? meta[element.node.name].url : ''}>
            <GatsbyImage css={css`margin: 2em 1em;`} alt={meta[element.node.name] ? meta[element.node.name].name : 'Swissloop Tunneling Partner'} image={element.node.childImageSharp.gatsbyImageData} />
          </a>
        ))
      }
      </LogoWrapper>
    </PartnerWrapper>

    <PartnerWrapper css={css`
      /* min-height: 200px; */
      &:hover {
        & > :first-child {
          background-color: #E5E4E2;
          color: black;
          
        } 
      }
    `}>
      <PartnerLabel><span>Platinum&nbsp;Partner</span></PartnerLabel>
      <LogoWrapper>
      {
        partnerPlatinumImages.map((element) => (
          <a target="_blank" rel="noopener noreferrer" key={element.node.name} css={css`flex: 0 1 300px;`} href={meta[element.node.name] ? meta[element.node.name].url : ''}>
            <GatsbyImage css={css`margin: 2em 1em;`} alt={meta[element.node.name] ? meta[element.node.name].name : 'Swissloop Tunneling Partner'} image={element.node.childImageSharp.gatsbyImageData} />
          </a>
        ))
      }
      </LogoWrapper>
    </PartnerWrapper>

    <PartnerWrapper css={css`
      &:hover {
        & > :first-child {
          background-color: gold;
          color: black;
        } 
      }
    `}>
      <PartnerLabel><span>Gold&nbsp;Partner</span></PartnerLabel>
      <LogoWrapper>
      {
        partnerGoldImages.map((element) => (
          <a target="_blank" rel="noopener noreferrer" key={element.node.name} css={css`flex: 0 1 200px;`} href={meta[element.node.name] ? meta[element.node.name].url : ''}>
            <GatsbyImage css={css`margin: 2em 1em;`} alt={meta[element.node.name] ? meta[element.node.name].name : 'Swissloop Tunneling Partner'} image={element.node.childImageSharp.gatsbyImageData} />
          </a>
        ))
      }
      </LogoWrapper>
    </PartnerWrapper>

    <PartnerWrapper css={css`
      &:hover {
        & > :first-child {
          background-color: silver;
          color: black;
        } 
      }
    `}>
      <PartnerLabel><span>Silver&nbsp;Partner</span></PartnerLabel>
      <LogoWrapper>
      {
        partnerSilverImages.map((element) => (
          <a target="_blank" rel="noopener noreferrer" key={element.node.name} css={css`flex: 0 1 180px;`} href={meta[element.node.name] ? meta[element.node.name].url : ''}>
            <GatsbyImage css={css`margin: 2em 1em;`} alt={meta[element.node.name] ? meta[element.node.name].name : 'Swissloop Tunneling Partner'} image={element.node.childImageSharp.gatsbyImageData} />
          </a>
        ))
      }
      </LogoWrapper>
    </PartnerWrapper>
    
    <PartnerWrapper css={css`
      &:hover {
        & > :first-child {
          background-color: #cd7f32;
          color: white;
        } 
      }
    `}>
      <PartnerLabel><span>Bronze&nbsp;Partner</span></PartnerLabel>
      <LogoWrapper>
      {
        partnerBronzeImages.map((element) => (
          <a target="_blank" rel="noopener noreferrer" key={element.node.name} css={css`flex: 0 1 180px;`} href={meta[element.node.name] ? meta[element.node.name].url : ''}>
            <GatsbyImage css={css`margin: 2em 1em;`} alt={meta[element.node.name] ? meta[element.node.name].name : 'Swissloop Tunneling Partner'} image={element.node.childImageSharp.gatsbyImageData} />
          </a>
        ))
      }
      </LogoWrapper>
    </PartnerWrapper>

    <PartnerWrapper css={css`
      &:hover {
        & > :first-child {
        } 
      }
    `}>
      <PartnerLabel><span>Patron&nbsp;Partner</span></PartnerLabel>
      <LogoWrapper>
      {
        partnerPatronImages.map((element) => (
          <a target="_blank" rel="noopener noreferrer" key={element.node.name} css={css`flex: 0 1 180px;`} href={meta[element.node.name] ? meta[element.node.name].url : ''}>
            <GatsbyImage css={css`margin: 2em 1em;`} alt={meta[element.node.name] ? meta[element.node.name].name : 'Swissloop Tunneling Partner'} image={element.node.childImageSharp.gatsbyImageData} />
          </a>
        ))
      }
      </LogoWrapper>
    </PartnerWrapper>

  </Layout>
  )
}

export default PartnersPage
export const pageQuery = graphql`
  query {
    partnerMainImages: allFile(filter: {relativeDirectory: {eq: "partners/main"}}, sort: {order: ASC, fields: name}) {
			edges {
				node {
					childImageSharp {
            gatsbyImageData(
              width: 350
              quality: 90
              layout: CONSTRAINED
              placeholder: TRACED_SVG
            )
          },
					name
				}
			}
		}
    foundingImages: allFile(filter: {relativeDirectory: {eq: "partners/founding"}}, sort: {order: ASC, fields: name}) {
			edges {
				node {
					childImageSharp {
            gatsbyImageData(
              width: 300
              quality: 90
              layout: CONSTRAINED
              placeholder: TRACED_SVG
            )
          },
					name
				}
			}
		}
    partnerPlatinumImages: allFile(filter: {relativeDirectory: {eq: "partners/platinum"}}, sort: {order: ASC, fields: name}) {
			edges {
				node {
					childImageSharp {
            gatsbyImageData(
              width: 300
              quality: 90
              layout: CONSTRAINED
              placeholder: TRACED_SVG
            )
          },
					name
				}
			}
		}
    partnerGoldImages: allFile(filter: {relativeDirectory: {eq: "partners/gold"}}, sort: {order: ASC, fields: name}) {
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
    partnerSilverImages: allFile(filter: {relativeDirectory: {eq: "partners/silver"}}, sort: {order: ASC, fields: name}) {
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
    partnerBronzeImages: allFile(filter: {relativeDirectory: {eq: "partners/bronze"}}, sort: {order: ASC, fields: name}) {
			edges {
				node {
					childImageSharp {
            gatsbyImageData(
              width: 200
              quality: 90
              layout: CONSTRAINED
              placeholder: TRACED_SVG
            )
          },
					name
				}
			}
		}
    partnerPatronImages: allFile(filter: {relativeDirectory: {eq: "partners/patron"}}, sort: {order: ASC, fields: name}) {
			edges {
				node {
					childImageSharp {
            gatsbyImageData(
              width: 200
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