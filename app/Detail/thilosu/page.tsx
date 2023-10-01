/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/Navbar";
import AttractImage from "@/components/AttractImage";
import Rating from "@/components/RatingReview";
import ReviewCard from "@/components/ReviewCard"

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

            <Rating
                five={15}
                four={4}
                three={2}
                two={1}
                one={1}
            ></Rating>

            <div className="flex flex-row w-full h-[300px] bg-gray-300 bg-opacity-30 pt-10 justify-center gap-[40px]"> 
                <ReviewCard
                    username="บะหมี่แห้ง"
                    star={2}
                    content="น้ำเยอะเกิน"
                
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
            </div>


        </main>
    )
}