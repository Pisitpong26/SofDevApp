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
    return(
        
        <main>

            <div className="w-full bg-blue bg-opacity-100 text-black" ><Navbar /><h1></h1></div>
            <div className='mt-4 max-w-screen-2xl mx-auto flex flex-col justify-center items-center'>
                <h2 className=" md:text-5xl uppercase font-bold mt-3 text-blue tracking-widest">น้ำตกลานสาง</h2>
            </div>
            <div>
                <AttractImage
                 imgSrc1="../AttractDetail/waterfall/1.png"
                 imgSrc2="../AttractDetail/waterfall/2.jpg"
                 imgSrc3="../AttractDetail/waterfall/5.jpg"
                 imgSrc4="../AttractDetail/waterfall/4.jpg"
                ></AttractImage>
            </div>

            <div className="mt-10 text-black text-justify px-40 text-xl">
            น้ำตกลานสาง อยู่ใน ตำบลแม่ท้อ อำเภอเมืองตาก จังหวัดตาก บริเวณตอนบนของห้วยลานสาง ซึ่งอยู่ถัดจากน้ำตกลานเลี้ยงม้าขึ้นไปอีก ซึ่งเป็นน้ำตกที่มีความสวยงดงามมาก สูงประมาณ 40 เมตร โดยสายน้ำตกจะไหลผ่านซอกเขา แล้วไหลลดหลั่นลงมากว่า 3 ชั้นด้วยกัน ก่อนจะไหลลงสู่แอ่งน้ำตกลานเลี้ยงม้าไปอีกทีนั่นเองค่ะ
            </div>
            <div className="flex justify-center mt-5">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.3685668047406!2d99.0004493747523!3d16.777297720094634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30dddccb50cb1d27%3A0xac0d20fda3704ee4!2z4LiZ4LmJ4Liz4LiV4LiB4Lil4Liy4LiZ4Liq4Liy4LiH!5e1!3m2!1sen!2sth!4v1697089651415!5m2!1sen!2sth" width="600" height="450" style={{border:'0'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>


            </div>
            <Rating
                five={20}
                four={15}
                three={3}
                two={5}
                one={20}
                id="70c5814e-329f-4869-83f0-49bb8d0b08eb"
            ></Rating>
            
            
            <div className="flex flex-col justify-center items-center h-full bg-gray-300 bg-opacity-30">
                <div className="text-4xl font-bold text-blue">
                    Reviews
                </div>
                <div className="mt-1">
                    Swipe to See More
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
                    hotelname="โรงแรมสวนสิน การ์เด้น"
                    image="../Hotel/waterfall/1.jpg"
                    star={4}
                    rating={485}
                    price="514"
                ></HotelCard>
                <HotelCard
                    hotelname="Tak Andaman Hotel"
                    image="../Hotel/waterfall/2.jpg"
                    star={4}
                    rating={246}
                    price="825"
                ></HotelCard>
                <HotelCard
                    hotelname="บ้านไร่เชิญมา รีสอร์ท"
                    image="../Hotel/waterfall/3.jpg"
                    star={4}
                    rating={331}
                    price="384"
                ></HotelCard>
                <HotelCard
                    hotelname="เวียงตากริเวอร์ไซด์"
                    image="../Hotel/waterfall/4.jpg"
                    star={4}
                    rating={1218}
                    price="1,000"
                ></HotelCard>

            </div>

        </main>

        
    )
}




