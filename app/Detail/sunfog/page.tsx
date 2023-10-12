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
import Link from "next/link";


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
            ชาวเขาใช้พื้นที่เกษตรเปิดสถานที่ท่องเที่ยวแห่งใหม่ “ม่อนหมอกตะวัน” อยู่ยอดดอยบ้านป่าหวาย โดยนายสุเมธ ศรีธีระวัฒน์ ผู้ใหญ่บ้านป่าหวย หมู่ที่ 3 ตำบลคีรีราษฎร์ อ.พบพระ จังหวัดตาก ได้ วางระบบ และระเบียบในการต้อนรับนักท่องเที่ยว เพื่อให้มีระบบการจัดการที่ถูกต้อง และเรียบร้อย เช่น สถานที่จอดรถยนต์ รถจักรยานยนต์ การทิ้งขยะ จัดการเส้นทางจราจร และบริหารจัดการพื้นที่ให้กับนักท่องเที่ยว โดยพิจารณาในด้านความปลอดภัย ความสะดวก และการรักษาสิ่งแวดล้อม ซึ่งพื้นที่ดังกล่าว เป็นของราษฎรในหมู่บ้านที่ครอบครองมานาน มีพื้นที่ทั้งหมด 50 ไร่ อยู่บนยอดเขา มีความสูง1,100 เมตร เต็มไปด้วยทะเลหมอกที่สวยงามในช่วงเช้า ชมพระอาทิตย์ขึ้น และพระอาทิตย์ตกยามเย็น สภาพอากาศมีลมพัดเย็นสบาย แต่ในฤดูหนาวจะหนาวเย็นมาก หรือ แม้แต่ปัจจุบัน ก็มีนักท่องเที่ยวในพื้นที่ และนักท่องเที่ยวจากต่างจังหวัดไปกางพักนอนค้างคืนกัน  ซึ่งชาวเขาอย่างพวกเราได้ช่วยกันพัฒนาแหล่งท่องเที่ยวแห่งนี้ ด้วยสถานที่พัก การบริการเต้นท์ บริการอาหารเครื่องดื่ม อย่างเช่น หมูกระทะ ปลาเผา ฯลฯ
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
                id="6993e1af-8c52-4289-8241-a9974daa7464"
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
                <Link target="blank" href="https://www.facebook.com/p/%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%97%E0%B8%B4%E0%B8%A7%E0%B9%80%E0%B8%82%E0%B8%B2%E0%B8%94%E0%B8%AD%E0%B8%A2%E0%B8%9B%E0%B9%88%E0%B8%B2%E0%B8%AB%E0%B8%A7%E0%B8%B2%E0%B8%A2-100076329438778/?paipv=0&eav=Afbt9bqRbjhhug4DTl7DA7WLVx49Nq3PWn5qVfS0MX2HUGfWnzdq37ZufwUmo9FMG-Q&_rdr">
                <HotelCard
                    hotelname="บ้านทิวเขาดอยป่าหวาย"
                    image="../Hotel/sunfog/1.jpg"
                    star={5}
                    rating={34}
                    price="1,500"
                ></HotelCard></Link>
                <Link target="blank" href="https://www.facebook.com/p/%E0%B8%AE%E0%B8%B1%E0%B8%81%E0%B9%80%E0%B8%82%E0%B8%B2%E0%B9%81%E0%B8%84%E0%B8%A1%E0%B8%9B%E0%B9%8C%E0%B8%9B%E0%B8%B4%E0%B9%89%E0%B8%87-%E0%B8%94%E0%B8%AD%E0%B8%A2%E0%B8%9B%E0%B9%88%E0%B8%B2%E0%B8%AB%E0%B8%A7%E0%B8%B2%E0%B8%A2-100076266823553/?paipv=0&eav=AfYcY-lNsfhSyIw7VLzsj5c58pe-RklWkPflQ_s520kNViocpncrdJkWsDvkZmXfDxU&_rdr">
                <HotelCard
                    hotelname="ฮักเขาแคมป์ปิ้ง"
                    image="../Hotel/sunfog/2.jpg"
                    star={5}
                    rating={6}
                    price="1,100"
                ></HotelCard></Link>
                <Link target="blank" href="https://www.facebook.com/doipawaicamping/">
                <HotelCard
                    hotelname="โฮมสเตย์ ดอยป่าหวาย"
                    image="../Hotel/sunfog/3.jpg"
                    star={5}
                    rating={6}
                    price="1,200"
                ></HotelCard></Link>


            </div>

        </main>

        
    )
}




