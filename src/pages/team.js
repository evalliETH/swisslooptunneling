import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

import { css } from "@emotion/react"
import styled from "@emotion/styled"
import {spacing, color} from "../constants"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Person from "../components/person"


const TeamGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-left: ${-1*spacing.BASE};
  margin-right: ${-1*spacing.BASE};

  & > div {
    flex: 0 1 210px;
    margin: ${spacing.BASE};
  }
`

const DivisionWrapper = styled.div`
  padding: ${spacing.DOUBLE};
  margin-top: 80px;
`

const TeamPage = ({data}) => {
  const boardImages = data.boardImages.edges;
  const businessImages = data.businessImages.edges;
  const mechanicalImages = data.mechanicalImages.edges;
  const electricalImages = data.electricalImages.edges;
  const civilImages = data.civilImages.edges;

  const boardTeam = [
    {
      "slug": "stefan-kaspar",
      "name": "Stefan Kaspar",
      "position": "Board Member"
    },
    {
      "slug": "miguel-a-quero-corrales",
      "name": "Miguel A. Quero Corrales",
      "position": "Board Member"
    },
    {
      "slug": "darius-stulz",
      "name": "Darius Stulz",
      "position": "Board Member"
    },
    {
      "slug": "bernhard-schranz",
      "name": "Bernhard Schranz",
      "position": "Board Member"
    }
  ]
  const businessTeam = [ 
    {
      "slug": "chrissie-meyer",
      "name": "Chrissie Meyer",
      "position": "Co-Head Communication"
    },
    {
      "slug": "layla-just",
      "name": "Layla Just",
      "position": "Co-Head Communication & Design"
    },
    {
      "slug": "fabian-wiedemeier",
      "name": "Fabian Wiedemeier",
      "position": "Communication & Design"
    },
    {
      "slug": "theresa-lanschutzer",
      "name": "Theresa Lanschützer",
      "position": "Communication"
    },
    {
      "slug": "fabian-brunner",
      "name": "Fabian Brunner",
      "position": "Head Design"
    },
    {
      "slug": "joel-amstutz",
      "name": "Joël Amstutz",
      "position": "Design"
    },
    {
      "slug": "tarek-alakmeh",
      "name": "Tarek Alakmeh",
      "position": "Website"
    },
    {
      "slug": "marc-bar",
      "name": "Marc Bär",
      "position": "Legal"
    },
    {
      "slug": "nadja-oswald",
      "name": "Nadja Oswald",
      "position": "Head Project Management"
    },
    {
      "slug": "luca-erdmann",
      "name": "Luca Erdmann",
      "position": "Project Management"
    },
    {
      "slug": "florian-berger",
      "name": "Florian Berger",
      "position": "Project Management"
    },
    {
      "slug": "rafael-dubach",
      "name": "Rafael Dubach",
      "position": "Head Strategic Management"
    },
  ]

  const mechanicalTeam = [
    {
      "slug": "eugenio-valli",
      "name": "Eugenio Valli",
      "position": "Head Mechanical"
    },
    {
      "slug": "jago-iranyi",
      "name": "Jago Irányi",
      "position": "Soil Removal"
    },
    {
      "slug": "sofya-aman",
      "name": "Sofya Aman",
      "position": "Soil Removal"
    },
    {
      "slug": "luca-entremont",
      "name": "Luca Entremont",
      "position": "Soil Removal"
    },
    {
      "slug": "elena-krasnova",
      "name": "Elena Krasnova",
      "position": "Lead Hydraulics"
    },
    {
      "slug": "kire-micev",
      "name": "Kire Micev",
      "position": "Hydraulics"
    },
    {
      "slug": "eric-walti",
      "name": "Eric Wälti",
      "position": "Lead Structural"
    },
    {
      "slug": "matteo-foschi",
      "name": "Matteo Foschi",
      "position": "Structural"
    },
    {
      "slug": "karl-werner",
      "name": "Karl Werner",
      "position": "Structural"
    },
    {
      "slug": "maxim-rojas",
      "name": "Maxim Rojas",
      "position": "Tunnel Lining"
    },
    {
      "slug": "felix-von-samson",
      "name": "Felix von Samson",
      "position": "Tunnel Lining"
    },
    {
      "slug": "ole-mueller",
      "name": "Ole Müller",
      "position": "Tunnel Lining"
    },
    {
      "slug": "pranav-rajyaguru",
      "name": "Pranav Rajyaguru",
      "position": "FEA Simulation"
    },
    {
      "slug": "albin-punnilathil",
      "name": "Albin Punnilathil",
      "position": "Driving Surface"
    },
    {
      "slug": "",
      "name": "",
      "position": ""
    },
    {
      "slug": "",
      "name": "",
      "position": ""
    },
  ]

  const electricalTeam = [
    {
      "slug": "josh-shao",
      "name": "Josh Shao",
      "position": "Head Electrical"
    },
    {
      "slug": "moritz-kuntze",
      "name": "Moritz Kuntze",
      "position": "Lead LV Electronics & Software"
    },
    {
      "slug": "junwoo-hwang",
      "name": "Junwoo Hwang",
      "position": "LV Electronics"
    },
    {
      "slug": "matej-durajka",
      "name": "Matej Durajka",
      "position": "Lead Power Systems"
    },
    {
      "slug": "meindi-zahiri",
      "name": "Meindi Zahiri",
      "position": "Lead Telemetry"
    },
    {
      "slug": "saad-himmi",
      "name": "Saad Himmi",
      "position": "Lead Navigation"
    },
    {
      "slug": "judy-hajar",
      "name": "Judy Hajar",
      "position": "Navigation"
    },
    {
      "slug": "reda-el-azzouzi",
      "name": "Reda El Azzouzi",
      "position": "Navigation"
    },
    {
      "slug": "aashna-majmudar",
      "name": "Aashna Majmudar",
      "position": "Navigation"
    },
    {
      "slug": "tianhong-gan",
      "name": "Tianhong Gan",
      "position": "Navigation"
    },
    {
      "slug": "nigalsan-ravichandran",
      "name": "Nigalsan Ravichandran",
      "position": "Navigation"
    },
    {
      "slug": "",
      "name": "",
      "position": ""
    },
  ]

  const civilTeam = [
    {
      "slug": "miguel-figueiredo-nunes",
      "name": "Miguel Figueiredo Nunes",
      "position": "Head Civil & Mech"
    },
    {
      "slug": "davide-ferrari",
      "name": "Davide Ferrari",
      "position": "Head Civil"
    },
    {
      "slug": "lukas-heller",
      "name": "Lukas Heller",
      "position": "Lead Soil Removal"
    },
    {
      "slug": "sebastian-harder",
      "name": "Sebastian Harder",
      "position": "Lead Tunnel Lining"
    },
    {
      "slug": "yannick-kummer",
      "name": "Yannick Kummer",
      "position": "Tunnel Lining"
    },
    {
      "slug": "ariane-hoek",
      "name": "Ariane Hoek",
      "position": "Lead Starting Platform"
    },
    {
      "slug": "",
      "name": "",
      "position": ""
    },
    {
      "slug": "",
      "name": "",
      "position": ""
    },
  ]

  const businessDivision = (
    <DivisionWrapper key="business" css={css`background-color: ${color.BGLIGHT};`}>
      <h2>Business</h2>
      <TeamGrid>
      {businessTeam.map((person, i) => {
          let imageData = businessImages.find(image => image.node.name === person.slug);
          return (
          <Person key={person.slug !== "" ? person.slug : i} 
            name={person.name } 
            position={person.position}
            image={imageData ? imageData.node.childImageSharp.gatsbyImageData : null} />
          )
        })}
      </TeamGrid>
    </DivisionWrapper>
  )

  const mechanicalDivision = (
    <DivisionWrapper key="mechanical" css={css`background-color: ${color.BGLIGHT};`}>
      <h2>Mechanical Engineers</h2>
      <TeamGrid>
      {mechanicalTeam.map((person, i) => {
          let imageData = mechanicalImages.find(image => image.node.name === person.slug);
          return (
          <Person key={person.slug !== "" ? person.slug : i}
            name={person.name } 
            position={person.position}
            image={imageData ? imageData.node.childImageSharp.gatsbyImageData : null} />
          )
        })}
      </TeamGrid>
    </DivisionWrapper>
  )

  const electricalDivision = (
    <DivisionWrapper key="electrical" css={css`background-color: ${color.BGLIGHT};`}>
      <h2>Electrical Engineers</h2>
      <TeamGrid>
      {electricalTeam.map((person, i) => {
          let imageData = electricalImages.find(image => image.node.name === person.slug);
          return (
          <Person key={person.slug !== "" ? person.slug : i}
            name={person.name } 
            position={person.position}
            image={imageData ? imageData.node.childImageSharp.gatsbyImageData : null} />
          )
        })}
      </TeamGrid>
    </DivisionWrapper>
  )

  const civilDivision = (
    <DivisionWrapper key="civil" css={css`background-color: ${color.BGLIGHT};`}>
      <h2>Civil Engineers</h2>
      <TeamGrid>
      {civilTeam.map((person, i) => {
          let imageData = civilImages.find(image => image.node.name === person.slug);
          return (
          <Person key={person.slug !== "" ? person.slug : i}
            name={person.name } 
            position={person.position}
            image={imageData ? imageData.node.childImageSharp.gatsbyImageData : null} />
          )
        })}
      </TeamGrid>
    </DivisionWrapper>
  )

  const divisionsArray = [businessDivision, mechanicalDivision, electricalDivision, civilDivision]
  //divisions.sort(() => Math.random() - 0.5); // randomize order

  const [divisions, setDivisions] = useState( divisionsArray )

  useEffect(() => {
    function shuffle(array) {
      return [...array].sort(() => Math.random() - 0.5);
    }
    setDivisions( shuffle(divisions) )
  }, [])

  return (
  <Layout headerImg={"team"}>
    <SEO title="Team" />
    <StaticImage
      src="../images/team-header.jpg"
      height={500}
      quality={95}
      placeholder={"tracedSVG"}
      //tracedSVGOptions={{ background: "black", color: "yellow", blackOnWhite: true }}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      css={css`width: 100%; margin-bottom: 50px;`}
    />
    <h1>The Team behind Swissloop Tunneling</h1>
    <p>
        Swissloop Tunneling is the official team of ETH Zürich to compete in Elon Musk’s Not-A-Boring-Competition revolutionizing the tunneling industry in order to build cheaper Hyper(loop) tubes in the future.
        <br/>The team was newly founded in late 2020 and brings together over 40 students with expertise in mechanical/civil- and electrical engineering as well as various business-related fields. Our team draws on the experience of the SpaceX Hyperloop Competition and consists of former members of the Swissloop Team of 2018/19, which won second place and received the Innovation Award.
    </p>

    <div>
      
    </div>
    <DivisionWrapper css={css`background-color: ${color.BGLIGHT};`}>
      <h2>Board</h2>
      <TeamGrid>
      {boardTeam.map((person,i) => {
          let imageData = boardImages.find(image => image.node.name === person.slug);

          return (
          <Person key={person.slug !== "" ? person.slug : i} 
            name={person.name} 
            position={person.position}
            image={imageData ? imageData.node.childImageSharp.gatsbyImageData : null} />
          )
        })}
      </TeamGrid>
    </DivisionWrapper>

    {
      divisions.map((division) => (
        division
      ))
    }

    {/* { businessDivision } 
    {mechanicalDivision} 
    {electricalDivision} 
    {civilDivision} */}
  </Layout>
  )
}

export default TeamPage
export const pageQuery = graphql`
  query {
    boardImages: allFile(filter: {relativeDirectory: {eq: "team/board"}}) {
			edges {
				node {
					childImageSharp {
            gatsbyImageData(
              width: 210
              height: 210
              quality: 80
              layout: CONSTRAINED
              placeholder: TRACED_SVG
            )
          },
					name
				}
			}
		},
    businessImages: allFile(filter: {relativeDirectory: {eq: "team/business"}}) {
			edges {
				node {
					childImageSharp {
            gatsbyImageData(
              width: 210
              height: 210
              quality: 80
              layout: CONSTRAINED
              placeholder: TRACED_SVG
            )
          },
					name
				}
			}
		},
    mechanicalImages: allFile(filter: {relativeDirectory: {eq: "team/mechanical"}}) {
			edges {
				node {
					childImageSharp {
            gatsbyImageData(
              width: 210
              height: 210
              quality: 80
              layout: CONSTRAINED
              placeholder: TRACED_SVG
            )
          },
					name
				}
			}
		},
    electricalImages: allFile(filter: {relativeDirectory: {eq: "team/electrical"}}) {
			edges {
				node {
					childImageSharp {
            gatsbyImageData(
              width: 210
              height: 210
              quality: 80
              layout: CONSTRAINED
              placeholder: TRACED_SVG
            )
          },
					name
				}
			}
		},
    civilImages: allFile(filter: {relativeDirectory: {eq: "team/civil"}}) {
			edges {
				node {
					childImageSharp {
            gatsbyImageData(
              width: 210
              height: 210
              quality: 80
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