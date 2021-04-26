// @flow
import React from 'react';
import styled from "@emotion/styled"
import { Controller, Scene } from 'react-scrollmagic';
import ScrollCanvas from "../components/scrollCanvas"


const Scroll = () => (
  <Controller>
  <Scene duration={2000}>
    {(progress, event) => (
      <>
      { console.log(progress) }
      <ScrollCanvas progress={progress} />
      </>
    )}
  </Scene>
  </Controller>
    
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