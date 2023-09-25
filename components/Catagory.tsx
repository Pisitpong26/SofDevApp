import React from 'react'
import { FaBoxArchive } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";

const Catagory = () => {
    return (
    <div className="w-[1000px] h-[210px] mx-auto flex justify-around items-center -my-20 ">
        <div className="w-[220px] h-[210px] bg-white rounded-[20px] shadow-xl flex flex-col justify-center items-center">
            <FaBoxArchive className = "w-[70px] h-[70px]"/>
            <h1>OTOP PRODUCT</h1>
        </div>
        <div className="w-[220px] h-[210px] bg-white rounded-[20px] shadow-xl flex flex-col justify-center items-center">
            <IoIosPeople className = "w-[70px] h-[70px]"/>
            <h1>PURPOSE</h1>
        </div>
        <div className="w-[220px] h-[210px] bg-white rounded-[20px] shadow-xl flex flex-col justify-center items-center">
            <FaMapLocationDot className = "w-[70px] h-[70px]"/>
            <h1>ATTRACTION</h1>
        </div>
    </div>
    )
  };

export default Catagory