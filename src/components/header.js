import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import MobileNav from "./mobileNav"
import {color, spacing, screen} from "../constants"

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: auto 1.5em;

  &:hover {
    opacity: 0.8;
  }
`

const headerCss = css`
  margin-bottom: 1.45rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 2;
  background-color: ${color.BGTRANSPARENT};
`

const headerCssOverlap = css`
  margin-bottom: 1.45rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 2;
`


const Header = ({ displayOverlap, headerImg, siteTitle }) => (
  
  <header css={displayOverlap ? headerCssOverlap : headerCss} >
    <div
      css={css`
        margin: 0 auto;
        max-width: 1260px;
        padding: 1.45rem 1.0875rem;
        display: flex;
        flex-basis: 1260px;
        flex-direction: row;
        justify-content: space-between;


      `}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {/* {siteTitle} */}
          <StaticImage
            src="../images/swissloop-tunneling-logo.png"
            placeholder="tracedSVG"
            height={50}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="A Gatsby astronaut"
            css={css`margin-bottom: -8px;`}
          />
        </Link>
      </h1>
      <div css={css`
        display: flex;
        @media (max-width: ${screen.tablet}) {
          display: none;
        }`}>
        <NavLink to="/tbm">
          TBM
        </NavLink>
        <NavLink to="/team">
          Team
        </NavLink>
        <NavLink to="/partners">
          Partners
        </NavLink>
        <NavLink to="/media">
          Media
        </NavLink>
        <NavLink to="/contact">
          Contact
        </NavLink>
      </div>
      {/* Mobile Header */}
      <div css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0;
        
        @media (min-width: ${screen.xsPhone}) {
          margin: 0;
        }
        @media (min-width: ${screen.tablet}) {
          display: none;
        }
      `}>
        <Link to="/">
        </Link>
        <MobileNav />
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
