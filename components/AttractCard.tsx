/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface AttractCard {
  imgSrc: string;
  imgAlt: string;
  text: string;
}

export const AttractCard: React.FC<AttractCard> = ({ imgSrc, imgAlt, text }) => {
  return (
    <div className='mt-4 flex-col relative hover:scale-110 '>
      <img src={imgSrc} alt={imgAlt} className="max-w-md h-auto mb-4 rounded-t-2xl " />
      <div className="absolute w-full h-16 bottom-0 bg-black bg-opacity-50">
        <h3 className="absolute text-2xl text-yellow-300 bottom-3 left-5 font-bold"> {text}</h3>
      </div>
    </div>
  );
};

export default AttractCard;