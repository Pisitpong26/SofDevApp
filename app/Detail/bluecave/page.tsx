/* eslint-disable @next/next/no-img-element */
"use client"; // This is a client component
import Navbar from "@/components/Navbar";
import AttractImage from "@/components/AttractImage";
import Rating from "@/components/RatingReview";
import ReviewCard from "@/components/ReviewCard"
import HotelCard from "@/components/HotelCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import axios from "axios";

const request = axios.create({
  baseURL: "http://34.124.245.31:8000"  // This should be the backend server's IP and port
});



interface AttractionDetail {
    
    star:number;
}

interface Review {
    username: string;
    star: number;
    content: string;
}

const reviews: Review[] = [
    {
        username: 'วัยรุ่นเมกัน',
        star: 5,
        content: 'โคตรสุดโคตรเอา',
    }
];


export default function AttractionDetail({}){

    return(
        
        <main>
            <div className="w-full bg-blue bg-opacity-100 text-black" ><Navbar /><h1></h1></div>
            <div className='mt-4 max-w-screen-2xl mx-auto flex flex-col justify-center items-center'>
                <h2 className=" md:text-5xl uppercase font-bold mt-3 text-blue tracking-widest">ถ้ำสีฟ้า</h2>
            </div>
            <div>
                <AttractImage
                 imgSrc1="../AttractDetail/bluecave/1.png"
                 imgSrc2="../AttractDetail/bluecave/2.png"
                 imgSrc3="../AttractDetail/bluecave/3.png"
                 imgSrc4="../AttractDetail/bluecave/4.png"
                ></AttractImage>
            </div>
            
            <div className="mt-10 text-black text-justify px-40 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="flex justify-center mt-5">
                
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3823.4855729891983!2d98.70992847474886!3d16.60238202494545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30dd910d53d948f3%3A0xe5fd908344354ce3!2sBlue%20Cave!5e0!3m2!1sen!2sth!4v1697018418930!5m2!1sen!2sth" width="600" height="450" style={{ border: '0' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            
            <Rating
                five={23}
                four={11}
                three={20}
                two={14}
                one={1}
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
                <SwiperSlide><ReviewCard
                    username="16sakuraa"
                    star={4}
                    content="ผมลองมาเล่นบอลตามพี่คนนี้ดู แกคัดบอลแม่นดี บอลสเต็ปแตกบ่อยมากครับ #กำไรเต็มคาราเบล #มีแจกแนวทางหน้าเฟสฟรีทุกวัน ลองกดติดตามดู Suppaphol Areewattanawong"
                
                ></ReviewCard></SwiperSlide>
                <SwiperSlide><ReviewCard
                    username="Kanom"
                    star={5}
                    content="สวยขนาดนี้ไม่มาไหวอ่อ"
                
                ></ReviewCard></SwiperSlide>
                <SwiperSlide><ReviewCard
                    username="Apple"
                    star={5}
                    content="ถ้ำสวยมาก มีที่ให้ถ่ายรูปเยอะเลย รีบไปตอนคนยังไม่เยอะนะ เพราะที่จอดรถน้อย  "
                
                ></ReviewCard></SwiperSlide>
                <SwiperSlide><ReviewCard
                    username="มารายแครี่"
                    star={4}
                    content="ชอบบรรยากาศแห่งการได้ร่ำเมรัย ร่วมวงกับเพื่อนรู้ใจจะหาสุขใดไม่มีเปรียบปราน"
                
                ></ReviewCard></SwiperSlide>
                <SwiperSlide><ReviewCard
                    username="เกิดมาเพื่อเกรียน"
                    star={1}
                    content="กาก"
                
                ></ReviewCard></SwiperSlide>
                <SwiperSlide><ReviewCard
                    username="โอ๊ต"
                    star={3}
                    content="โอ้ยคิดไม่ออกไม่รู้จะเขียนอะไร"
                
                ></ReviewCard></SwiperSlide>
                
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


{/* <div className="mt-3 w-[50px] h-[33px] bg-yellow-300 rounded-tl-md rounded-br-md font-bold text-2xl text-white text-center inset-y-0 right-4 absolute">
                                4.0
                            </div>
                            <div cl */}