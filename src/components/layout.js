/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { css } from "@emotion/react"

import Header from "./header"
import "./layout.css"


const Layout = ({ fullwidth, headerImg, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header displayOverlap={fullwidth} headerImg={headerImg} siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        css={css`
          margin: 0 auto;
          max-width: ${fullwidth ? '100%' : '1260px'};
          padding: 0 1.0875rem 1.45rem;
        `}
      >
        <main css={css`margin-top: ${fullwidth ? '0' : '150px'};`}>{children}</main>
        <footer
          css={css`
            max-width: 1260px;
            margin: 4em auto 2em auto;
            border-top: 1px #ffffff solid;
            padding-top: 2em;
          `}
        >
          <div css={css`
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            & > a {
              margin-left: 20px;
            }
            & > div:first-of-type {
              margin-left: 5px;
            }
            & > a:nth-child(2) {
              margin-left: auto;
            }
            @media (max-width: 480px) {
              & > div:first-of-type {
                display: none;
              }
            }
          `}>
            <div>
            © {new Date().getFullYear()}, 
            {` `}
            <a href="https://swisslooptunneling.ch">Swissloop Tunneling</a>
            </div>
            <a href="https://www.youtube.com/channel/UCgMwCemdxHXxe9zxgKpRWsw" target="_blank" rel="noopener noreferrer" >
              <StaticImage
                src="../images/socialicons/youtube.png"
                quality={95}
                placeholder={"tracedSVG"}
                layout="constrained"
                height={20}
                //tracedSVGOptions={{ background: "black", color: "yellow", blackOnWhite: false }}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Swissloop Tunneling"
              />
            </a>
            <a href="https://www.instagram.com/swissloop_tunneling" target="_blank" rel="noopener noreferrer" >
              <StaticImage
                src="../images/socialicons/instagram.png"
                quality={95}
                placeholder={"tracedSVG"}
                layout="constrained"
                height={20}
                //tracedSVGOptions={{ background: "black", color: "yellow", blackOnWhite: false }}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Swissloop Tunneling"
              />
            </a>
            <a href="https://facebook.com/swisslooptunneling/" target="_blank" rel="noopener noreferrer" >
              <StaticImage
                src="../images/socialicons/facebook.png"
                quality={95}
                placeholder={"tracedSVG"}
                layout="constrained"
                height={20}
                //tracedSVGOptions={{ background: "black", color: "yellow", blackOnWhite: false }}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Swissloop Tunneling"
              />
            </a>
            <a href="https://www.linkedin.com/company/swissloop-tunneling/" target="_blank" rel="noopener noreferrer" >
              <StaticImage
                src="../images/socialicons/linkedin.png"
                quality={95}
                placeholder={"tracedSVG"}
                layout="constrained"
                height={20}
                //tracedSVGOptions={{ background: "black", color: "yellow", blackOnWhite: false }}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Swissloop Tunneling"
              />
            </a>
            <a href="https://twitter.com/swissloop_t" target="_blank" rel="noopener noreferrer" >
              <StaticImage
                src="../images/socialicons/twitter.png"
                quality={95}
                placeholder={"tracedSVG"}
                layout="constrained"
                height={20}
                //tracedSVGOptions={{ background: "black", color: "yellow", blackOnWhite: false }}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Swissloop Tunneling"
              />
            </a>
          </div>

        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
