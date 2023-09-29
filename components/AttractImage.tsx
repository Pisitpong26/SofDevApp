/* eslint-disable @next/next/no-img-element */
"use client"; // This is a client component
import React, { useState } from 'react';

interface AttractImage {
    imgSrc1 : string;
    imgSrc2 : string;
    imgSrc3 : string;
    imgSrc4 : string;
    
}

const AttractImage: React.FC<AttractImage> = ({imgSrc1,imgSrc2,imgSrc3,imgSrc4}) => {
  const [path, setPath] = useState<string>(imgSrc1); // Set your initial image path here
  
  const handleImageClick = (newImagePath: string) => {
    setPath(newImagePath);
  };

  return (
    <div className="mt-4 flex flex-row justify-center items-center gap-3">
      <img src={path} alt="imageAlt" className="h-[573px] w-[950px] rounded-xl" id="bigPic" />
      <div className="flex flex-col gap-3">
        <button type="button" onClick={() => handleImageClick(imgSrc1)}>
          <img src={imgSrc1} alt="imageAlt" className="h-[134px] w-[207px] rounded-xl" id="1" />
        </button>
        <button type="button" onClick={() => handleImageClick(imgSrc2)}>
          <img src={imgSrc2} alt="imageAlt" className="h-[134px] w-[207px] rounded-xl" id="2" />
        </button>
        <button type="button" onClick={() => handleImageClick(imgSrc3)}>
          <img src={imgSrc3} alt="imageAlt" className="h-[134px] w-[207px] rounded-xl" id="3" />
        </button>
        <button type="button" onClick={() => handleImageClick(imgSrc4)}>
          <img src={imgSrc4} alt="imageAlt" className="h-[134px] w-[207px] rounded-xl" id="4" />
        </button>
      </div>
    </div>
  );
};

export default AttractImage;
