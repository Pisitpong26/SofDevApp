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
import Link from 'next/link';

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
      <h1 className='Select'>Select Categories</h1>
      
      
      <div className="flex justify-center">
      <Link
        href="/About"
        className="group  p-4 m-4 mx-20 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        rel="noopener noreferrer"
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
      >
        <img
          src="../AttractionCategories/Nature.png"
          alt="Nature"
          className="w-24 h-24 mx-auto border-2 border-[#2F86A6] rounded-lg p-4"
        />
        <p className="text-[#2F86A6]" style={{ marginLeft: '0px' }}>NATURE</p>
      </Link>






      <Link
        href=""
        className="group  p-4 m-4 mx-20 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"

        rel="noopener noreferrer"
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
      >
    <img
      src="../AttractionCategories/History.png"
      alt="History"
      className="w-24 h-24 mx-auto border-2 border-[#2F86A6] rounded-lg p-4"
        />
        <p className="text-[#2F86A6]" style={{ marginLeft: '0px' }}>HISTORY</p>
  </Link>

  <Link
        href=""
        className="group  p-4 m-4 mx-20 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
       
        rel="noopener noreferrer"
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
      >
    <img
      src="../AttractionCategories/Activity.png"
      alt="Activity"
      className="w-24 h-24 mx-auto border-2 border-[#2F86A6] rounded-lg p-4"
        />
        <p className="text-[#2F86A6]" style={{ marginLeft: '0px' }}>ACTIVITY</p>
  </Link>

  <Link
        href=""
        className="group  p-4 m-4 mx-20 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
       
        rel="noopener noreferrer"
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
      >
    <img
      src="../AttractionCategories/Cafe.png"
      alt="Cafe"
      className="w-24 h-24 mx-auto border-2 border-[#2F86A6] rounded-lg p-4"
        />
        <p className="text-[#2F86A6]" style={{ marginLeft: '0px' }}>CAFE</p>
  </Link>

  <Link
        href=""
        className="group  p-4 m-4 mx-20 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
     
        rel="noopener noreferrer"
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
      >
    <img
      src="../AttractionCategories/Else.png"
      alt="Else"
      className="w-24 h-24 mx-auto border-2 border-[#2F86A6] rounded-lg p-4"
        />
        <p className="text-[#2F86A6]" style={{ marginLeft: '0px' }}>OTHER</p>
  </Link>
      </div>


      <div className='advert flex flex-row justify-center mt-8'>
          <div className='left-advert'>
            {<Image className="rounded-[20px] w-full h-4/5" src="/Ads/ads1.png" width={300} height={450} alt="Picture of the author"/>}
          </div>
          <div className='right-advert'>
            {<Image className="rounded-[20px] w-full h-4/5" src="/Ads/ads2.png" width={300} height={450} alt="Picture of the author"/>}
          </div>
      </div>



      <div className="container-slider justify-center">
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
          stretch: 400,
          depth: 0,
          modifier: 2.5,
          slideShadows: true,
        }}
        
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper justify-center items-center"
      >
        <SwiperSlide>
          <Image className="rounded-[20px] w-[400px] h-[325px]" src="/PicSlider/1.png" width={300} height={450} alt="Picture of the author"/>
        
        </SwiperSlide>
        <SwiperSlide>
          <Image className="rounded-[20px] w-[400px] h-[325px]" src="/PicSlider/2.png" width={300} height={450} alt="Picture of the author"/>
        
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[400px] h-[325px]" src="/PicSlider/3.png" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[400px] h-[325px]" src="/PicSlider/4.png" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[400px] h-[325px]" src="/PicSlider/5.png" width={300} height={450} alt="Picture of the author"/>
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
          stretch: 400,
          depth: 0,
          modifier: 2.5,
          slideShadows: true,
        }}
        
        // pagination={true}
        // modules={[EffectCoverflow]}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide>
        <Image className="rounded-[20px] w-[400px] h-[325px]" src="/PicSlider/6.png" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[400px] h-[325px]" src="/PicSlider/7.png" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[400px] h-[325px]" src="/PicSlider/8.png" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[400px] h-[325px]" src="/PicSlider/9.png" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[400px] h-[325px]" src="/PicSlider/10.png" width={300} height={450} alt="Picture of the author"/>
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
          stretch: 400,
          depth: 0,
          modifier: 2.5,
          slideShadows: true,
        }}
        
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <Image className="rounded-[20px] w-[400px] h-[325px]" src="/PicSlider/11.png" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[400px] h-[325px]" src="/PicSlider/12.png" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[400px] h-[325px]" src="/PicSlider/13.png" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[400px] h-[325px]" src="/PicSlider/14.png" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[400px] h-[325px]" src="/PicSlider/15.png" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
      </Swiper>
      </div>
      <div className="container-slider">
      <h4><span>คาเฟ่</span></h4>
      <br/>
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
          slideShadows: true,
        }}
        
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <Image className="rounded-[20px] w-[400px] h-[325px]" src="/PicSlider/16.png" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[400px] h-[325px]" src="/PicSlider/17.png" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[400px] h-[325px]" src="/PicSlider/18.png" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[400px] h-[325px]" src="/PicSlider/19.png" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[400px] h-[325px]" src="/PicSlider/20.png" width={300} height={450} alt="Picture of the author"/>
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
          stretch: 400,
          depth: 0,
          modifier: 2.5,
          slideShadows: true,
        }}
        
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <Image className="rounded-[20px] w-[400px] h-[325px]" src="/PicSlider/21.png" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[400px] h-[325px]" src="/PicSlider/22.png" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[400px] h-[325px]" src="/PicSlider/23.png" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[400px] h-[325px]" src="/PicSlider/24.png" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[400px] h-[325px]" src="/PicSlider/25.png" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
      </Swiper>
      </div>






      <Footer></Footer>
    </main>
  )
}
