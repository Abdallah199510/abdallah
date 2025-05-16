import { useState } from "react";
import image1 from "../assests/1.jpg";
import image2 from "../assests/2.jpg";
import image3 from "../assests/3.jpg";
import image4 from "../assests/4.jpg";
import image5 from "../assests/1.jpg";
import image6 from "../assests/2.jpg";
import image7 from "../assests/3.jpg";
import image8 from "../assests/4.jpg";

function Photos() {
  const images = [image1, image2, image3, image4,image5,image6,image7,image8];

const [currentIndex,setCurrentIndex]=useState(0)



  return (
    <div className="slider-container">
     
      <div className="slider"  style={{
          transform: `translateX(-${currentIndex * 33.5}%)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="image-container"
          >
            <a className="position-relative" href={image} target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="white" class="bi bi-camera-fill" viewBox="0 0 16 16">
           <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
           <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"/>
          </svg> 
              <img className="z-1"  src={image} alt={`Image ${index + 1}`} ></img>
            </a>
          </div>
        ))}
      </div>

  
      <div className="dots-container">
        {images.map((image, index) => (
          <svg key={index}  xmlns="http://www.w3.org/2000/svg"  width="15"  height="15" fill={currentIndex === index ? "orange" : "gray"}
            stroke="none"  className="dot" onClick={() => setCurrentIndex(index)}  style={{  cursor: "pointer", margin: "0 5px",  }}
            viewBox="0 0 16 16" >  <path d="M8 0 A8 8 0 1 1 7.999 0 Z" /></svg>
        ))}
      </div>
    </div>
  );
}

export default Photos;
