import React, { Component, Fragment } from 'react'
import styled from "@emotion/styled"
import { Global, css } from "@emotion/react"
import {color, spacing, screen} from "../constants"
import { Link } from "gatsby"

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`

class mobileNav extends Component {
  state = {
    showNav: false,
  }

  openNav = () => {
    this.setState({ showNav: true })
  }

  closeNav = () => {
    this.setState({ showNav: false })
  }

  render() {
    const { showNav } = this.state

    return (
        <>
        <div className="mobile-nav">
            <StyledInput />
            <StyledLabel onClick={this.openNav}>
                <Line></Line>
                <Line></Line>
                <Line></Line>
            </StyledLabel>
        </div>   
        <MobileNav visible={showNav}
          css={css`
            @media (max-width: ${screen.xsPhone}) {
              a {
                font-size: 42px;
              }
            }           
          `}
        >
            <a href="#" css={css`
                text-transform: lowercase;
                position: absolute;
                top: 0;
                right: 22px;
                
                @media (max-width: ${screen.xsPhone}) {

                }
                `} onClick={this.closeNav}>&#10005;</a>
            <NavLink to="/">
              Start
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
        </MobileNav>
        </>
    )
  }
}

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(255,255,255,0.5);
`

const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background: #be9e5500; 
    width: 50px; 
    height: auto; 
    position: relative; 
    margin-left: auto; margin-right: auto;
    border-radius: 4px; 
    align-self: center;
`

const StyledInput = styled.input`
    display: none;
`

const Line = styled.span`
    margin: 4px auto;
    height: 4px; width: 80%; 
    background: #ffffff; border-radius: 1px;
    & :first-of-type {
        margin-top: 13px;
    }
    & :last-of-type {
        margin-bottom: 10px;
    }

`

const MobileNav = styled.div`
    z-index: 2;
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${color.BG};
    transition: all 0.25s;

    opacity: ${props => (props.visible ? '1' : '0')};
    visibility: ${props => (props.visible ? 'visible' : 'hidden')};
    
    & > a {
        font-size: 3em;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
        text-decoration: none;
    }
    & a[aria-current="page"] {
      opacity: 0.5;
      cursor: not-allowed;
    }
`


export default mobileNav