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
                <h2 className=" md:text-5xl uppercase font-bold mt-3 text-blue tracking-widest">ม่อนคลุยหลวง ดอยทูเล</h2>
            </div>
            <div>
                <AttractImage
                 imgSrc1="../AttractDetail/mountainsomewhere/1.png"
                 imgSrc2="../AttractDetail/2.png"
                 imgSrc3="../AttractDetail/3.jpg"
                 imgSrc4="../AttractDetail/4.jpg"
                ></AttractImage>
            </div>

            <div className="mt-10 text-black text-justify px-40 text-xl">
            ตั้งอยู่ที่ อ.ท่าสองยาง จังหวัดตาก และดอยทูเลเป็นยอดเขาที่สูงที่สุดในอ.ท่าสองยาง และ เป็นเขาที่สูงติดอันดับที่ 10 ของประเทศไทยอีกด้วย เสน่ห์ของการมาเที่ยวที่นี่คือเส้นทางการเดินป่า3 วัน และทะเลหมอกที่ไหล สลับกับภูเขา หลายสิบลูกไกลสุดลูกหูลูกตา ที่ความสูงจากระดับน้ำทะเล 1,350 เมตร
            </div>
            <div className="flex justify-center mt-5">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.3862780998184!2d98.00278487780628!3d17.611256353318996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30dcbbd23cd54355%3A0xac4867c4b1cece37!2z4Lih4LmI4Lit4LiZ4LiE4Lil4Li44Lii4Lir4Lil4Lin4LiH!5e1!3m2!1sen!2sth!4v1697089687776!5m2!1sen!2sth" width="600" height="450" style={{border:'0'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            

            <Rating
                five={20}
                four={15}
                three={3}
                two={5}
                one={20}
                id="86c562dc-a878-4e79-b2bf-2488181797e3"
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
                    hotelname="Ozone โฮมสเตย์"
                    image="../Hotel/mountain/1.jpg"
                    star={5}
                    rating={68}
                    price="725"
                ></HotelCard>
                <HotelCard
                    hotelname="วงศ์ตะวัน รีสอร์ท"
                    image="../Hotel/mountain/3.jpg"
                    star={5}
                    rating={17}
                    price="500"
                ></HotelCard>
                <HotelCard
                    hotelname="ท่าสองยางฮิลล์ รีสอร์ท"
                    image="../Hotel/mountain/2.jpg"
                    star={4}
                    rating={82}
                    price="585"
                ></HotelCard>

            </div>

        </main>

        
    )
}




