import Banner from "@/components/Banner";
import Catagory from "@/components/Catagory";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { BsTelephoneFill } from "react-icons/bs";
import { FaBoxArchive } from "react-icons/fa6";
import { BiSolidMessageRoundedError } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";


export default function Home() {
  return (
    <main>
      <div className = "w-full h-[500px]  bg-banner-bg bg-center rounded-b-[150px]">
        <div className="w-full h-[500px] bg-black bg-opacity-40 text-white rounded-b-[150px]">
          <Navbar/>
          <Banner/>
        </div>
      </div>
      <Catagory/>
      <div className="mx-auto mt-48   mb-10 flex flex-col justify-center items-center">
        <Image src="/Pic/history.png" width={90} height={90} alt="Picture of the author"/>
        <h1 className="font-bold text-center text-6xl text-cyan-800  ">History</h1>
        <h1 className="font-bold text-center text-sm ">ประวัติความเป็นมาของจังหวัดตาก</h1>
      </div>
      {/* history */}
      <div className="w-[900px] h-[300px] bg-white rounded-[20px] mx-auto shadow-2xl flex flex-row justify-around  items-center">
        <Image src="/Pic/Banner.jpeg" width={300} height={200} alt="Picture of the author"/>
        <div className="w-[500px] h-[200px] flex flex-col">
          <h1 className="font-bold text-center text-xl my-5">ประวัติความเป็นมาของจังหวัดตาก</h1>
          <h1 className="font-bold text-left text-sm">คำขวัญประจำจังหวัด :  ธรรมชาติน่ายล ภูมิพลเขื่อนใหญ่ พระเจ้าตากเกรียงไกร เมืองไม้และป่างาม</h1>
          <h1 className="font-bold text-left text-sm">ตราประจำจังหวัด : รูปสมเด็จพระเนรศวรมหาราชทรงหลั่ง
          ทักษิโณทกบนคอช้าง</h1>
          <h1 className="font-bold text-left text-sm">ต้นไม้ประจำจังหวัด :  ต้นแดง (Xylia Kerrii)</h1>
          <h1 className="font-bold text-left text-sm">ดอกไม้ประจำจังหวัด :  ดอกเสี้ยวดอกขาว (Bauhinial variegata)</h1>
          <h1 className="font-bold text-left text-sm">สัตว์ประจำประวัติ :  ปลาตะพากส้มหรือปลาจาด (Hypsibarbusmalcolmi)</h1>
        </div>
      </div>

      {/* Catagories */}
      <div className="w-[1200px] h-[300px] bg-banner2-bg mx-auto my-10 shadow-2xl flex flex-col justify-around  items-center">
        <div className="w-[1200px] h-[1500px] flex flex-row justify-around items-center">

          <div className="w-[150px] h-[150px] bg-cyan-600  rounded-[20px] shadow-xl flex flex-col justify-center items-center">
                <FaLocationDot className = "w-[70px] h-[70px] fill-white"/>
          </div>
          <div className="w-[150px] h-[150px] bg-orange-500 rounded-[20px] shadow-xl flex flex-col justify-center items-center">
              <FaBoxArchive className = "w-[70px] h-[70px] fill-white"/>
              
          </div>
          <div className="w-[150px] h-[150px] bg-yellow-300 rounded-[20px] shadow-xl flex flex-col justify-center items-center">
              <BiSolidMessageRoundedError className = "w-[70px] h-[70px] fill-white"/>
          </div>
          <div className="w-[150px] h-[150px] bg-orange-500 rounded-[20px] shadow-xl flex flex-col justify-center items-center">
              <BsTelephoneFill className = "w-[70px] h-[70px] fill-white"/>
          </div>
        </div>

        <div className="w-[1200px] h-[50px] flex flex-row justify-around mb-10 ">
          <h1 className="w-[150px] text-white font-bold text-center">ATTRACTION</h1>
          <h1 className="w-[150px] text-white font-bold text-center">PRODUCT</h1>
          <h1 className="w-[150px] text-white font-bold text-center">ABOUT</h1>
          <h1 className="w-[150px] text-white font-bold text-center">CONTACT</h1> 
        </div>
      </div>

      {/*Attraction*/}
      <div className="w-[1500px] h-[50px] flex flex-row justify-around mb-10 items-center">
          <h1 className="w-[500px] text-black font-bold text-left ml-10 text-2xl">ATTRACTION</h1>
          <div className="w-[500px] text-black flex flex-row justify-end">
            <BsFillArrowLeftCircleFill className = "w-[55px] h-[55px] mx-2"/>
            <BsFillArrowLeftCircleFill className = "w-[55px] h-[55px] rotate-180 fill-cyan-700 mx-2"/>
          </div>
      </div>
    </main> 
  )
}
