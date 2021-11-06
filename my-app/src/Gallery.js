import React, {useState} from 'react'
import * as AiIcons from "react-icons/ai";
import Denis from './images/denis.jpeg'
import Hey from './images/hey.PNG'
import Bye from './images/bye.PNG'


function Gallery() {
   
    const [slideIndex, setSlideIndex] = useState(1)

    
    // const nextSlide = () => {
    //     if(slideIndex !== dataSlider.length){
    //         setSlideIndex(slideIndex + 1)
    //     } 
    //     else if (slideIndex === dataSlider.length){
    //         setSlideIndex(1)
    //     }
    // }

    // const prevSlide = () => {
    //     if(slideIndex !== 1){
    //         setSlideIndex(slideIndex - 1)
    //     }
    //     else if (slideIndex === 1){
    //         setSlideIndex(dataSlider.length)
    //     }
    // }

    // const moveDot = index => {
    //     setSlideIndex(index)
    // }


    return (
        <div className="slider">
            {/* <img src= {Denis} />
            <img src= {Bye} />
            <img src= {Hey} /> */}
            <button><AiIcons.AiOutlineDoubleLeft /></button> 
            <button><AiIcons.AiOutlineDoubleRight /></button> 
            
        </div>
    )
}


export default Gallery;