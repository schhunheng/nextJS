import React from 'react';
import { Carousel } from "react-responsive-carousel";
export default function Slider(){
    return (
        <Carousel autoPlay >
            <div>
            <img src="sabaicode.jpg" alt="logo"/>
                <p>Legend 1</p> 
            </div>
            <div>
            <img src="error.PNG" alt="logo"/>
                
            </div>
        </Carousel>
    )
}