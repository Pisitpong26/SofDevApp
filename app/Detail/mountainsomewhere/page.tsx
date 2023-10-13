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
import axios from "axios";
import Popup from '@/components/Popup';

const request = axios.create({
    baseURL: "http://34.124.245.31:8000"  // This should be the backend server's IP and port
  });
  
  export const GetAllAttraction = ()=>
              request.get("http://34.124.245.31:8000/attraction" )

export default function AttractionDetail({}){
    const [attractionReview, setAttractionReview] = useState<any[]>([]);
    useEffect(() => {
        GetAllAttraction()
        .then((response) => {
            const attractions = response.data[0].attractions;
            if (attractions && attractions.length > 0) {
                const AttractionName = attractions[1].name;
                const AttractionReview = attractions[1].reviews;
                setAttractionReview(AttractionReview);
                console.log('Attraction Name:', AttractionName);
                console.log('Reviews',AttractionReview)
              } else {
                console.log('No attractions found.');
            }
        })
        .catch((error) => {
            // Handle errors
            console.error('Error getting attractions:', error);
            alert('Error reading value');
          });
    }, []);

    const ratingCounts = {
        five: 0,
        four: 0,
        three: 0,
        two: 0,
        one: 0
    };

    attractionReview.forEach(attractionReview => {
        switch (attractionReview.rating) {
            case 5:
                ratingCounts.five++;
                break;
            case 4:
                ratingCounts.four++;
                break;
            case 3:
                ratingCounts.three++;
                break;
            case 2:
                ratingCounts.two++;
                break;
            case 1:
                ratingCounts.one++;
                break;
            default:
                break;
        }
    });

    const [popupData, setPopupData] = useState<{
        username: string;
        star: number;
        content: string;
      } | null>(null);

      const handleSeeMoreClick = (username: string, star: number, content: string) => {
        setPopupData({ username, star, content });
      };
    
      const handleClosePopup = () => {
        setPopupData(null);
      };
    
    
    return(
        
        <main>

            <div className="w-full bg-blue bg-opacity-100 text-black" ><Navbar /><h1></h1></div>
            <div className='mt-4 max-w-screen-2xl mx-auto flex flex-col justify-center items-center'>
                <h2 className=" md:text-5xl uppercase font-bold mt-3 text-blue tracking-widest">ม่อนคลุยหลวง ดอยทูเล</h2>
            </div>
            <div>
                <AttractImage
                 imgSrc1="../AttractDetail/mountainsomewhere/1.png"
                 imgSrc2="../AttractDetail/mountainsomewhere/2.jpg"
                 imgSrc3="../AttractDetail/mountainsomewhere/3.jpg"
                 imgSrc4="../AttractDetail/mountainsomewhere/4.jpg"
                ></AttractImage>
            </div>

            <div className="mt-10 text-black text-justify px-40 text-xl">
            ตั้งอยู่ที่ อ.ท่าสองยาง จังหวัดตาก และดอยทูเลเป็นยอดเขาที่สูงที่สุดในอ.ท่าสองยาง และ เป็นเขาที่สูงติดอันดับที่ 10 ของประเทศไทยอีกด้วย เสน่ห์ของการมาเที่ยวที่นี่คือเส้นทางการเดินป่า3 วัน และทะเลหมอกที่ไหล สลับกับภูเขา หลายสิบลูกไกลสุดลูกหูลูกตา ที่ความสูงจากระดับน้ำทะเล 1,350 เมตร
            </div>
            <div className="flex justify-center mt-5">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.3862780998184!2d98.00278487780628!3d17.611256353318996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30dcbbd23cd54355%3A0xac4867c4b1cece37!2z4Lih4LmI4Lit4LiZ4LiE4Lil4Li44Lii4Lir4Lil4Lin4LiH!5e1!3m2!1sen!2sth!4v1697089687776!5m2!1sen!2sth" width="1000" height="450" style={{border:'0'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            

            <Rating
                five={ratingCounts.five}
                four={ratingCounts.four}
                three={ratingCounts.three}
                two={ratingCounts.two}
                one={ratingCounts.one}
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
            {popupData && (
                    <Popup
                    username={popupData.username}
                    star={popupData.star}
                    content={popupData.content}
                    onClose={handleClosePopup}
                    />
                )}
            <div className="flex flex-row w-full h-[300px] bg-gray-300 bg-opacity-30 pt-7 "> 
                <Swiper
                        spaceBetween={10}
                        slidesPerView={4}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                {attractionReview.map((attractionReview, index) => (
                        <SwiperSlide key={index}>
                            <ReviewCard 
                            username={attractionReview.user.username} 
                            star={attractionReview.rating} 
                            content={attractionReview.detail} 
                            onSeeMoreClick={() =>
                                handleSeeMoreClick(
                                  attractionReview.user.username,
                                  attractionReview.rating,
                                  attractionReview.detail
                                )
                              }
                            />
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
                <Link target="blank" href="https://www.facebook.com/p/Ozone-%E0%B9%82%E0%B8%AE%E0%B8%A1%E0%B8%AA%E0%B9%80%E0%B8%95%E0%B8%A2%E0%B9%8C-100063006650516/?locale=th_TH&paipv=0&eav=AfYPtbRCGcI93PEZ1_THRmhknV1HiY8qLhmgwAdzP2q72MyhiNqULU3FBVAD7cDl6Co&_rdr">                
                <HotelCard
                    hotelname="Ozone โฮมสเตย์"
                    image="../Hotel/mountain/1.jpg"
                    star={5}
                    rating={68}
                    price="725"
                ></HotelCard></Link>
                <Link target="blank" href="https://th.tripadvisor.com/Hotel_Review-g2237761-d10287649-Reviews-Wongtawan_Resort-Tha_Song_Yang_Tak_Province.html">
                <HotelCard
                    hotelname="วงศ์ตะวัน รีสอร์ท"
                    image="../Hotel/mountain/3.jpg"
                    star={5}
                    rating={17}
                    price="500"
                ></HotelCard></Link>
                <Link target="blank" href="https://www.choowap.com/th/hotel/tha-song-yang-hill-resort">
                <HotelCard
                    hotelname="ท่าสองยางฮิลล์ รีสอร์ท"
                    image="../Hotel/mountain/2.jpg"
                    star={4}
                    rating={82}
                    price="585"
                ></HotelCard></Link>

            </div>

        </main>

        
    )
}




