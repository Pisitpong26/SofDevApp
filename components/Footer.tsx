/* eslint-disable @next/next/no-img-element */
import React, { Component } from 'react';
import Image from "next/image"; 

class Footer extends Component {
  render() {
    const current_year = new Date().getFullYear();
    return (
  
        <div>
          <div className='flex flex-col justify-center items-center my-10'>
            <Image className=' ' src="/Footer/image.png" width={90} height={90} alt="Picture of the author"/>
            <h1 className='text-cyan-600 text-3xl font-bold'>About us</h1>
            <h1 className='text-cyan-600 text-xl font-bold'>Project for PRINCIPLES OF SOFTWARE DEVELOPMENT PROCESS</h1>
            <h1 className='text-cyan-600 text-xl font-bold'>SUBMITTED BY</h1>
          </div>
          <h1 className='text-cyan-700 text-center text-6xl font-bold'>TravelerTale</h1>

          <div className='flex flex-row justify-around items-end mt-10  w-full h-[700px] bg-footer-bg bg-center'>

            <div className='text-black flex flex-col justify-center items-start my-6'>
              <h1 className='text-xl font-bold'>TravelerTale</h1>
              <h1 className='text-sm font-bold'>
                นักศึกษาคณะวิศวกรรมศาสตร์ <br></br>
                ภาควิชาวิศวกรรมคอมพิวเตอร์ ปี 3<br></br>
                สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</h1>
            </div>

            <div className='text-black flex flex-col justify-center items-start my-6'>
              <h1 className='text-xl font-bold'>Company</h1>
              <h1 className='text-sm font-bold'>
                KMITL <br></br>
                CE<br></br>
                3D</h1>
            </div>

            <div className='text-black flex flex-col justify-center items-start my-6'>
              <h1 className='text-xl font-bold'>Contact</h1>
              <h1 className='text-sm font-bold'>
                +00 XX XXX XXXXX <br></br>
                +00 XX XXX XXXXX <br></br>
                +00 XX XXX XXXXX</h1>
            </div>

            <div className='text-black flex flex-col justify-center items-start my-6'>
              <h1 className='text-xl font-bold'>Meet Us</h1>
              <h1 className='text-sm font-bold'>
                ตึก ECC Khwaeng Lam Prathew,  <br></br>
                Khet Lat Krabang,<br></br>
                Krung Thep Maha Nakhon 10520
                </h1>
            </div>

          </div>
        </div>

    );
  } 
}

export default Footer;