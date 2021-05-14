import React from 'react';
import { graphql } from 'gatsby'
import styled from "@emotion/styled"
import { Controller, Scene } from 'react-scrollmagic';
import ScrollCanvas from "../components/scrollCanvas"
import ScrollC from "../components/scrollC"
import { css } from "@emotion/react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Scroll = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Controller>
    <Scene duration={2000}>
      {(progress, event) => (
        <>
        { console.log(progress) }
          <ScrollCanvas progress={progress} css={css`
            /* position: fixed; */
            z-index: -1;
          `}/>
        </>
      )}
    </Scene>
    </Controller>
  </Layout>
    
//   <StickyStyled>
//     <div className="section" />
//     <Controller>
//       <Scene duration={600} pin={true} enabled={true}>
//         <div className="sticky"><div>Pin Test</div></div>
//       </Scene>
//       <Scene duration={200} pin={{ pushFollowers: false }}>
//         <div className="sticky"><div>Pin Test</div></div>
//       </Scene>
//       <Scene duration={300} pin={true} offset={100}>
//         <div className="sticky blue"><div>Pin Test</div></div>
//       </Scene>
//     </Controller>
//     <div className="section" />
//   </StickyStyled>
);

export default Scroll;