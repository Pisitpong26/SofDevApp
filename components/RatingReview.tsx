/* eslint-disable @next/next/no-img-element */
"use client"; // This is a client component
import React, { useState } from 'react';
import { Rating, RoundedStar } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

interface RatingReview {

    AverageRating: number;
    totalReview: number;
    five: number;
    four: number;
    three: number;
    two: number;
    one: number;
    fiveW: number;
    fourW: number;
    threeW: number;
    twoW: number;
    oneW: number;

    onReviewSubmit: (review: Review) => void;
}

export interface Review {
  username: string;
  star: number;
  content: string;
}

export const RatingReview: React.FC<RatingReview> = ({five,four,three,two,one,onReviewSubmit}) => {

    const [rating, setRating] = useState(0)
    const totalReview=five+four+three+two+one;
    const AverageRating = totalReview > 0
    ? parseFloat(((five * 5 + four * 4 + three * 3 + two * 2 + one * 1) / totalReview).toFixed(1))
    : 0;

    const fiveW=(five/totalReview)*250;
    const fourW=(four/totalReview)*250;
    const threeW=(three/totalReview)*250;
    const twow=(two/totalReview)*250;
    const oneW=(one/totalReview)*250;

    const fiveP=((five/totalReview)*100).toFixed(0);
    const fourP=((four/totalReview)*100).toFixed(0);
    const threeP=((three/totalReview)*100).toFixed(0);
    const twoP=((two/totalReview)*100).toFixed(0);
    const oneP=((one/totalReview)*100).toFixed(0);

    const myStyles = {
        itemShapes: RoundedStar,
        activeFillColor: '#FDE047',
        inactiveFillColor: '#fbf1a9'
        
      }

      function getRating(rating: any) {
        switch (rating) {
          case 1:
            return 'Poor';
          case 2:
            return 'Nothing Special';
          case 3:
            return 'Average';
          case 4:
            return 'Extraordinary';
          case 5:
            return 'Amazing !';
          default:
            return 'None';
        }
      }
      const [reviewContent, setReviewContent] = useState('');

    const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    
    if (rating === 0) {
      alert("Please select a rating before submitting your review.");
      return; 
    }

    // Create a new review object
    const newReview = {
      username: 'Anonymous',
      star: rating,
      content: reviewContent,
    };

    
    // onReviewSubmit(newReview);
  };
      


  return (
    <div className="flex  mt-5 w-full h-[300px] bg-gray-300 bg-opacity-30 px-[180px] pt-1 justify-center">
        
                    <div className="flex flex-col w-1/3 mt-5 " id="reviewScore">
                        <div className="flex items-center mb-1">
                        <svg className="w-10 h-10 text-yellow-300 mr-1" aria-hidden="true"  fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <p className="md:text-5xl text-sm text-black font-bold mr-3">{AverageRating}</p>
                        </div>
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{totalReview} ratings</p>
                                <div className="flex items-center mt-4">
                                    <a href="#" className="text-sm font-bold text-blue-600 dark:text-blue-500 hover:underline">5⭐</a>
                                    <div className="w-[250px] h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                        <div style={{ width: `${fiveW}px` }} className="h-5 bg-yellow-300 rounded" id="fiveStar"></div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{fiveP}%</span>
                                </div>
                                <div className="flex items-center mt-4">
                                    <a href="#" className="text-sm font-bold text-blue-600 dark:text-blue-500 hover:underline">4⭐</a>
                                    <div className="w-[250px] h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                        <div style={{ width: `${fourW}px` }} className="h-5 bg-yellow-300 rounded" id="fiveStar"></div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{fourP}%</span>
                                </div>
                                <div className="flex items-center mt-4">
                                    <a href="#" className="text-sm font-bold text-blue-600 dark:text-blue-500 hover:underline">3⭐</a>
                                    <div className="w-[250px] h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                    <div style={{ width: `${threeW}px` }} className="h-5 bg-yellow-300 rounded" id="fiveStar"></div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{threeP}%</span>
                                </div>
                                <div className="flex items-center mt-4">
                                    <a href="#" className="text-sm font-bold text-blue-600 dark:text-blue-500 hover:underline">2⭐</a>
                                    <div className="w-[250px] h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                    <div style={{ width: `${twow}px` }} className="h-5 bg-yellow-300 rounded" id="fiveStar"></div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{twoP}%</span>
                                </div>

                                <div className="flex items-center mt-4">
                                    <a href="#" className="text-sm font-bold text-blue-600 dark:text-blue-500 hover:underline">1⭐</a>
                                    <div className="ml-[19px] w-[250px] h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                    <div style={{ width: `${oneW}px` }} className="h-5 bg-yellow-300 rounded" id="fiveStar"></div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{oneP}%</span>
                                </div>

                        
                    </div>
                    <div className="flex flex-col mt-5 items-center w-[400px] pl-[40px]">
                            <div className="flex flex-col text-left font-bold text-xl mt-[80px] ">
                                ให้คะแนนและเขียนรีวิว 
                            </div>
                            <div className="flex flex-row mt-2">
                                <Rating style={{ maxWidth: 250 }} value={rating} onChange={setRating} itemStyles={myStyles} />
                            </div>
                            <div className="flex flex-row mt-2 font-bold text-2xl">{`${getRating(rating)}`}</div>
                            
                    </div>
                    <div className="flex flex-col mt-5 px-[40px]">
      <form onSubmit={handleSubmit}>
        <div className="flex-row">
          <div className="flex px-3 mb-2 mt-2 w-full">
            <textarea
              className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-[370px] h-[200px] py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
              name="body"
              placeholder="เขียนรีวิวที่นี่..."
              required
              value={reviewContent}
              onChange={(e) => setReviewContent(e.target.value)}
            ></textarea>
          </div>
          <div className="flex flex-col">
            <div className="flex pl-[250px]">
              <input
                type="submit"
                className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
                value="Post Review"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
                    </div>
    
  );
};

export default RatingReview;