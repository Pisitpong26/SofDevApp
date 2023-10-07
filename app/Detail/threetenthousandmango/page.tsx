/* eslint-disable @next/next/no-img-element */
"use client"; // This is a client component
import Navbar from "@/components/Navbar";
import AttractImage from "@/components/AttractImage";
import Rating from "@/components/RatingReview";
import {ReviewCard} from "@/components/ReviewCard";
// import map from "@/components/map";
import HotelCard from "@/components/HotelCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useEffect, useState } from "react";


interface Review {
    username: string;
    star: number;
    content: string;
}

interface Hotel {
    hotelname: string;
    image: string;
    star: number;
    rating: number;
    price: string;
    
}


const reviews: Review[] = [
    {
      username: 'วัยรุ่นเมกัน',
      star: 5,
      content: 'โคตรสุดโคตรเอา',
    },
    {
        username: 'วัยรุ่นเมกัน',
        star: 5,
        content: 'โคตรสุดโคตรเอา',
      },
      {
        username: 'วัยรุ่นเมกัน',
        star: 5,
        content: 'โคตรสุดโคตรเอา',
      },
      {
        username: 'วัยรุ่นเมกัน',
        star: 5,
        content: 'โคตรสุดโคตรเอา',
      },
      {
        username: 'วัยรุ่นเมกัน',
        star: 5,
        content: 'โคตรสุดโคตรเอา',
      },
   
  ];

const hotels: Hotel[] = [
    {
        hotelname: 'Cat Hotel',
        image:'../Hotel/catshark.png',
        star:4,
        rating:4,
        price:'1,699'
    }
];


export default function AttractionDetail({}){
    // const [reviews, setReviews] = useState([
    //     {
    //       username: 'วัยรุ่นเมกัน',
    //       star: 5,
    //       content: 'โคตรสุดโคตรเอา',
    //     },
    //   ]);
    //   const handleReviewSubmit = (newReview: { username: string; star: number; content: string; }) => {
    //     console.log('New Review:', newReview);
    //     setReviews([...reviews, newReview]);
    //   };

    return(
        
        <main>

            <div className="w-full bg-blue bg-opacity-100 text-black" ><Navbar /><h1></h1></div>
            <div className='mt-4 max-w-screen-2xl mx-auto flex flex-col justify-center items-center'>
                <h2 className=" md:text-5xl uppercase font-bold mt-3 text-blue tracking-widest">ดอยมะม่วงสามหมื่น</h2>
            </div>
            <div>
                <AttractImage
                 imgSrc1="../AttractDetail/threetenthousandmango/1.png"
                 imgSrc2="../AttractDetail/2.png"
                 imgSrc3="../AttractDetail/3.jpg"
                 imgSrc4="../AttractDetail/4.jpg"
                ></AttractImage>
            </div>

            <div className="mt-10 text-black text-justify px-40 text-xl">
             สร้างไว้เป็นหน้า Template เท่านั้น ถ้าหน้านี้ยังขึ้นอยู่ แสดงว่ายังทำไม่เสร็จ
            </div>

            <Rating
                five={20}
                four={15}
                three={3}
                two={5}
                one={20}
                // onReviewSubmit={handleReviewSubmit}
            ></Rating>
            
            
            <div className="bg-gray-300 bg-opacity-30">
                <div className="text-4xl font-bold text-blue w-full text-center ">
                    Reviews
                </div>
            </div>
            <div className="flex flex-row w-full h-[300px] bg-gray-300 bg-opacity-30 pt-7 "> 
                <Swiper
                        spaceBetween={10}
                        slidesPerView={4}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {reviews.map((review, index) => (
                        <SwiperSlide key={index}>
                            <ReviewCard username={review.username} star={review.star} content={review.content} />
                        </SwiperSlide>
                        ))}
                    </Swiper>
    
            </div>

            <div className="bg-gray-300 bg-opacity-30">
                <div className="text-4xl font-bold text-blue w-full text-center ">
                    Nearby Hotels
                </div>
            </div>
            <div className="flex flex-row w-full h-[300px] bg-gray-300 bg-opacity-30 pt-7 justify-center gap-[30px]"> 

                <HotelCard
                    hotelname="Hotel California"
                    image="../Hotel/Hotelcalifornia.jpg"
                    star={4}
                    rating={100}
                    price="2,699"
                ></HotelCard>
                <HotelCard
                    hotelname="16sakuraa"
                    image="../Hotel/catshark.png"
                    star={4}
                    rating={100}
                    price="9,999"
                ></HotelCard>
                <HotelCard
                    hotelname="ข้างถนน"
                    image="../Hotel/street.jpg"
                    star={2}
                    rating={420}
                    price="0"
                ></HotelCard>
                <HotelCard
                    hotelname="เต็นท์"
                    image="../Hotel/tent.jpg"
                    star={4}
                    rating={100}
                    price="1,499"
                ></HotelCard>

            </div>

        </main>

        
    )
}




