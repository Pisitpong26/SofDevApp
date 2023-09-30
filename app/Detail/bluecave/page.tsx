/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/Navbar";
import AttractImage from "@/components/AttractImage";


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


                <div className="flex mt-5 w-full h-[300px] bg-gray-300 bg-opacity-30 px-60 pt-1">
                    <div className="flex flex-col w-1/3 mt-5 " id="reviewScore">
                        <div className="flex items-center mb-1">
                            <p className="md:text-5xl text-sm text-black font-bold mr-3">4.0</p>
                            <svg className="w-10 h-10 text-yellow-300 mr-1" aria-hidden="true" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-10 h-10 text-yellow-300 mr-1" aria-hidden="true" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-10 h-10 text-yellow-300 mr-1" aria-hidden="true" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-10 h-10 text-yellow-300 mr-1" aria-hidden="true"  fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-10 h-10 text-gray-300 mr-1 dark:text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            
                        </div>
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">69 ratings</p>
                                <div className="flex items-center mt-4">
                                    <a href="#" className="text-sm font-bold text-blue-600 dark:text-blue-500 hover:underline">5⭐</a>
                                    <div className="w-[250px] h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                        <div className="h-5 bg-yellow-300 rounded w-[175px]" ></div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">70%</span>
                                </div>
                                <div className="flex items-center mt-4">
                                    <a href="#" className="text-sm font-bold text-blue-600 dark:text-blue-500 hover:underline">4⭐</a>
                                    <div className="w-[250px] h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                        <div className="h-5 bg-yellow-300 rounded w-[43px]"></div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">17%</span>
                                </div>
                                <div className="flex items-center mt-4">
                                    <a href="#" className="text-sm font-bold text-blue-600 dark:text-blue-500 hover:underline">3⭐</a>
                                    <div className="w-[250px] h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                        <div className="h-5 bg-yellow-300 rounded w-[20px]"></div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">8%</span>
                                </div>
                                <div className="flex items-center mt-4">
                                    <a href="#" className="text-sm font-bold text-blue-600 dark:text-blue-500 hover:underline">2⭐</a>
                                    <div className="w-[250px] h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                        <div className="h-5 bg-yellow-300 rounded w-[10px]"></div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">4%</span>
                                </div>

                                <div className="flex items-center mt-4">
                                    <a href="#" className="text-sm font-bold text-blue-600 dark:text-blue-500 hover:underline">1⭐</a>
                                    <div className="ml-[19px] w-[250px] h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                        <div className="h-5 bg-yellow-300 rounded w-[3px]"></div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">1%</span>
                                </div>

                        
                    </div>
                    <div className="flex flex-col mt-5 pl-[70px] justify-center">
                            <div className="flex flex-col text-left font-bold text-xl pl-6 ">
                                ให้คะแนนและเขียนรีวิว
                            </div>
                            <div className="flex flex-row mt-2">
                            <svg className="w-10 h-10 text-gray-300 mr-1 dark:text-gray-500 " aria-hidden="true" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-10 h-10 text-gray-300 mr-1 dark:text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-10 h-10 text-gray-300 mr-1 dark:text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-10 h-10 text-gray-300 mr-1 dark:text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-10 h-10 text-gray-300 mr-1 dark:text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            </div> 
                    </div>

                    <div className="flex flex-col  mt-5 px-[40px]">
                            <form >
                                <div className="flex-row">
                                    <div className=" px-3 mb-2 mt-2 w-full">
                                        <textarea className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-[370px] h-[200px] py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="body" placeholder='เขียนรีวิวที่นี่...' required></textarea>
                                    </div>
                                    
                                    <div className="pl-[260px]">
                                        <input type='submit' className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100" value='Post Review'/>
                                    </div>
                                </div>
                            </form>
                            </div>
                    </div>

             
            


        </main>
    )
}