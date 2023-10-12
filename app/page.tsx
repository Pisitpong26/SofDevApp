"use client" 
import Banner from "@/components/Banner";
import Catagory from "@/components/Catagory";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { BsTelephoneFill } from "react-icons/bs";
import { FaBoxArchive } from "react-icons/fa6";
import { BiSolidMessageRoundedError } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

import '@/app/slider.css'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import '@ionic/react/css/core.css';
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import Footer from "@/components/Footer";
import Link from "next/link";
// import { IonIcon } from "@ionic/react";

export default function Home() {
  return (
    <main className="bg-[#EEE]">
      <div className = "w-full h-[500px]  bg-banner-bg bg-center rounded-b-[150px]">
        <div className="w-full h-[500px] bg-black bg-opacity-40 text-white rounded-b-[150px]">
          <Navbar/>
          <Banner/>
        </div>
      </div>
      <Catagory/>
      <div className="mx-auto mt-48   mb-10 flex flex-col justify-center items-center">
        <Image src="/Pic/history.png" width={90} height={90} alt="Picture of the author"/>
        <h1 className="font-bold text-center text-6xl text-cyan-800  ">Information</h1>
        <h1 className="font-bold text-center text-sm ">ข้อมูลทั่วไปของจังหวัดตาก</h1>
      </div>
      {/* history */}
      <div className="w-[900px] h-[300px] bg-white rounded-[20px] mx-auto shadow-2xl flex flex-row justify-around  items-center">
        <Image src="/Pic/Banner.jpeg" width={300} height={200} alt="Picture of the author"/>
        <div className="w-[500px] h-[200px] flex flex-col">
          <h1 className="font-bold text-center text-xl my-5">ข้อมูลทั่วไป</h1>
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

          <Link href="/Attraction">
            <div className="w-[150px] h-[150px] bg-cyan-600  rounded-[20px] shadow-xl flex flex-col justify-center items-center">
                  <FaLocationDot className = "w-[70px] h-[70px] fill-white"/>
            </div>
          </Link> 

          <Link href="/Products">
            <div className="w-[150px] h-[150px] bg-orange-500 rounded-[20px] shadow-xl flex flex-col justify-center items-center">
                <FaBoxArchive className = "w-[70px] h-[70px] fill-white"/>
            </div>
          </Link>

          <Link href="/About">
            <div className="w-[150px] h-[150px] bg-yellow-300 rounded-[20px] shadow-xl flex flex-col justify-center items-center">
                <BiSolidMessageRoundedError className = "w-[70px] h-[70px] fill-white"/>
            </div>
          </Link>
          
          <Link href="/Contact">
            <div className="w-[150px] h-[150px] bg-orange-500 rounded-[20px] shadow-xl flex flex-col justify-center items-center">
                <BsTelephoneFill className = "w-[70px] h-[70px] fill-white"/>
            </div>
          </Link>
        </div>
    
        <div className="w-[1200px] h-[50px] flex flex-row justify-around mb-10 ">
          <h1 className="w-[150px] text-white font-bold text-center">ATTRACTION</h1>
          <h1 className="w-[150px] text-white font-bold text-center">PRODUCT</h1>
          <h1 className="w-[150px] text-white font-bold text-center">ABOUT</h1>
          <h1 className="w-[150px] text-white font-bold text-center">CONTACT</h1> 
        </div>
      </div>

      {/*Attraction*/}
      <div className="slider-controler w-[1500px] h-[50px] flex flex-row justify-around my-12 items-center">
        <h1 className="w-[500px] text-black font-bold text-left ml-10 text-2xl">ATTRACTRION</h1>
          <div className="w-[500px] flex flex-row justify-end">
            <div className="prev">
              <BsFillArrowLeftCircleFill className = "w-[55px] h-[55px] mx-2"/>
            </div>
            <div className="next">
              <BsFillArrowLeftCircleFill className = "w-[55px] h-[55px] rotate-180 fill-cyan-700 mx-2"/>
            </div>
          </div>
      </div>

      <div className="w-[1300px] h-[400px] ml-28 flex flex-row justify-center items-center">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 400,
          depth: 0,
          modifier: 2.5,
        }}
          navigation={{
          nextEl: '.next',
          prevEl: '.prev'
        }}
        modules={[EffectCoverflow, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-[275px] h-[450px] rounded-[20px] bg-white shadow-xl flex flex-row justify-start  items-start ">
            <Image className="rounded-t-[20px] w-[275px] h-[250px]" src="/PicSlider/Nature/1.png" width={300} height={450} alt="Picture of the author"/>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="w-[275px] h-[450px] rounded-[20px] bg-white shadow-xl flex flex-row justify-start  items-start ">
            <Image className="rounded-t-[20px] w-[275px] h-[250px]" src="/PicSlider/Nature/2.png" width={400} height={300} alt="Picture of the author"/>
        </div>
        </SwiperSlide>
          
        <SwiperSlide>
          <div className="w-[275px] h-[450px] rounded-[20px] bg-white shadow-xl flex flex-row justify-start  items-start ">
          <Image className="rounded-t-[20px] w-[275px] h-[250px]" src="/PicSlider/Nature/3.png" width={400} height={300} alt="Picture of the author"/> 
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-[275px] h-[450px] rounded-[20px] bg-white shadow-xl flex flex-row justify-start  items-start ">
          <Image className="rounded-t-[20px] w-[275px] h-[250px]" src="/PicSlider/Cafe/1.png" width={400} height={300} alt="Picture of the author"/> 
          </div>
        </SwiperSlide>

        <SwiperSlide> 
          <div className="w-[275px] h-[450px] rounded-[20px] bg-white shadow-xl flex flex-row justify-start  items-start ">
            <Image className="rounded-t-[20px] w-[275px] h-[250px]" src="/PicSlider/Cafe/2.png" width={400} height={300} alt="Picture of the author"/> 
          </div>  
        </SwiperSlide>

        <SwiperSlide> 
          <div className="w-[275px] h-[450px] rounded-[20px] bg-white shadow-xl flex flex-row justify-start  items-start ">
            <Image className="rounded-t-[20px] w-[275px] h-[250px]" src="/PicSlider/Cafe/3.png" width={400} height={300} alt="Picture of the author"/> 
          </div>  
        </SwiperSlide>

        <SwiperSlide> 
          <div className="w-[275px] h-[450px] rounded-[20px] bg-white shadow-xl flex flex-row justify-start  items-start ">
            <Image className="rounded-t-[20px] w-[275px] h-[250px]" src="/PicSlider/History/1.png" width={400} height={300} alt="Picture of the author"/> 
          </div>  
        </SwiperSlide>

        <SwiperSlide> 
          <div className="w-[275px] h-[450px] rounded-[20px] bg-white shadow-xl flex flex-row justify-start  items-start ">
            <Image className="rounded-t-[20px] w-[275px] h-[250px]" src="/PicSlider/History/2.jpg" width={400} height={300} alt="Picture of the author"/> 
          </div>  
        </SwiperSlide>
        
      </Swiper>
      </div>
      
      <h1 className=" text-cyan-600  font-bold text-right  my-12  mx-36  text-xl  "><Link href="/Attraction">SEE ALL</Link></h1>

      {/*Product*/}
      <div className="slider-controler w-[1500px] h-[50px] flex flex-row justify-around my-12 items-center">
        <h1 className="w-[500px] text-black font-bold text-left ml-10 text-2xl">PRODUCT</h1>
          <div className="w-[500px] flex flex-row justify-end">
            <div className="prevS">
              <BsFillArrowLeftCircleFill className = "w-[55px] h-[55px] mx-2"/>
            </div>
            <div className="nextS">
              <BsFillArrowLeftCircleFill className = "w-[55px] h-[55px] rotate-180 fill-cyan-700 mx-2"/>
            </div>
          </div>
      </div>

      <div className="w-[1400px] h-[400px] ml-28 flex flex-row justify-center items-center">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 410,
          depth: 0,
          modifier: 2.5,
        }}
          navigation={{
          nextEl: '.nextS',
          prevEl: '.prevS'
        }}
        modules={[EffectCoverflow, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-[275px] h-[450px] rounded-[20px] bg-white shadow-xl flex flex-row justify-start  items-start ">
            <Image className="rounded-t-[20px] w-[275px] h-[250px]" src="/PicSlider/1.png" width={300} height={450} alt="Picture of the author"/>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="w-[275px] h-[450px] rounded-[20px] bg-white shadow-xl flex flex-row justify-start  items-start ">
            <Image className="rounded-t-[20px] w-[275px] h-[250px]" src="/PicSlider/2.png" width={400} height={300} alt="Picture of the author"/>
        </div>
        </SwiperSlide>
          
        <SwiperSlide>
          <div className="w-[275px] h-[450px] rounded-[20px] bg-white shadow-xl flex flex-row justify-start  items-start ">
           <Image className="rounded-t-[20px] w-[275px] h-[250px]" src="/PicSlider/3.png" width={400} height={300} alt="Picture of the author"/> 
           </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-[275px] h-[450px] rounded-[20px] bg-white shadow-xl flex flex-row justify-start  items-start ">
           <Image className="rounded-t-[20px] w-[275px] h-[250px]" src="/PicSlider/4.png" width={400} height={300} alt="Picture of the author"/> 
          </div>
        </SwiperSlide>

        <SwiperSlide> 
          <div className="w-[275px] h-[450px] rounded-[20px] bg-white shadow-xl flex flex-row justify-start  items-start ">
            <Image className="rounded-t-[20px] w-[275px] h-[250px]" src="/PicSlider/5.png" width={400} height={300} alt="Picture of the author"/> 
          </div>  
        </SwiperSlide>
        
      </Swiper>
      </div>
      
      <h1 className=" text-cyan-600  font-bold text-right  my-12  mx-36  text-xl  "><Link href="/Products">SEE ALL</Link></h1>
      <Footer/>
    </main> 
  )
}
