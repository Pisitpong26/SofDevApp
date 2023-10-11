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
                <h2 className=" md:text-5xl uppercase font-bold mt-3 text-blue tracking-widest">ม่อนหมอกตะวัน</h2>
            </div>
            <div>
                <AttractImage
                 imgSrc1="../AttractDetail/sunfog/1.png"
                 imgSrc2="../AttractDetail/2.png"
                 imgSrc3="../AttractDetail/3.jpg"
                 imgSrc4="../AttractDetail/4.jpg"
                ></AttractImage>
            </div>
            

            <div className="mt-10 text-black text-justify px-40 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="flex justify-center mt-5">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1240833730985!2d98.82268737474831!3d16.57543082568861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30dd93ef27158881%3A0x8d35dd14345963fd!2z4Lih4LmI4Lit4LiZ4Lir4Lih4Lit4LiB4LiV4Liw4Lin4Lix4LiZ!5e1!3m2!1sen!2sth!4v1697019621073!5m2!1sen!2sth"width="600" height="450" style={{border:'0'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>   
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




