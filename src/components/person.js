import React from "react"
import Image from "gatsby-image"

import { css } from "@emotion/react"
import styled from "@emotion/styled"

const Person = (props) => {
  return (
    <div className="person">
      {props.image != null && 
        <Image css={css`border-radius: 50%;`} fluid={props.image} />
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
