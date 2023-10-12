/* eslint-disable @next/next/no-img-element */
"use client"; // This is a client component
import Navbar from "@/components/Navbar";
import AttractImage from "@/components/AttractImage";
import Rating from "@/components/RatingReview";
import ReviewCard from "@/components/ReviewCard"
import HotelCard from "@/components/HotelCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
export default function AttractionDetail(){
    return(
        
        <main>
            <div className="w-full bg-blue bg-opacity-100 text-black" ><Navbar /><h1></h1></div>
            <div className='mt-4 max-w-screen-2xl mx-auto flex flex-col justify-center items-center'>
                <h2 className=" md:text-5xl uppercase font-bold mt-3 text-blue tracking-widest">น้ำตกทีลอซู</h2>
            </div>
            <div>
                <AttractImage
                 imgSrc1="../AttractDetail/thilosu/1.png"
                 imgSrc2="../AttractDetail/thilosu/2.jpg"
                 imgSrc3="../AttractDetail/thilosu/3.jpg"
                 imgSrc4="../AttractDetail/thilosu/4.jpg"
                ></AttractImage>
            </div>
            
            <div className="mt-10 text-black text-justify px-40 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="flex justify-center mt-5">
                
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.890914788202!2d98.75081922473596!3d15.926849943234629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e71479542dda01%3A0x66d1ff88b7ec4da4!2sThi%20Lo%20Su%20Waterfall!5e1!3m2!1sen!2sth!4v1697019564903!5m2!1sen!2sth" width="600" height="450" style={{border:'0'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <Rating
                five={15}
                four={4}
                three={2}
                two={1}
                one={1}
                id='77bb3e20-34bd-4ab3-b6a4-8ca12a49d4fd'
            ></Rating>
            <div className="flex flex-col justify-center items-center h-full bg-gray-300 bg-opacity-30">
                <div className="text-4xl font-bold text-blue">
                    Reviews
                </div>
                <div className="mt-1">
                    Swipe to See More
                </div>
            </div>
            {/* <div className="flex flex-row w-full h-[300px] bg-gray-300 bg-opacity-30 pt-7 justify-center gap-[40px]"> 
                <ReviewCard
                    username="วัยรุ่นเมกัน"
                    star={4}
                    content="โคตรสุดโคตรเอา"
                
                ></ReviewCard>
                <ReviewCard
                    username="Marmalade"
                    star={5}
                    content="สวยมากค่า พนง. ใจดีบริการเป็นกันเองสุด ๆ ค่าเข้าไม่แพง ที่จอดรถเยอะ ให้ห้าดาวเลยค่า"
                
                ></ReviewCard>
                <ReviewCard
                    username="น้าอู๊ด"
                    star={1}
                    content="งงเลย ไปถึงหน้าประตูทางเข้าแล้ว ประตูติดป้ายว่าเลื่อน ไม่รู้ต้องมาวันไหน"
                
                ></ReviewCard>
            </div> */}

            <div className="flex flex-row w-full h-[300px] bg-gray-300 bg-opacity-30 pt-7 "> 
                <Swiper
                    spaceBetween={10}
                    slidesPerView={4}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide><ReviewCard
                    username="วัยรุ่นเมกัน"
                    star={5}
                    content="โคตรสุดโคตรเอา"
                
                ></ReviewCard></SwiperSlide>
                <SwiperSlide><ReviewCard
                    username="Marmalade"
                    star={5}
                    content="สวยมากค่า พนง. ใจดีบริการเป็นกันเองสุด ๆ ค่าเข้าไม่แพง ที่จอดรถเยอะ ให้ห้าดาวเลยค่า"
                
                ></ReviewCard></SwiperSlide>
                <SwiperSlide><ReviewCard
                    username="น้าอู๊ด"
                    star={1}
                    content="งงเลย ไปถึงหน้าประตูทางเข้าแล้ว ประตูติดป้ายว่าเลื่อน ไม่รู้ต้องมาวันไหน"
                
                ></ReviewCard></SwiperSlide>
                <SwiperSlide><ReviewCard
                    username="มารายแครี่"
                    star={4}
                    content="ชอบบรรยากาศแห่งการได้ร่ำเมรัย ร่วมวงกับเพื่อนรู้ใจจะหาสุขใดไม่มีเปรียบปราน"
                
                ></ReviewCard></SwiperSlide>
                <SwiperSlide><ReviewCard
                    username="เซาะกราว"
                    star={4}
                    content="ดีแหละ"
                
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
                    star={5}
                    rating={69}
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