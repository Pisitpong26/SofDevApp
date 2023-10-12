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
import Link from "next/link";

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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.6252404782244!2d98.70992847474885!3d16.602382024945445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30dd910d53d948f3%3A0xe5fd908344354ce3!2sBlue%20Cave!5e1!3m2!1sen!2sth!4v1697020062553!5m2!1sen!2sth" width="600" height="450" style={{ border: '0' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                
            </div>

            
            <Rating
                five={23}
                four={11}
                three={20}
                two={14}
                one={1}
                id="6719c065-3c21-4890-8e3f-32a35922f6d7"
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
                <Link target="blank" href="https://www.agoda.com/th-th/maesot-siri-hotel/hotel/tak-th.html?finalPriceView=1&isShowMobileAppPrice=false&cid=1841722&numberOfBedrooms=&familyMode=false&adults=1&children=0&rooms=1&maxRooms=0&checkIn=2023-10-13&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=-1&showReviewSubmissionEntry=false&currencyCode=THB&isFreeOccSearch=false&tag=65683183-ffc6-efe5-0bda-a9296881f1d0&isCityHaveAsq=false&tspTypes=16&los=1&searchrequestid=58211a38-7833-428f-8edc-e7f7625a480f"> 
                <HotelCard
                    hotelname="โรงแรมแม่สอดศิริ"
                    image="../Hotel/bluecave/1.jpg"
                    star={4}
                    rating={170}
                    price="562"
                ></HotelCard></Link>
                <Link target="blank" href="https://www.traveloka.com/th-th/hotel/thailand/shafa-resort-1000000718021">
                <HotelCard
                    hotelname="ชาฟา รีสอร์ท"
                    image="../Hotel/bluecave/2.jpg"
                    star={4}
                    rating={163}
                    price="544"
                ></HotelCard></Link>
                <Link target="blank" href="https://www.agoda.com/irawadee-resort/hotel/tak-th.html?cid=1844104">
                <HotelCard
                    hotelname="อิระวดี รีสอร์ท"
                    image="../Hotel/bluecave/3.jpg"
                    star={4}
                    rating={129}
                    price="960"
                ></HotelCard></Link>
                <Link target="blank" href="https://www.agoda.com/th-th/hop-inn-mae-sot/hotel/tak-th.html?finalPriceView=1&isShowMobileAppPrice=false&cid=1844104&numberOfBedrooms=&familyMode=false&adults=2&children=0&rooms=1&maxRooms=0&checkIn=2023-10-12&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=1&showReviewSubmissionEntry=false&currencyCode=THB&isFreeOccSearch=false&isCityHaveAsq=false&los=2&searchrequestid=5160d757-121b-490e-adc2-54332f4b4ec1">
                <HotelCard
                    hotelname="ฮ็อปอินน์ แม่สอด"
                    image="../Hotel/bluecave/4.jpg"
                    star={4}
                    rating={1278}
                    price="620"
                ></HotelCard></Link>
            </div>
            
        </main>
    )
}


{/* <div className="mt-3 w-[50px] h-[33px] bg-yellow-300 rounded-tl-md rounded-br-md font-bold text-2xl text-white text-center inset-y-0 right-4 absolute">
                                4.0
                            </div>
                            <div cl */}