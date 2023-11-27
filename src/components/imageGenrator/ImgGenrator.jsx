import React, { useRef, useState } from 'react'
import './img.css'
import Avtar from '../assets/default_image.svg'

const ImgGenrator = () => {
const[image_url,setImage_url] =useState("/");
let inputRef= useRef(null);

const imageGenerator=async()=>{
    if(inputRef.current.value===""){
        return 0;
    }
    const response = await fetch("https://api.openai.com/v1/images/generations",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            Authorization:
            "Bearer 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",
           "User-Agent":"Chrome",
        },
        body:JSON.stringify({
            prompt:`$(inputRef.current.value)`,
           n:1,
           size:"512x512"
        }),
    });
    let data = await response.json();
   let data_array=data.data;
   setImage_url(data_array[0].url);
}


  return (
    <div className='ai-image-genrator'>
    <div className="header">Ai Image <span>Genrator</span></div>
    <div className="img-loading">
    <div className="image">
    <img src={image_url==="/"?Avtar:image_url} alt="" />
    </div>
    </div>
    <div className="searchbox">
    <input type="text" ref={inputRef} className='searchinput' placeholder='Describe What You Want to See' />
<div className="generate-btn" onClick={()=>{imageGenerator()}}>Generate</div>
    </div>
    </div>
  )
}

export default ImgGenrator