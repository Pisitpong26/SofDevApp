/* eslint-disable @next/next/no-img-element */
"use client"; // This is a client component
import Navbar from "@/components/Navbar";
import AttractImage from "@/components/AttractImage";
import Rating from "@/components/RatingReview";
import ReviewCard from "@/components/ReviewCard"
import HotelCard from "@/components/HotelCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import axios , { AxiosResponse } from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Popup from '@/components/Popup';

const request = axios.create({
  baseURL: "http://34.124.245.31:8000"  // This should be the backend server's IP and port
});

// export const GetAllAttraction = ()=>
//         	request.get("http://34.124.245.31:8000/attraction" )

const GetAllAttraction = (): Promise<AxiosResponse<any>> => {
        return request.get("http://34.124.245.31:8000/attraction");
};


function AttractionDetail({}){
    const [attractionReview, setAttractionReview] = useState<any[]>([]);
    // useEffect(() => {
    //     GetAllAttraction()
    //     .then((response) => {
    //         const attractions = response.data[0].attractions;
    //         if (attractions && attractions.length > 0) {
    //             const AttractionName = attractions[3].name;
    //             const AttractionReview = attractions[3].reviews;
    //             setAttractionReview(AttractionReview);
    //             console.log('Attraction Name:', AttractionName);
    //             console.log('Reviews',AttractionReview)
    //           } else {
    //             console.log('No attractions found.');
    //         }
    //     })
    //     .catch((error) => {
    //         // Handle errors
    //         console.error('Error getting attractions:', error);
    //         alert('Error reading value');
    //       });
    // }, []);
    useEffect(() => {
        const fetchAttractions = async () => {
          try {
            const response = await GetAllAttraction();
            const attractions = response.data[0].attractions;
            if (attractions && attractions.length > 0) {
              const AttractionName = attractions[3].name;
              const AttractionReview = attractions[3].reviews;
              setAttractionReview(AttractionReview);
              console.log('Attraction Name:', AttractionName);
              console.log('Reviews', AttractionReview);
            } else {
              console.log('No attractions found.');
            }
          } catch (error) {
            console.error('Error getting attractions:', error);
            alert('Error reading value');
          }
        };
      
        fetchAttractions();
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
            ถ้ำสีฟ้า ตั้งอยู่ภายใน สำนักสงฆ์พุทธคยาถ้ำสีฟ้า ตำบลแม่กุ อำเภอแม่สอด จังหวัดตาก มีลักษณะเป็นถ้ำหินขนาดกว้างใหญ่ แต่ความไม่ธรรมดาคือ เป็น ถ้ำที่มีหินสีฟ้า และเนื้อหินยังมีลวดลายสวยงามมากๆ อีกด้วยค่ะ ภายในถ้ำก็จะเต็มไปด้วยหินงอกหินย้อย<br/><br/>บริเวณโถงถ้ำด้านหน้า จะมีพระพุทธรูปนอนในศิลปะแบบเมียนม่า ให้เราได้กราบสักการะกันก่อนเข้าถ้ำอีกด้วยนะคะ ส่วนหินบริเวณปากถ้ำก็สวยไม่แพ้ในถ้ำเลย เพียงแค่หน้าปากถ้ำจะไม่ได้เป็นสีฟ้าทั้งหมดเท่านั้นค่ะ มีแทรกสีฟ้าบ้างนิดหน่อย พอให้เป็นน้ำจิ้มก่อนจะเข้าไปชมผนังถ้ำกันที่ด้านในค่ะ<br/><br/>ภายใน ถ้ำสีฟ้า ก็จะมีพระพุทธรูปและสิ่งศักดิ์สิทธิ์ต่างๆ ให้ได้เข้าไปสักการะกราบไหว้กันค่ะ และจะมีในส่วนของซอกหิน ช่องเล็กช่องน้อยต่างๆ สลับซับซ้อนกันไปมา โดยเราจะสามารถเดินเที่ยวชมรอบๆ ถ้ำได้เลยค่ะ เพราะจะมีทางเดินยาวไปตามทางอย่างดีเลย ที่เราเห็นผนังเป็นสีฟ้านั้น ก็เพราะเกิดจากการเปลี่ยนแปลงของสสารในพื้นผนัง ทำให้กลายเป็นผนังสีสวยแบบนี้ค่ะ
            </div>
            <div className="flex justify-center mt-5">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.6252404782244!2d98.70992847474885!3d16.602382024945445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30dd910d53d948f3%3A0xe5fd908344354ce3!2sBlue%20Cave!5e1!3m2!1sen!2sth!4v1697020062553!5m2!1sen!2sth" width="1000" height="450" style={{ border: '0' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                
            </div>
            
            
            <Rating
                five={ratingCounts.five}
                four={ratingCounts.four}
                three={ratingCounts.three}
                two={ratingCounts.two}
                one={ratingCounts.one}
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
};
export default AttractionDetail;
