/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/Navbar";
import AttractImage from "@/components/AttractImage";
import Rating from "@/components/RatingReview";
import { FaHive } from "react-icons/fa6";

export default function AttractionDetail(){
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
                five={15}
                four={5}
                three={20}
                two={14}
                one={1}
            ></Rating>
             
            


        </main>
    )
}