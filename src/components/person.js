import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import { css } from "@emotion/react"
import styled from "@emotion/styled"

const Person = (props) => {
  return (
    <div className="person">
      {props.image != null && 
        <GatsbyImage css={css`
         & img {
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          border-radius: 50%;
         }
          `} image={props.image} alt={props.name} />
      }
      <div css={css`
        text-align: center;
        margin-top: 1em;

        & span:nth-of-type(2) {
          display: block;
          font-size: 0.85em;
        }

        `}>
        <span>{props.name}</span>
        {props.position != null && <span>{props.position}</span> }
      </div>
    </div>
  )
}

export default Person
