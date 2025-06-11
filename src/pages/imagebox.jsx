import React from 'react';

const ImageBox = ({image}) => {
  return (
    <div className="image-box" >
      <img src={image} alt="Project" />
      <button className="custom-button text-center">View Project</button>
    </div>
  );
};

export default ImageBox;






