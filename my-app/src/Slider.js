import React, { useState } from 'react'
import ProjectData from './ProjectData.js'



function Slider() {
   
    return (
        <div className="slider">
         <div className="data">
             {ProjectData.map((slide, index) => {
                 return (
                   <img src={slide.image} />
               )
             })}
         </div>
        </div>
    )
}

export default Slider