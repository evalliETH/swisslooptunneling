import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import { css } from "@emotion/react"
import styled from "@emotion/styled"

const Divider = (props) => {
  return (
    <div css={css`
        width: 100%;
        height: 2px;
        margin-top: 2em;
        margin-bottom: 3em;
        background-color: ${props.showBorder ? "white" : "transparent"};`}>
    </div>
  )
}

export default Divider
