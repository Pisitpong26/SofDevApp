/* eslint-disable @next/next/no-img-element */
"use client"; // This is a client component
import Navbar from "@/components/Navbar";
import AttractImage from "@/components/AttractImage";
import Rating from "@/components/RatingReview";
import ReviewCard from "@/components/ReviewCard"
import HotelCard from "@/components/HotelCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
const request = axios.create({
  baseURL: "http://34.124.245.31:8000" 
});

export const GetAllAttraction = ()=>
        	request.get("http://34.124.245.31:8000/attraction" )

export default function AttractionDetail(){
    const [attractionReview, setAttractionReview] = useState<any[]>([]);
    useEffect(() => {
        GetAllAttraction()
        .then((response) => {
            const attractions = response.data[0].attractions;
            if (attractions && attractions.length > 0) {
                const AttractionName = attractions[0].name;
                const AttractionReview = attractions[0].reviews;
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
                <p className="font-bold">น้ำตกทีลอซู</p> เป็นน้ำตกที่ตั้งอยู่ในเขตรักษาพันธุ์สัตว์ป่าอุ้มผาง อำเภออุ้มผาง จังหวัดตาก ห่างจากที่ทำการเขตฯ 3 กิโลเมตร มีลักษณะเป็นน้ำตกภูเขาหินปูนขนาดใหญ่ ตั้งอยู่บนความสูงจากระดับน้ำทะเล 900 เมตร เกิดจากลำห้วยกล้อท้อ ลำน้ำทั้งสายตกลงสู่หน้าผาสูงชัน มีน้ำไหลแรงตลอดปี ความกว้างของตัวน้ำตกประมาณ 500 เมตร ไหลลดหลั่นเป็นชั้น ๆ มีความสูงประมาณ 250 เมตร ล้อมรอบไปด้วยป่าดงดิบที่สมบูรณ์ เป็นน้ำตกที่มีขนาดใหญ่เป็นอันดับ 6 ของเอเชีย
            </div>
            <div className="flex justify-center mt-5">
                
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.890914788202!2d98.75081922473596!3d15.926849943234629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e71479542dda01%3A0x66d1ff88b7ec4da4!2sThi%20Lo%20Su%20Waterfall!5e1!3m2!1sen!2sth!4v1697019564903!5m2!1sen!2sth" width="600" height="450" style={{border:'0'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <Rating
                five={ratingCounts.five}
                four={ratingCounts.four}
                three={ratingCounts.three}
                two={ratingCounts.two}
                one={ratingCounts.one}
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

            <div className="flex flex-row w-full h-[300px] bg-gray-300 bg-opacity-30 pt-7 "> 
                <Swiper
                    spaceBetween={10}
                    slidesPerView={4}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                {attractionReview.map((attractionReview, index) => (
                        <SwiperSlide key={index}>
                            <ReviewCard username={attractionReview.user.username} star={attractionReview.rating} content={attractionReview.detail} />
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
                <Link target="blank" href="https://www.facebook.com/profile.php?id=100047632188169"> 
                <HotelCard
                    hotelname="บ้านริมธาร รีสอร์ท"
                    image="../Hotel/thilosu/1.jpg"
                    star={4}
                    rating={10}
                    price="650"
                ></HotelCard></Link>
                <Link target="blank" href="https://www.theelorsuriverside.com/">
                <HotelCard
                    hotelname="ทีลอซู ริเวอร์ไซด์"
                    image="../Hotel/thilosu/2.jpg"
                    star={4}
                    rating={152}
                    price="600"
                ></HotelCard></Link>
                <Link target="blank" href="https://www.agoda.com/th-th/umphangburiresort/hotel/tak-th.html?finalPriceView=1&isShowMobileAppPrice=false&cid=1841722&numberOfBedrooms=&familyMode=false&adults=2&children=0&rooms=1&maxRooms=0&checkIn=2023-10-12&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=-1&showReviewSubmissionEntry=false&currencyCode=THB&isFreeOccSearch=false&tag=6c04f62b-c4e3-2428-76fa-9a63e1a506d3&isCityHaveAsq=false&los=2&searchrequestid=34d086da-2ff3-4c14-a773-851c2cb69685">
                <HotelCard
                    hotelname="อุ้มผางบุรี รีสอร์ท"
                    image="../Hotel/thilosu/3.jpg"
                    star={4}
                    rating={130}
                    price="1,065"
                ></HotelCard></Link>
                <Link target="blank" href="https://www.choowap.com/th/hotel/baan-buppachat-resort">
                <HotelCard
                    hotelname="บ้านบุปชาติรีสอร์ท"
                    image="../Hotel/thilosu/4.jpg"
                    star={3}
                    rating={10}
                    price="790"
                ></HotelCard></Link>

            </div>


        </main>
    )
}