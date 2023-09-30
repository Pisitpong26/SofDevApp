/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/Navbar";
import AttractImage from "@/components/AttractImage";
import Rating from "@/components/RatingReview";

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


        </main>
    )
}