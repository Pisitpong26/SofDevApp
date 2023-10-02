/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/Navbar";
import AttractImage from "@/components/AttractImage";
import Rating from "@/components/RatingReview";
import ReviewCard from "@/components/ReviewCard"
import HotelCard from "@/components/HotelCard";

interface AttractionDetail {
    
    star:number;
}

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


            <Rating
                five={23}
                four={11}
                three={20}
                two={14}
                one={1}
            ></Rating>
             
            <div className="flex flex-row w-full h-[300px] bg-gray-300 bg-opacity-30 pt-10 justify-center gap-[40px]"> 
                <ReviewCard
                    username="16sakuraa"
                    star={4}
                    content="ผมลองมาเล่นบอลตามพี่คนนี้ดู แกคัดบอลแม่นดี บอลสเต็ปแตกบ่อยมากครับ #กำไรเต็มคาราเบล #มีแจกแนวทางหน้าเฟสฟรีทุกวัน ลองกดติดตามดู Suppaphol Areewattanawong"
                
                ></ReviewCard>
                <ReviewCard
                    username="เกิดมาเพื่อเกรียน"
                    star={1}
                    content="กากกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกก"
                
                ></ReviewCard>
                <ReviewCard
                    username="Apple"
                    star={5}
                    content="ถ้ำสวยมาก มีที่ให้ถ่ายรูปเยอะเลย รีบไปตอนคนยังไม่เยอะนะ เพราะที่จอดรถน้อย  "
                
                ></ReviewCard>
            </div>

            <div className="flex flex-row w-full h-[300px] bg-gray-300 bg-opacity-30 pt-2 justify-center gap-[30px]"> 
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