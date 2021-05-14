import React, { useRef, useEffect, useState } from 'react'

const Canvas = props => {
  
  const frameCount = 250; // amount of animation frames (i.e. images)
  const [frameIndex, setFrameIndex] = useState(1);

  const canvasRef = useRef(null);


  const canvasSizeToParent = (canvas) => {
    // Make it visually fill the positioned parent
    canvas.style.width ='100%';
    canvas.style.height='100%';
    // ...then set the internal size to match
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

  }

  const scaleImageToCanvas = (img, canvas) => {
    // get the scale
    return Math.min(canvas.width / img.width, canvas.height / img.height);
  }

  const currentFrame = index => (
    //`https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg`
    `/v2-images/${index.toString().padStart(4, '0')}.jpg`
  )

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    canvasSizeToParent(canvas);

    const img = new Image()
    img.src = currentFrame(1);

    

    img.onload=function(){
      let scale = scaleImageToCanvas(img, canvas);
      var left = canvas.width / 2 - (img.width * scale) / 2;
      context.drawImage(img, left, 0, img.width * scale, img.height * scale);
    }

    // let animationFrameId
    // const img = new Image()
    // img.src = currentFrame(1);


    // let scale = scaleImageToCanvas(img, canvas);

    // //Our draw came here
    // const render = () => {
    //   img.src = currentFrame(1);
    //   
    //   animationFrameId = window.requestAnimationFrame(render)
    // }
    // render()

    // return () => {
    //   window.cancelAnimationFrame(animationFrameId)
    // }


    const preloadImages = () => {
      for (let i = 1; i < frameCount; i++) {
          const img = new Image();
          img.src = currentFrame(i);
        }
      };
  
    preloadImages();
  }, [])
  
  
  useEffect(() => {

    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    canvasSizeToParent(canvas);

    setFrameIndex(Math.min(
      frameCount - 1,
      Math.ceil(props.progress * frameCount)+1
    ));
    
    let animationFrameId
    const img = new Image()
    img.src = currentFrame(1);

    let scale = scaleImageToCanvas(img, canvas);

    const updateImage = index => {
      console.log("RENDER 2: " + currentFrame(frameIndex))
      img.src = currentFrame(frameIndex);
      var left = canvas.width / 2 - (img.width * scale) / 2;
      context.drawImage(img, left, 0, img.width * scale, img.height * scale);
    }

    requestAnimationFrame(() => updateImage(frameIndex + 1))

    /*
    let scale = scaleImageToCanvas(img, canvas);

    //Our draw came here
    const render = () => {
      console.log("RENDER 2: " + currentFrame(frameIndex))
      img.src = currentFrame(frameIndex);
      var left = canvas.width / 2 - (img.width * scale) / 2;
      context.drawImage(img, left, 0, img.width * scale, img.height * scale);
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
    */
  })
  
  return <canvas ref={canvasRef} {...props}/>
}

export default Canvas