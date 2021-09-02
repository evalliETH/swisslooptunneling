import React, {useState} from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import { css } from "@emotion/react"
import styled from "@emotion/styled"

const Layla = (props) => {
  const [costaRicaClickCounter, setCostaRicaClickCounter] = useState(0)
  

  const costaRicaClick = () => {
    setCostaRicaClickCounter(costaRicaClickCounter+1)
    console.log("clicked: "  + costaRicaClickCounter)
  }

  // const layla1 = businessImages.find(image => image.node.name === "layla-just-1");
  // const layla2 = businessImages.find(image => image.node.name === "layla-just-2");

  // const [laylaImg, setLaylaImg] = useState(<div key={"layla-just-1"} onDoubleClick={costaRicaClick}><Person
  //   name={"Layla Just" + costaRicaClickCounter} 
  //   position={"Head Communiiication"}
  //   image={layla1 ? (layla1.node.childImageSharp.gatsbyImageData) : null}
  //   />
  // </div>)

  const imgCss = css`
  & img {
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          border-radius: 50%;
         }`
  const imgCss2 = css`

  @keyframes glow {
    from {
      box-shadow: 0px 0px 150px 150px #0ff;
    }
    to {
      box-shadow: 0px 0px 150px 150px #0af;
    }
  }

  @keyframes shake {
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    30% { transform: translate(3px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(3px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(1px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
  }
  overflow: visible;
  & img {
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    animation: glow 1s 15 alternate, shake 2s infinite;
  }
  `

  return (
    <>
    {costaRicaClickCounter >= 10 ? (
      <div className="person" onClick={costaRicaClick}>
      {props.image != null && 
        <GatsbyImage css={costaRicaClickCounter >= 5 ? imgCss2 : imgCss} image={props.image3} alt={props.name} />
      }
      <div css={css`
        text-align: center;
        margin-top: 1em;

        & span:nth-of-type(2) {
          display: block;
          font-size: 0.85em;
        }

        `}>
        <span>Tarek Alakmeh</span>
        <span>Website</span>
      </div>
    </div>
    ):""
    }
    <div className="person" onClick={costaRicaClick}>
      {props.image != null && 
        <GatsbyImage css={costaRicaClickCounter >= 5 ? imgCss2 : imgCss} image={costaRicaClickCounter >= 5 ? props.image2 : props.image} alt={props.name} />
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
    
    </>
  )
}

export default Layla
