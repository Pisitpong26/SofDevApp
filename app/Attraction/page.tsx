/* eslint-disable jsx-a11y/alt-text */
"use client" 
import '@/app/slider.css'
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Footer from '@/components/Footer';
export default function Attraction() {
  return (
    <main>
      <div className = "w-full h-100 bg-banner1-bg bg-center rounded-b-[80px]">
        <div className="w-full h-100 bg-black bg-opacity-40 text-white rounded-b-[80px]">
          <Navbar/>
          <Banner/>
        </div>
      </div>

      <br/>
      <h1 className='Select'>Select Catagories</h1>
      
      
      <div className="flex justify-center">
      <a
        href=""
        className="group  p-4 m-4 mx-20 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
      >
        <img
          src="../AttractionCategories/Nature.png"
          alt="Nature"
          className="w-24 h-24 mx-auto border-2 border-[#2F86A6] rounded-lg p-4"
        />
        <p className="text-[#2F86A6]" style={{ marginLeft: '0px' }}>ธรรมชาติ</p>
      </a>






      <a
        href=""
        className="group  p-4 m-4 mx-20 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
      >
    <img
      src="../AttractionCategories/History.png"
      alt="History"
      className="w-24 h-24 mx-auto border-2 border-[#2F86A6] rounded-lg p-4"
        />
        <p className="text-[#2F86A6]" style={{ marginLeft: '0px' }}>ประวัติศาสตร์</p>
  </a>

  <a
        href=""
        className="group  p-4 m-4 mx-20 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
      >
    <img
      src="../AttractionCategories/Activity.png"
      alt="Activity"
      className="w-24 h-24 mx-auto border-2 border-[#2F86A6] rounded-lg p-4"
        />
        <p className="text-[#2F86A6]" style={{ marginLeft: '0px' }}>กิจกรรม</p>
  </a>

  <a
        href=""
        className="group  p-4 m-4 mx-20 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
      >
    <img
      src="../AttractionCategories/Cafe.png"
      alt="Cafe"
      className="w-24 h-24 mx-auto border-2 border-[#2F86A6] rounded-lg p-4"
        />
        <p className="text-[#2F86A6]" style={{ marginLeft: '0px' }}>คาเฟ่</p>
  </a>

  <a
        href=""
        className="group  p-4 m-4 mx-20 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
      >
    <img
      src="../AttractionCategories/Else.png"
      alt="Else"
      className="w-24 h-24 mx-auto border-2 border-[#2F86A6] rounded-lg p-4"
        />
        <p className="text-[#2F86A6]" style={{ marginLeft: '0px' }}>อื่นๆ</p>
  </a>
      </div>


      <div className='advert'>
          <div className='left-advert'>
            {/* Left content */}
          </div>
          <div className='right-advert'>
            {/* Right content */}
          </div>
      </div>



      <div className="container-slider">
      <h4><span>ธรรมชาติ</span></h4>
      <br/>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 440,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="../PicSlider/1.png" />
          <p>Text for Image 2</p>
        </SwiperSlide>
        <SwiperSlide>
        <img src="../PicSlider/2.png" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="../PicSlider/3.png" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="../PicSlider/4.png" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="../PicSlider/5.png" />
        </SwiperSlide>
      </Swiper>
      </div>
      <div className="container-slider">
      <h4><span>ประวัติศาสตร์</span></h4>
      <br/>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 440,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="../PicSlider/6.png" />
          <p>Text for Image 2</p>
        </SwiperSlide>
        <SwiperSlide>
        <img src="../PicSlider/7.png" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="../PicSlider/8.png" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="../PicSlider/9.png" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="../PicSlider/10.png" />
        </SwiperSlide>
      </Swiper>
      </div>
      <div className="container-slider">
      <h4><span>ทำกิจกรรม</span></h4>
      <br/>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 440,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="../PicSlider/11.png" />
          <p>Text for Image 2</p>
        </SwiperSlide>
        <SwiperSlide>
        <img src="../PicSlider/12.png" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="../PicSlider/13.png" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="../PicSlider/14.png" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="../PicSlider/15.png" />
        </SwiperSlide>
      </Swiper>
      </div>
      <div className="container-slider">
      <h4><span>ค่าเฟ่</span></h4>
      <br/>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 440,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="../PicSlider/16.png" />
          <p>Text for Image 2</p>
        </SwiperSlide>
        <SwiperSlide>
        <img src="../PicSlider/17.png" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="../PicSlider/18.png" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="../PicSlider/19.png" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="../PicSlider/20.png" />
        </SwiperSlide>
      </Swiper>
      </div>
      <div className="container-slider">
      <h4><span>อื่นๆ</span></h4>
      <br/>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 440,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="../PicSlider/21.png" />
          <p>Text for Image 2</p>
        </SwiperSlide>
        <SwiperSlide>
        <img src="../PicSlider/22.png" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="../PicSlider/23.png" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="../PicSlider/24.png" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="../PicSlider/25.png" />
        </SwiperSlide>
      </Swiper>
      </div>






      <Footer></Footer>
    </main>
  )
}
