/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface HotelCard {

    hotelname:string;
    star:number;
    rating:number;
    image:string;
    price:string;
}

export const HotelCard: React.FC<HotelCard> = ({ hotelname,star,image,rating,price}) => {
  return (
    <div className="flex flex-col border-2 w-[300px] h-[200px] bg-white shadow-xl rounded-md">
                    <div className="flex flex-row">
                        <div className="flex flex-col w-[150px] ">
                            <div className="pt-3 pl-4 font-bold text-blue text-lg">{hotelname}</div>
                            <img src={image} alt="hotelImage" className="h-[130px] w-[130px] rounded-md ml-4 mt-3"></img>
                        </div>
                        <div className="relative flex flex-col w-[150px] items-end pr-3">

                            <div className="flex mt-3 w-[50px] h-[33px] bg-yellow-300 rounded-tl-md rounded-br-md font-bold text-xl text-white items-center justify-center">
                                {star}⭐
                            </div>
                            <div className="mt-2 text-gray-500">
                                {rating} Ratings
                            </div>
                            <div className="absolute bottom-0 right-3 text-blue font-bold text-2xl">
                                {price}฿
                            </div>
            
                        </div>
                    </div>
                    
                </div>
  );
};

export default HotelCard;
