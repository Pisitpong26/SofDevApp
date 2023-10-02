/* eslint-disable @next/next/no-img-element */
"use client"; // This is a client component
import Navbar from "@/components/Navbar";
import AttractImage from "@/components/AttractImage";
import Rating from "@/components/RatingReview";
import ReviewCard from "@/components/ReviewCard";
import map from "@/components/map";
import HotelCard from "@/components/HotelCard";

  

export default function AttractionDetail(){

    return(
        
        <main>

            <div className="w-full bg-blue bg-opacity-100 text-black" ><Navbar /><h1></h1></div>
            <div className='mt-4 max-w-screen-2xl mx-auto flex flex-col justify-center items-center'>
                <h2 className=" md:text-5xl uppercase font-bold mt-3 text-blue tracking-widest">template page only</h2>
            </div>
            <div>
                <AttractImage
                 imgSrc1="../AttractDetail/1.jpg"
                 imgSrc2="../AttractDetail/2.png"
                 imgSrc3="../AttractDetail/3.jpg"
                 imgSrc4="../AttractDetail/4.jpg"
                ></AttractImage>
            </div>

            <div className="mt-10 text-black text-justify px-40 text-xl">
             สร้างไว้เป็นหน้า Template เท่านั้น ถ้าหน้านี้ยังขึ้นอยู่ แสดงว่ายังทำไม่เสร็จ
            </div>

            <Rating
                five={20}
                four={15}
                three={3}
                two={5}
                one={20}
            ></Rating>
            
            
            <div className="bg-gray-300 bg-opacity-30">
                <div className="text-4xl font-bold text-blue w-full text-center ">
                    Reviews
                </div>
            </div>
            <div className="flex flex-row w-full h-[300px] bg-gray-300 bg-opacity-30 pt-7 justify-center gap-[40px]"> 
                <ReviewCard
                    username="16sakuraa"
                    star={999}
                    content="นึกแล้วว่าต้องอ่าน555+"
                
                ></ReviewCard>
                <ReviewCard
                    username="จอห์น นอนเล่น"
                    star={1}
                    content="ผมรักเมืองไทย"
                
                ></ReviewCard>
                <ReviewCard
                    username="สุนทรภู่ครูกวีขี่ฮอนด้า"
                    star={5}
                    content=" วิชาเหมือนสินค้า
                    อันมีค่าอยู่เมืองไกล
                    ต้องยากลำบากไป
                    จึงจะได้สินค้ามา
                   
                     จงตั้งเอากายเจ้า
                    เป็นสำเภาอันโสภา
                    ความเพียรเป็นโยธา
                    แขนซ้ายขวาเป็นเสาใบ
                   
                     นิ้วเป็นสายระยาง
                    สองเท้าต่างสมอใหญ่
                    ปากเป็นนายงานไป
                    อัชฌาสัยเป็นเสบียง
                   
                     สติเป็นหางเสือ
                    ถือท้ายเรือไว้ให้เที่ยง
                    ถือไว้อย่าให้เอียง
                    ตัดแล่นเลี่ยงข้ามคงคา
                   
                     ปัญญาเป็นกล้องแก้ว
                    ส่องดูแถวแนวหินผา
                    เจ้าจงเอาหูตา
                    เป็นล้าต้าฟังดูลม
                   
                     ขึ้เกียจคือปลาร้าย
                    จะทำลายให้เรือจม
                    เอาใจเป็นปืนคม
                    ยิงระดมให้จมไป
                   
                     จึงจะได้สินค้ามา
                    คือวิชาอันพิสมัย
                    จงหมั่นมั่นหมายใจ
                    อย่าได้คร้านการวิชา ."
                
                ></ReviewCard>
            </div>

            <div className="bg-gray-300 bg-opacity-30">
                <div className="text-4xl font-bold text-blue w-full text-center ">
                    Nearby Hotel
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