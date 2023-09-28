/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/Navbar";
import AttractCard from "@/components/AttractCard"

export default function About(){
    return(
        <main>
        <div className="w-full bg-blue bg-opacity-100 text-black" ><Navbar /><h1></h1></div>

        <div className='mt-4 max-w-screen-2xl mx-auto flex flex-col justify-center items-center'>
            <img src='../Detail/DetailIcon.png' alt="DetailIcon" className="w-30 h-30 mb-4" />
            <h1 className='text-6xl md:text-6xl uppercase font-bold mt-3 text-blue tracking-widest'>แหล่งท่องเที่ยวธรรมชาติ</h1>

            <form className="mt-10 mb-10 w-full max-w-3xl">
                <label className="text-sm font-medium text-gray-900 sr-only dark:text-white ">Search</label>
                <div className="relative">
                    <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm border-2 border-gray-300 rounded-3xl bg-gray-50 focus:ring-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 " placeholder="Search Attraction..." required></input>
                    <button type="submit" className="text-black absolute right-10 border-2 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Lets Go!</button>
                </div>
            </form>
        </div>


        <div className='max-w-screen-2xl mx-auto flex flex-row justify-center items-center gap-8' >
            <div>
                <AttractCard imgSrc="../Detail/waterfall.png" imgAlt="placeholder" text="น้ำตกทีลอซู"> </AttractCard>
            </div>
            <div>
                <AttractCard imgSrc="../Detail/bluecave.png" imgAlt="placeholder" text="ถ้ำสีฟ้า"> </AttractCard>
            </div>
            <div>
                <AttractCard imgSrc="../Detail/somewhere.png" imgAlt="placeholder" text="ดอยมะม่วงสามหมื่น"> </AttractCard>
            </div>
        </div>
        <div className='max-w-screen-2xl mx-auto flex flex-row justify-center items-center gap-8' >
            <div>
                <AttractCard imgSrc="../Detail/Flower.png" imgAlt="placeholder" text="ม่อนหมอกตะวัน"> </AttractCard>
            </div>
            <div>
                <AttractCard imgSrc="../Detail/waterfall2.png" imgAlt="placeholder" text="น้ำตกลานสาง"> </AttractCard>
            </div>
            <div>
                <AttractCard imgSrc="../Detail/mountain.png" imgAlt="placeholder" text="ม่อนคลุยหลวง ดอยทูเล"> </AttractCard>
            </div>
        </div>
        <div className='max-w-screen-2xl mx-auto flex flex-row justify-center items-center gap-8' >
            <div>
                <AttractCard imgSrc="../Detail/khunpawor.png" imgAlt="placeholder" text="อุทยานแห่งชาติขุนพะวอ"> </AttractCard>
            </div>
            <div>
                <AttractCard imgSrc="../Detail/literallyHotWater.png" imgAlt="placeholder" text="บ่อน้ำพุร้อนแม่กาษา"> </AttractCard>
            </div>
            <div>
                <AttractCard imgSrc="../Detail/AnotherWaterfall.png" imgAlt="placeholder" text="น้ำตกแม่ระเมิง"> </AttractCard>
            </div>
        </div>
        <div className='max-w-screen-2xl mx-auto flex flex-row justify-center items-center gap-8' >
            <div>
                <AttractCard imgSrc="../Detail/doi.png" imgAlt="placeholder" text="ดอยหัวหมด"> </AttractCard>
            </div>
            <div>
                <AttractCard imgSrc="../Detail/greenMoutain.png" imgAlt="placeholder" text="อุ้มผาง"> </AttractCard>
            </div>
            <div>
                <AttractCard imgSrc="../Detail/charoenRiver.png" imgAlt="placeholder" text="น้ำตกพาเจริญ"> </AttractCard>
            </div>
        </div>
        

        </main>
    )
}