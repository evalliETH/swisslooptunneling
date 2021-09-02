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
import Layla from "../components/layla"


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
      "slug": "layla-just",
      "name": "Layla Just",
      "position": "Head Communication"
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
      "slug": "",
      "name": "",
      "position": ""
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
      "slug": "luca-entremont",
      "name": "Luca Entremont",
      "position": "Lead Production"
    },
    {
      "slug": "elena-krasnova",
      "name": "Elena Krasnova",
      "position": "Lead Hydraulics"
    },
    {
      "slug": "eric-walti",
      "name": "Eric Wälti",
      "position": "Lead Structural"
    },
    {
      "slug": "karl-werner",
      "name": "Karl Werner",
      "position": "Structural"
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
      "slug": "matej-durajka",
      "name": "Matej Durajka",
      "position": "Lead Power Systems"
    },
    {
      "slug": "saad-himmi",
      "name": "Saad Himmi",
      "position": "Lead Navigation"
    },
    {
      "slug": "tarek-alakmeh",
      "name": "Tarek Alakmeh",
      "position": "Lead Telemetry & Website"
    },
    {
      "slug": "judy-hajar",
      "name": "Judy Hajar",
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
      "position": "Control Systems"
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

  const civilTeam = [
    {
      "slug": "miguel-figueiredo-nunes",
      "name": "Miguel Figueiredo Nunes",
      "position": "Technical Project Manager"
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

  const layla1 = businessImages.find(image => image.node.name === "layla-just-1");
  const layla2 = businessImages.find(image => image.node.name === "layla-just-2");
  const tarek = electricalImages.find(image => image.node.name === "tarek-alakmeh");

  const businessDivision = (
    <DivisionWrapper key="business" css={css`background-color: ${color.BGLIGHT};`}>
      <h2>Business</h2>
      <TeamGrid>
      <Layla 
        name={"Layla Just"} 
        position={"Head Communication"}
        image={layla1 ? layla1.node.childImageSharp.gatsbyImageData : null}
        image2={layla2 ? layla2.node.childImageSharp.gatsbyImageData : null}
        image3={tarek ? tarek.node.childImageSharp.gatsbyImageData : null} />
      {businessTeam.map((person, i) => {
          let imageData = businessImages.find(image => image.node.name === person.slug);
          return (
          person.slug != "layla-just" ? 
          <Person key={person.slug !== "" ? person.slug : i} 
            name={person.name } 
            position={person.position}
            image={imageData ? imageData.node.childImageSharp.gatsbyImageData : null}
            />
          : ""
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
      tracedSVGOptions={{ background: "black", color: "white", blackOnWhite: false }}
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