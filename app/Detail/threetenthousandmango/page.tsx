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
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
const request = axios.create({
  baseURL: "http://34.124.245.31:8000" 
});
import Popup from "@/components/Popup";
const GetAllAttraction = ()=>
        	request.get("http://34.124.245.31:8000/attraction" )


export default function AttractionDetail({}){
    const [attractionReview, setAttractionReview] = useState<any[]>([]);
    useEffect(() => {
        GetAllAttraction()
        .then((response) => {
            const attractions = response.data[0].attractions;
            if (attractions && attractions.length > 0) {
                const AttractionName = attractions[5].name;
                const AttractionReview = attractions[5].reviews;
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
                <h2 className=" md:text-5xl uppercase font-bold mt-3 text-blue tracking-widest">ดอยมะม่วงสามหมื่น</h2>
            </div>
            <div>
                <AttractImage
                 imgSrc1="../AttractDetail/threetenthousandmango/1.png"
                 imgSrc2="../AttractDetail/threetenthousandmango/2.jpg"
                 imgSrc3="../AttractDetail/threetenthousandmango/3.jpg"
                 imgSrc4="../AttractDetail/threetenthousandmango/4.jpg"
                ></AttractImage>
            </div>

            <div className="mt-10 text-black text-justify px-40 text-xl">
    <p className="font-bold">ดอยมะม่วงสามหมื่น</p> สถานที่ชมทะเลหมอกแสนสวยที่ต้องเดินลุยป่าและขึ้นเขาโดยใช้เวลา 4-5 ชั่วโมง นักท่องเที่ยวที่ตัดสินใจมาที่นี่ต้องเตรียมฟิตร่างกายให้พร้อม <br/>
    และเตรียมอุปกรณ์สำหรับกางเต็นท์ค้างคืนบนดอยด้วยเช่นกันค่ะ พอตื่นขึ้นมาก็จะได้พร้อมชมวิวทะเลหมอกสวยๆ ในยามเช้า<br/><br/>
    ชื่อของ ดอยมะม่วงสามหมื่น นี้ น่าจะมาจากวิวของด้านบนสุด ที่พอมองลงมาแล้วเหมือนกับผลมะม่วงนั่นเองค่ะ ทั้งนี้ก็ขึ้นอยู่กับจินตนาการของแต่ละคนด้วยนะคะ แต่ถ้าไปพูดชื่อนี้กับชาวบ้านก็อาจจะงงๆ เลยก็ได้นะคะ เพราะคนในพื้นที่จะเรียกกันว่า ดอยสามหมื่น<br/><br/>
    ใครที่ตั้งใจไปเที่ยวที่นี่แล้ว ก็อย่าลืมชม น้ำตกคู่ด้วยนะคะ ถือเป็นการเก็บไฮไลท์ทั้งสองไปในตัวเลย พลาดอย่างใดอย่างนึงไป อาจจะต้องกลับมานั่งเสียใจเลย ว่าขึ้นไปถึงขนาดนั้นทำไมไม่ไป และที่สำคัญควรจะติดต่อคนนำทางนะคะ เพราะ เส้นทางเดินป่านี้ต้องอาศัยคนที่ชำนาญทางมากพอสมควรเลยค่ะ เรียกได้ว่าโหดพอตัวเลยค่ะ แต่ถ้าใครชอบลุย อยากลองไปสักครั้งในชีวิต ก็ถือว่าคุ้มค่าอย่างมากเลยค่ะ
            </div>

            <div className="flex justify-center mt-5">
                
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7145.526921452637!2d98.60604124992518!3d15.877729059859867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e70f4bc767965b%3A0x596a5e52dc9acb2e!2sMa%20Muang%20Sam%20Muen%20trail!5e1!3m2!1sen!2sth!4v1697019489030!5m2!1sen!2sth"width="1000" height="450" style={{border:'0'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <Rating
                five={ratingCounts.five}
                four={ratingCounts.four}
                three={ratingCounts.three}
                two={ratingCounts.two}
                one={ratingCounts.one}
                id="46f6980b-3880-48e1-ae51-764348fd7469"
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
                <Link target="blank" href="https://www.agoda.com/th-th/umphangburiresort/hotel/tak-th.html?cid=1844104">        
                <HotelCard
                    hotelname="อุ้มผางบุรี รีสอร์ท"
                    image="../Hotel/mango/1.jpg"
                    star={4}
                    rating={130}
                    price="1,066"
                ></HotelCard></Link>
                {/* <HotelCard
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
                ></HotelCard> */}

            </div>

        </main>

        
    )
}




