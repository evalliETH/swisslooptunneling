import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { Controller, Scene } from 'react-scrollmagic';

import Layout from "../components/layout"
import SEO from "../components/seo"

const StickyStyled = styled.div`

  .section {
    height: 50vh;
    
  }

  
  .sticky {
    background-color: red;
    width: auto;
    margin-left: 10%;
    & div {
      padding: 30px;
    }
    z-index: 1;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  .sticky-left, .sticky-right, .sticky-down {
    
    /* margin-left: 200px; */
    & div {
      padding: 30px;
      color: white;
      width: 25%;
      max-width: 680px;
      margin-left: 10%;
    }
    z-index: 1;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    opacity: 0;
    transition: opacity 1s;
  }

  .sticky-right {
    & div {
      margin-left: auto;
      margin-right: 10%;
    }
  }

  .sticky-down {
    & div {
      margin: auto;
    }
  }
  
  .blue {
    background-color: blue;
  }


  .visible {
    opacity: 1;
  }

  
  .test {
	  transition: width 0.3s ease-out;
	  width: 100px;
    height: 100px;
    background-color: red;
    margin: 0 !important;
    
    &.yellow {
      background-color: yellow;
    }
  }
  .zap {
    width: 100%;
  }
`;

export default function ScrollPageOld(props) {

  useEffect(() => {
    const html = document.documentElement;
    const canvas = document.getElementById("hero-lightpass");
    const context = canvas.getContext("2d");

    const frameCount = 287;
    const currentFrame = index => (
      //`https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg`
      `/v2-images/${index.toString().padStart(4, '0')}.jpg`
    )

    

    const preloadImages = () => {
    for (let i = 1; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
      }
    };

    const img = new Image()
    img.src = currentFrame(1);
    console.log("got current frame: " + img.src);
    // canvas.width=1920;
    // canvas.height=1080;

    // Make it visually fill the positioned parent
    canvas.style.width ='100%';
    canvas.style.height='100%';
    // ...then set the internal size to match
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    let scale = Math.min(canvas.width / img.width, canvas.height / img.height);
    let left = canvas.width / 2 - (img.width * scale) / 2;



    // //load images first
    // img.addEventListener("load" , draw , false); //**IMPORTANT : Just remove this line and you will start facing this problem of empty canvas again 

    // //loading images ends

    // function draw() {
    //   context.drawImage(img, left, 0, img.width * scale, img.height * scale);   // Putting the image and its coordinates on the canvas  
    // }



    img.onload=function(){
      console.log("Loaded image:" + img.src + `
        \n left: ${left}
        \n img width: ${scale}
        \n img width: ${img.width}
        \n img height: ${img.height}
      `);

      /* force variables to be calculated before drawing image */
      if(isNaN(left)) {
        scale = Math.min(canvas.width / img.width, canvas.height / img.height);
        left = canvas.width / 2 - (img.width * scale) / 2;
        console.log("\nForced Img Dimension Calculation");
      }
      context.drawImage(img, left, 0, img.width * scale, img.height * scale);
    }

    const updateImage = index => {
      img.src = currentFrame(index);
      console.log("Update image:" + img.src);
      context.drawImage(img, left, 0, img.width * scale, img.height * scale);
    }

    window.addEventListener('scroll', () => {  
      console.log("scroll")
      const scrollTop = html.scrollTop;
      const maxScrollTop = html.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
      );
      
      requestAnimationFrame(() => updateImage(frameIndex + 1))
    });

    preloadImages();
  })

  return(
    <Layout fullwidth={true}>
      <div css={css`height: 100%; width: 100%;`}>
        <canvas id="hero-lightpass" css={css`z-index: -1;`}/>
      </div>
      <StickyStyled>
        <div className="section" />
        <div id="trigger" />
        <Controller>
        {/* <Scene duration={200} classToggle="zap" triggerElement="#trigger" indicators={true}>
            {(progress, event) => (
              <div className="test">Pin Test {event.type} {progress}</div>
            )}
          </Scene> */}
          <Scene duration={100} pin={true}><div></div></Scene>
          <Scene duration={1000} indicators={true} classToggle={['#s1', 'visible']} reverse={true} pin={true} enabled={true} offset={0}>
            {(progress) => (
              <div id="s1" className="sticky-left">
              <div css={css`transform: translateY(-${100*progress}px);`}>
              <h1>Fact 1</h1>
              <p>Swissloop Tunneling Presents</p>
              </div>
            </div>
            )}
          </Scene>

          <Scene duration={500} pin={true}><div></div></Scene>
          <Scene duration={1000} indicators={true} classToggle={['#s2', 'visible']} reverse={true} pin={true} enabled={true} offset={50}>
            {(progress) => (
              <div id="s2" className="sticky-left">
              <div css={css`transform: translateY(-${100*progress}px);`}>
              <h1>Fact 2</h1>
              <p>Swissloop Tunneling Presents</p>
              </div>
            </div>
            )}
          </Scene>

          <Scene duration={500} pin={true}><div></div></Scene>
          <Scene duration={1000} classToggle={['.sticky-down', 'visible']} reverse={true} pin={true} enabled={true} offset={-250} indicators={true}>
            {(progress) => (
              <div className="sticky-down">
              <div css={css`transform: translateY(-${100*progress}px);`}>
              <h1>Fact 3</h1>
              <p>Swissloop Tunneling Presents</p>
              </div>
            </div>
            )}
          </Scene>

          <Scene duration={100} pin={true}><div></div></Scene>
          <Scene duration={1000} classToggle={['.sticky-right', 'visible']} reverse={true} pin={true} enabled={true} offset={50} indicators={true}>
            {(progress) => (
              <div className="sticky-right">
              <div css={css`transform: translateY(-${100*progress}px);`}>
              <h1>Fact 4</h1>
              <p>Swissloop Tunneling Presents</p>
              </div>
            </div>
            )}
          </Scene>

          <Scene duration={100} pin={true}><div></div></Scene>
          {/* <Scene duration={2000} pin={true} enabled={true}>
            <div className="sticky"><div>Pin Test</div></div>
          </Scene>
          <Scene duration={200} pin={{ pushFollowers: false }}>
            <div className="sticky"><div>Pin Test</div></div>
          </Scene>
          <Scene duration={300} pin={true} offset={100}>
            <div className="sticky blue"><div>Pin Test</div></div>
          </Scene> */}
        </Controller>
        <div className="section" />
      </StickyStyled>
      {/* <Controller>
      <Scene duration={2000}>
      {(progress, event) => (
        <>
        { console.log("prog:"+progress) }
        <h1 css={css`color: red; position: fixed;`}>test {progress}</h1>
        </>
      )}
    </Scene>
    </Controller> */}
      {/* <div css={css`height: 200vh;`}></div>
      <div css={css`height: 100%; width: 100%; z-index: 99;`}>
        <h1 css={css`z-index: 100; color: red;`}>Test</h1>
      </div> */}
    </Layout>
  )
  

}