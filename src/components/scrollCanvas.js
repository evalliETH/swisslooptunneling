import React, { useEffect, useState } from 'react';
import styled from "@emotion/styled"
import { Controller, Scene } from 'react-scrollmagic';

const ImgCanvas = styled.canvas`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 100vw;
  max-height: 100vh;
  background-color: red;
`;

const Myh1 = styled.h1`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 100vw;
  max-height: 100vh;
  z-index: 2;
  color: white;
`

const ScrollCanvas = ({ progress }) => {
  const imgCanvas = React.createRef();
  const frameCount = 250; // amount of animation frames (i.e. images)

  const [frameIndex, setFrameIndex] = useState(0);
  // const [img, setImg] = useState(new Image());
  let img = new Image();

  useEffect(() => {
    const context = imgCanvas.current.getContext("2d");
    context.translate(0.5, 0.5);

    // Set display size (vw/vh).
    var sizeWidth = 100 * window.innerWidth / 100,
      sizeHeight = 100 * window.innerHeight / 100 || 766;

    //Setting the canvas site and width to be responsive 
    imgCanvas.current.width = sizeWidth;
    imgCanvas.current.height = sizeHeight;
    imgCanvas.current.style.width = sizeWidth;
    imgCanvas.current.style.height = sizeHeight;

    const preloadImages = () => {
    for (let i = 1; i < frameCount; i++) {
      console.log("preload " + i);
        img = new Image();
        img.src = currentFrame(i);
      }
    };

    img = new Image();
    img.src = currentFrame(1);
    img.onload=function(){
      context.drawImage(img, 0, 0, sizeWidth, sizeHeight);
    }
/*
    function resizeCanvas() {
            imgCanvas.current.width = window.innerWidth;
            imgCanvas.current.height = window.innerHeight;

            context.drawImage(img, 0, 0);
    }
    resizeCanvas();*/


    preloadImages();
  }, [])

  const currentFrame = index => (
    //`https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg`
    `/${index.toString().padStart(4, '0')}.jpg`
  )
  
  useEffect(() => {    
    const context = imgCanvas.current.getContext("2d");

     // Set display size (vw/vh).
     var sizeWidth = 100 * window.innerWidth / 100,
     sizeHeight = 100 * window.innerHeight / 100 || 766;

    //Setting the canvas site and width to be responsive 
    imgCanvas.current.width = sizeWidth;
    imgCanvas.current.height = sizeHeight;
    imgCanvas.current.style.width = sizeWidth;
    imgCanvas.current.style.height = sizeHeight;

    const updateImage = index => {
      img.src = currentFrame(index);
      context.drawImage(img, 0, 0, sizeWidth, sizeHeight);
    }
  

    setFrameIndex(Math.min(
      frameCount - 1,
      Math.ceil(progress * frameCount)
    ))

    
    updateImage(frameIndex + 1);

    
  })
  
  return(
    <>
    <Myh1>Test: {progress}</Myh1>
    <ImgCanvas ref={imgCanvas}/>
    </>
  )
}

export default ScrollCanvas
