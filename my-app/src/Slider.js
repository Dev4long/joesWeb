import React, { useState } from 'react'
import { ProjectData, ProjectData2 } from './ProjectData.js'




function Slider() {

    const handleClick = (image) => {setViewPic(image)}

    const [viewPic, setViewPic] = useState({})

    
   
    return (
        <div className="slider">
            <div className="projectContainer">
                hello
            </div>
            <div className="slideContainer">
            <img src= {viewPic} className="slideImage" />
            </div>
            <div className="dataRow">
             {ProjectData.map((slide, index) => {
             return ( 
                <img src={slide.image} className="slide-image" onClick={() => handleClick(slide.image)}/>
              )
             })}
            </div>
        </div>
    )
}

export default Slider