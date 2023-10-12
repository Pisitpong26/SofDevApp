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
      <div className = "w-full h-[500px] bg-banner1-bg bg-center rounded-b-[150px]">
        <div className="w-full h-[500px] bg-black bg-opacity-40 text-white rounded-b-[150px]">
          <Navbar/>
          <Banner/>
        </div>
      </div>

      <br/>
      <h1 className='Select'>Select Categories</h1>
      
      
      <div className="flex justify-center">
      <Link
        href="/Nature"
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
        className="group  p-4 m-4 mx-12 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"

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
        className="group  p-4 m-4 mx-12 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
       
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
        className="group  p-4 m-4 mx-12 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
       
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
        className="group  p-4 m-4 mx-12 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
     
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


      <div className='advert flex flex-row justify-center'>
          <div className='left-advert'>
            {<Image className="rounded-[20px] " src="/Ads/ads1.png" width={450} height={250} alt="Picture of the author"/>}
          </div>
          <div className='right-advert'>
            {<Image className="rounded-[20px] " src="/Ads/ads2.png" width={450} height={250} alt="Picture of the author"/>}
          </div>
      </div>


      <div className="container-slider justify-center">
      <h4><span>ธรรมชาติ</span></h4>
      <br/>
      <div className="ml-12 mr-12">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={4}
        coverflowEffect={{
          rotate: 0,
          stretch: 50,
          depth: 100,
          modifier: 2,
        }}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/Nature/1.png" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/Nature/2.png" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/Nature/3.png" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/Nature/4.png" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/Nature/5.png" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/Nature/6.png" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/Nature/7.png" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/Nature/8.png" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/Nature/9.jpg" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/Nature/10.jpg" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/Nature/11.png" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/Nature/12.png" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/Nature/13.png" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/Nature/14.jpg" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/Nature/15.jpg" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/Nature/16.jpg" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/Nature/17.jpg" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/Nature/18.jpg" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/Nature/19.jpg" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/Nature/20.jpg" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/Nature/21.jpg" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
      </Swiper>
      </div>
      </div>
      <div className="container-slider justify-center">
      <h4><span>ประวัติศาสตร์</span></h4>
      <br/>
      <div className="ml-12 mr-12">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={4}
        coverflowEffect={{
          rotate: 0,
          stretch: 50,
          depth: 100,
          modifier: 2,
        }}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/History/1.png" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/History/2.jpg" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/History/3.jpg" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/History/4.jpg" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/History/5.jpg" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/History/6.png" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/History/7.png" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/History/8.png" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/History/9.png" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/History/10.jpg" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
      </Swiper></div>
      </div>
      <div className="container-slider justify-center">
      <h4><span>ทำกิจกรรม</span></h4>
      <br/>
      <div className="ml-12 mr-12">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={4}
        coverflowEffect={{
          rotate: 0,
          stretch: 50,
          depth: 100,
          modifier: 2,
        }}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/Activity/1.jpg" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/Activity/2.png" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/Activity/3.png" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/Activity/4.png" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/Activity/5.jpg" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/Activity/6.jpg" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/Activity/7.jpg" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/Activity/8.jpg" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/Activity/9.jpg" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/Activity/10.jpg" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/Activity/11.png" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
      </Swiper></div>
      </div>
      <div className="container-slider justify-center">
      <h4><span>คาเฟ่</span></h4>
      <br/>
      <div className="ml-12 mr-12">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={4}
        coverflowEffect={{
          rotate: 0,
          stretch: 50,
          depth: 100,
          modifier: 2,
        }}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/Cafe/1.png" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/Cafe/2.png" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/Cafe/3.png" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/Cafe/4.png" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/Cafe/5.png" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/Cafe/6.png" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/Cafe/7.png" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/Cafe/8.png" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/Cafe/9.png" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/Cafe/10.jpg" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
      </Swiper></div>
      </div>
      <div className="container-slider justify-center">
      <h4><span>อื่นๆ</span></h4>
      <br/>
      <div className="ml-12 mr-12">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={4}
        coverflowEffect={{
          rotate: 0,
          stretch: 50,
          depth: 100,
          modifier: 2,
        }}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/Other/1.jpg" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/Other/2.jpg" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/Other/3.jpg" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/Other/4.png" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/Other/5.jpg" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/Other/6.jpg" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/Other/7.jpg" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/Other/8.jpg" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/Other/9.jpg" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="rounded-[20px] w-[325px] h-[250px]" src="/PicSlider/Other/10.jpg" width={300} height={450} alt="Picture of the author"/>
        </SwiperSlide>
      </Swiper></div>
      </div>






      <Footer></Footer>
    </main>
  )
}
