import React, { useState } from 'react'
import { ProjectData, ProjectData2 } from './ProjectData.js'




function Slider(props) {

    const handleClick = (image) => {setViewPic(image)}

    
    const [viewPic, setViewPic] = useState([])
    const [activeProject, setActiveProject] = useState(props.project1)


    const projects = activeProject.map((project) => { return (<div><h1>hello</h1>{project}</div>) })
    
    // console.log(projects)
   
    return (
        <div className="slider">
            <div className="projectContainer">
            {activeProject.map((project) => {
             return ( 
                <img src={project[0].image} className="slide-image" />
              ) 
             })}
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