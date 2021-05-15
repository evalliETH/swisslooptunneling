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
          style={{
            marginTop: `2rem`,
            display: 'none',
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
