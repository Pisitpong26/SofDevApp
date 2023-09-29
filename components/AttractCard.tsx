/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

interface AttractCard {
  imgSrc: string;
  imgAlt: string;
  text: string;
  path: string;
}

export const AttractCard: React.FC<AttractCard> = ({ imgSrc, imgAlt, text, path }) => {
  return (
    <Link href={path}>
    <div className='mt-4 flex-col relative hover:scale-110 shadow-2xl border-spacing-4'>
      <img src={imgSrc} alt={imgAlt} className="w-[416px] h-[259px] mb-4 rounded-t-2xl " />
      <div className="absolute w-full h-16 bottom-0 bg-black bg-opacity-50">
        <h3 className="absolute text-xl text-yellow-300 bottom-5 left-5 font-bold"> {text}</h3>
      </div>
    </div>
   </Link>
  );
};

export default AttractCard;

// <img src={imgSrc} alt={imgAlt} className="max-w-md h-auto mb-4 rounded-t-2xl " />