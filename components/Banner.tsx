"use client";
import React from 'react'
import { useTypewriter,Cursor } from 'react-simple-typewriter';

const Banner = () => {
    const [text] = useTypewriter({
        words: [
          "ประสบการณ์ท่องเที่ยว ที่อยากให้คุณได้ลองสัมผัส",
          "ฟังรีวิว จากผู้เคยไปเยี่ยมชม",
          "เลือกซื้อสินค้า OTOP จากฝีมือชาวบ้าน.",
        ],
        loop: true,
        typeSpeed: 30,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });
  return (
    <div className="h-96 max-w-screen-2xl mx-auto flex flex-col justify-center items-center">
        <h1 className="text-2xl md:text-4xl uppercase font-bold">
            TAK
        </h1>
        <p className="text-base md:text-lg font-semibold mt-2">
            {text} <Cursor cursorBlinking cursorStyle="|" cursorColor="#ffaa17" />
        </p>
    </div>
  )
}; 

export default Banner