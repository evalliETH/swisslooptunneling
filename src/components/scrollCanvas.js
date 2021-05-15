import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function ScrollCanvas(props) {

  useEffect(() => {
    const html = document.documentElement;
    const canvas = document.getElementById("hero-lightpass");
    const context = canvas.getContext("2d");

    const frameCount = 250;
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
    // canvas.width=1920;
    // canvas.height=1080;

    // Make it visually fill the positioned parent
    canvas.style.width ='100%';
    canvas.style.height='100%';
    // ...then set the internal size to match
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
    const left = canvas.width / 2 - (img.width * scale) / 2;

    img.onload=function(){
      context.drawImage(img, left, 0, img.width * scale, img.height * scale);
    }

    const updateImage = index => {
      img.src = currentFrame(index);
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
    <canvas id="hero-lightpass" {...props}/>
  )
  

}