import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { Controller, Scene } from 'react-scrollmagic';

import Layout from "../components/layout"
import SEO from "../components/seo"

const StickyStyled = styled.div`

  .section {
    height: 40vh;
    
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

  .fullwidth {
    //background-color: blue;
    height: 87vh;
    width: 100%;
    opacity: 0;
    margin: 0;

    & > div {
      padding: 30px;
      color: white;
      width: 100%;
      max-width: 1260px;
      /* background-color:red; */
      margin: auto;
    }

    z-index: 1;
    transition: opacity 1s ease-in-out;
  }

  .opener {
    //background-color: blue;
    //opacity: 0;
    //margin-top: 0;

    & > div {
      padding: 30px;
      color: white;
      width: 100%;
      max-width: 1260px;
      /* background-color:red; */
      margin: auto;
    }

    z-index: 1;
  }

  .sticky-left, .sticky-right, .sticky-down {
    
    /* margin-left: 200px; */
    & div {
      padding: 30px;
      color: white;
      width: 25%;
      max-width: 680px;
      min-width: 420px;
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
      width: 50%;
    }
  }
  
  .blue {
    background-color: blue;
  }

  .not-visible {
    transition: opacity 1s ease-in-out;
    opacity: 0;
    &:nth-child(2) {
      transition-delay: 0.25s;
    }
    &:nth-child(3) {
      transition-delay: 0.6s;
    }
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

export default function ScrollPage(props) {

  const [scrollPos, setScrollPos] = useState(0); 

  useEffect(() => {
    /* Only load images on index page */
    var p = window.location.pathname;
    if (p.length === 0 || p === "/" || p.match(/^\/?index/)) {
    
      const html = document.documentElement;
      const canvas = document.getElementById("hero-lightpass");
      const context = canvas.getContext("2d");

      const frameCount = 290; //287;
      const currentFrame = index => (
        //`https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg`
        `/v3-images/${index.toString().padStart(4, '0')}.jpg`
      )

      const preloadImages = () => {
      for (let i = 1; i < frameCount; i++) {
          const img = new Image();
          img.src = currentFrame(i);
        }
      };

      const img = new Image()
      img.src = currentFrame(1);

      // Make it visually fill the positioned parent
      canvas.style.width ='100%';
      canvas.style.height='100%';
      // ...then set the internal size to match
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      let scale = Math.max(canvas.width / img.width, canvas.height / img.height);
      let left = canvas.width / 2 - (img.width * scale) / 2;


      img.onload=function(){
        // console.log("Loaded image:" + img.src + `
        //   \n left: ${left}
        //   \n img width: ${scale}
        //   \n img width: ${img.width}
        //   \n img height: ${img.height}
        // `);

        /* force variables to be calculated before drawing image */
        if(isNaN(left)) {
          scale = Math.max(canvas.width / img.width, canvas.height / img.height);
          left = canvas.width / 2 - (img.width * scale) / 2;
          //console.log("\nForced Img Dimension Calculation");
        }
        context.drawImage(img, left, 0, img.width * scale, img.height * scale);
      }

      const updateImage = index => {
        img.src = currentFrame(index);
        context.drawImage(img, left, 0, img.width * scale, img.height * scale);
      }

      window.addEventListener('scroll', () => {  
        
        const scrollTop = html.scrollTop;
        const maxScrollTop = html.scrollHeight - window.innerHeight; // reserve full screen div height at bottom: html.scrollHeight - 2*window.innerHeight ;
        const scrollFraction = scrollTop / maxScrollTop;
        const frameIndex = Math.min(
          frameCount - 1,
          Math.ceil(scrollFraction * frameCount)
        );
        
        requestAnimationFrame(() => updateImage(frameIndex + 1))
        //setScrollPos(scrollFraction);
        if(scrollFraction >= 0.9){
          if(document.getElementById( 'hero-lightpass' )){
            document.getElementById( 'hero-lightpass' ).style.opacity = 0.25;
          }
        } else {
          if(document.getElementById( 'hero-lightpass' )){
            document.getElementById( 'hero-lightpass' ).style.opacity = 1;
          }
        }
      });

      preloadImages();
    }
  })

  return(
    <Layout fullwidth={true}>
      <div css={css`height: 100%; width: 100%;`}>
        <canvas id="hero-lightpass" css={css`z-index: -1; background-color: black; transition: opacity 2s;`}/>
      </div>
      <StickyStyled>
        <div className="section" />
        <div id="trigger" />
        <Controller>
        {/* <Scene duration={200} classToggle="zap" triggerElement="#trigger" indicators={false}>
            {(progress, event) => (
              <div className="test">Pin Test {event.type} {progress}</div>
            )}
          </Scene> */}
          <Scene duration={150} classToggle={['.not-visible', 'visible']} reverse={true} indicators={false}>
            <div className="opener">
              <div css={css`text-align: center;`}>
                <h1 className="otitle not-visible visible" css={css`
                  font-size: 10vw;
                  @media (min-width: 1690px) {
                    font-size: 160px;
                  }
                  `}>
                  <span>C</span>
                  <span>O</span>
                  <span>M</span>
                  <span>I</span>
                  <span>N</span>
                  <span>G</span>
                  <span>&nbsp;</span>
                  <span>S</span>
                  <span>O</span>
                  <span>O</span>
                  <span>N</span>
                </h1>
                <h4 className="not-visible visible" css={css`font-weight: 400;`}>Swissloop Tunneling</h4>
                <div className="not-visible visible" css={css`margin-top: 25vh;`}>
                  <a href="#s1">
                  <StaticImage
                    src="../images/scroll.png"
                    height={30}
                    quality={95}
                    placeholder={"tracedSVG"}
                    //tracedSVGOptions={{ background: "black", color: "yellow", blackOnWhite: true }}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt="Scroll"
                    className="pulsate"
                    css={css`
                      &:hover {
                        cursor: pointer;
                        transition: all 0.5s ease-in-out;
                        transform: scale(1.2);
                      }
                    `}
                  /></a>
                </div>
              </div>
            </div>
          </Scene>
          <Scene duration={400} pin={true}><div></div></Scene>
          <Scene duration={1000} indicators={false} classToggle={['#s1', 'visible']} reverse={true} pin={true} enabled={true} offset={100}>
            {(progress) => (
              <div id="s1" className="sticky-left">
              <div css={css`transform: translateY(-${100*progress}px);`}>
              <h1>SPEARHEAD RESEARCH</h1>
              <p>Our vision is to spearhead the research on infrastructure which allows the (Hyper)loop concept to become reality. To accomplish this goal, we will build the fastest and most precise tunneling robot in the world.</p>
              </div>
            </div>
            )}
          </Scene>

          <Scene duration={500} pin={true}><div></div></Scene>
          <Scene duration={1000} indicators={false} classToggle={['#s2', 'visible']} reverse={true} pin={true} enabled={true} offset={180}>
            {(progress) => (
              <div id="s2" className="sticky-left">
              <div css={css`transform: translateY(-${100*progress}px);`}>
              <h1>Not-A-Boring-Competition</h1>
              <p>We are the new student team of ETH Zürich to compete in Elon Musk’s Not-A-Boring-Competition. The team was founded in 2020 and brings together over 40 students with expertise in mechanical- and electrical engineering as well as various business-related fields. Our team draws on the experience of the SpaceX Hyperloop Competition and consists of former members of the Swissloop Team of 2018/19, which ranked second place and received the Innovation Award.
</p>
              </div>
            </div>
            )}
          </Scene>

          <Scene duration={500} pin={true}><div></div></Scene>
          <Scene duration={1000} classToggle={['.sticky-down', 'visible']} reverse={true} pin={true} enabled={true} offset={-250} indicators={false}>
            {(progress) => (
              <div className="sticky-down">
              <div css={css`transform: translateY(-${100*progress}px);`}>
              <h1>Sustainability</h1>
              <p>We want to achieve co2 savings potential through efficient planning and concrete technology measures. In a similar vein, we endeavour to set an example in long-term thinking in our production, diversity of our team and in our dedicated work attitude.</p>
              </div>
            </div>
            )}
          </Scene>

          <Scene duration={500} pin={true}><div></div></Scene>
          <Scene duration={1000} classToggle={['.sticky-right', 'visible']} reverse={true} pin={true} enabled={true} offset={50} indicators={false}>
            {(progress) => (
              <div className="sticky-right">
              <div css={css`transform: translateY(-${100*progress}px);`}>
              <h1>Beat the snail</h1>
              <p>We want to realize efficiency increases and build a tunnel boring robot that drills forward faster than a conventional snail crawls.</p>
              </div>
            </div>
            )}
          </Scene>
          
            
          <Scene classToggle={['.fullwidth', 'visible']} reverse={true} indicators={false}>
          <div className="fullwidth">
            <div css={css`
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              flex-wrap: wrap;
              width: 100%;
            `}>
              
              <div css={css`
                display: flex;
                flex-direction: column;
                flex: 1 1 400px;
                margin: 0 1em;
              `}>
                <h2>Hyperloop</h2>
                <p>Hyperloop is a proposed futuristic mode of transportation, consisting of a sleek pod-like capsule which is levitating inside vacuum tubes, accelerating across the country at high speed, being inexpensive for people and goods. The technology is more sustainable than aviation and significantly faster than high-speed trains.
                  <br/><br/>Existing conventional modes of transportation such as rail, road, water and air tend to be either relatively slow, expensive or a combination of both. Compared to the alternatives the new transportation system should be safer, faster, come at lower cost, should be more convenient, must be immune to weather, sustainably self-powering, resistant to Earthquakes and not disruptive to those along the route.
                  <br/><br/>Swissloop is a student-led initiative with the goal of contributing to the research on and advancement of the Hyperloop technology and its application in the real world. The team designs and builds operational prototypes of transport capsules — so-called “pods” — with which they competed in the International Hyperloop Pod Competition. For five years (2015-2019), Elon Musk has challenged.
                </p>
              </div>

              <div css={css`
                display: flex;
                flex-direction: column;
                flex: 1 1 400px;
                margin: 0 1em;
              `}>
                <h2>Hyperloop Tunneling</h2>
                <p>
                  To further develop a holistic Hyperloop concept, Swissloop and Swissloop Tunneling are working closely together. The goal of Swissloop and Swissloop Tunneling is to conduct research and development for the advancement of the Hyperloop concept and its realization, enabling fast and safe transportation. Thus, Swissloop Tunneling focuses on tunnel boring robots, while Swissloop’s focal points remain on the so-called pods, capable of travelling at high-speed in low-pressure or vacuum tubes. This allows us to exploit synergies and ultimately create profound development of both systems. To ensure long-term and sustainable cooperation, Swissloop Tunneling is operating under a license agreement with Swissloop.

                </p>
              </div>

            </div>
          </div>  
          </Scene>
          {/* <Scene classToggle={['.full', 'visible']} reverse={true} enabled={true} indicators={false}>

              <div className="full">
              <h1>Full Fact 4</h1>
              <p>Swissloop Tunneling Presents</p>
              </div>
          </Scene> */}


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
        {/* <div className="section" /> */}
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