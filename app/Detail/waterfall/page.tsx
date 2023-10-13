/* eslint-disable @next/next/no-img-element */
"use client"; // This is a client component
import Navbar from "@/components/Navbar";
import AttractImage from "@/components/AttractImage";
import Rating from "@/components/RatingReview";
import {ReviewCard} from "@/components/ReviewCard";
import HotelCard from "@/components/HotelCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import Popup from "@/components/Popup";
const request = axios.create({
  baseURL: "http://34.124.245.31:8000" 
});

const GetAllAttraction = ()=>
        	request.get("http://34.124.245.31:8000/attraction" )


export default function AttractionDetail({}){
    const [attractionReview, setAttractionReview] = useState<any[]>([]);
    useEffect(() => {
        GetAllAttraction()
        .then((response) => {
            const attractions = response.data[0].attractions;
            if (attractions && attractions.length > 0) {
                const AttractionName = attractions[4].name;
                const AttractionReview = attractions[4].reviews;
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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.3685668047406!2d99.0004493747523!3d16.777297720094634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30dddccb50cb1d27%3A0xac0d20fda3704ee4!2z4LiZ4LmJ4Liz4LiV4LiB4Lil4Liy4LiZ4Liq4Liy4LiH!5e1!3m2!1sen!2sth!4v1697089651415!5m2!1sen!2sth" width="1000" height="450" style={{border:'0'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>


            </div>
            <Rating
                five={ratingCounts.five}
                four={ratingCounts.four}
                three={ratingCounts.three}
                two={ratingCounts.two}
                one={ratingCounts.one}
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
                <Link target="blank" href="https://www.agoda.com/th-th/suansin-garden-hotel/hotel/all/tak-th.html?finalPriceView=1&isShowMobileAppPrice=false&cid=1731617&numberOfBedrooms=&familyMode=false&adults=2&children=0&rooms=1&maxRooms=0&checkIn=2023-10-17&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=-1&showReviewSubmissionEntry=false&currencyCode=THB&isFreeOccSearch=false&isCityHaveAsq=false&pushId=CgYIgJ23qQYSBgiAwLypBhgBIImd5wcqCioIIgIIASoCCAQ=49f2d163-cd27-78aa-7b8c-00e6eda47e2b_20231011_23&los=1&searchrequestid=6dd41d50-7419-476e-ac2e-858d9eed083a">
                <HotelCard
                    hotelname="โรงแรมสวนสิน การ์เด้น"
                    image="../Hotel/waterfall/1.jpg"
                    star={4}
                    rating={485}
                    price="514"
                ></HotelCard></Link>
                <Link target="blank" href="https://www.agoda.com/tak-andaman-resort-hotel-tak/hotel/tak-th.html?cid=1844104">
                <HotelCard
                    hotelname="Tak Andaman Hotel"
                    image="../Hotel/waterfall/2.jpg"
                    star={4}
                    rating={246}
                    price="825"
                ></HotelCard></Link>
                <Link target="blank" href="https://www.agoda.com/banrai-chernma-resort/hotel/tak-th.html?cid=1844104">
                <HotelCard
                    hotelname="บ้านไร่เชิญมา รีสอร์ท"
                    image="../Hotel/waterfall/3.jpg"
                    star={4}
                    rating={331}
                    price="384"
                ></HotelCard></Link>
                <Link target="blank" href="https://www.agoda.com/th-th/viangtak-riverside-hotel/hotel/tak-th.html?finalPriceView=1&isShowMobileAppPrice=false&cid=1844104&numberOfBedrooms=&familyMode=false&adults=2&children=0&rooms=1&maxRooms=0&checkIn=2023-10-12&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=1&showReviewSubmissionEntry=false&currencyCode=THB&isFreeOccSearch=false&isCityHaveAsq=false&los=2&searchrequestid=c2d760ed-b31f-4cb6-892f-f68d9de0b29d">
                <HotelCard
                    hotelname="เวียงตากริเวอร์ไซด์"
                    image="../Hotel/waterfall/4.jpg"
                    star={4}
                    rating={1218}
                    price="1,000"
                ></HotelCard></Link>

            </div>

        </main>

        
    )
}




