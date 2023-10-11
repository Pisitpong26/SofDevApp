/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/Navbar";
import AttractCard from "@/components/AttractCard"

export default function About(){
    return(
        <main className="bg-gray-100 bg-opacity-50">
        <div className="w-full bg-blue bg-opacity-100 text-black" ><Navbar /><h1></h1></div>

        <div className='mt-4 max-w-screen-2xl mx-auto flex flex-col justify-center items-center'>
                <h2 className=" md:text-5xl uppercase font-bold mt-3 text-blue tracking-widest">Our Team</h2>
                <h3 className=" md:text-1xl uppercase font-bold mt-1 text-blue tracking-widest">Computer Engineering @KMITL</h3>
        </div>


        <div className="flex flex-row w-full h-[400px] justify-center gap-6 mt-5">
            <div className="flex flex-col h-[350px] w-[250px]  rounded-xl bg-white items-center shadow-xl">
                <img src="/Member/1.jpg" className="w-[195px] h-[260px] rounded-lg mt-5"></img>
                <div className="font-bold text-xl mt-2">64010022</div>
                <div className="text-md">Krit Tangpinyoputtikhun</div>
            </div>
            <div className="flex flex-col h-[350px] w-[250px]  rounded-xl bg-white items-center shadow-xl">
                <img src="/Member/por.jpg" className="w-[195px] h-[260px] rounded-lg mt-5"></img>
                <div className="font-bold text-xl mt-2">64010403</div>
                <div className="text-md">Noparut Chantan</div>
            </div>
            <div className="flex flex-col h-[350px] w-[250px]  rounded-xl bg-white items-center shadow-xl">
                <img src="/Member/ritaxtii.png" className="w-[195px] h-[260px] rounded-lg mt-5"></img>
                <div className="font-bold text-xl mt-2">64010522</div>
                <div className="text-md">Parita Nawaree</div>
            </div>
            <div className="flex flex-col h-[350px] w-[250px]  rounded-xl bg-white items-center shadow-xl">
                <img src="/Member/kong.jpg" className="w-[195px] h-[260px] rounded-lg mt-5"></img>
                <div className="font-bold text-xl mt-2">64010546</div>
                <div className="text-md">Pacharapong Supha</div>
            </div>
            <div className="flex flex-col h-[350px] w-[250px]  rounded-xl bg-white items-center shadow-xl">
                <img src="/Member/arm.jpg" className="w-[195px] h-[260px] rounded-lg mt-5"></img>
                <div className="font-bold text-xl mt-2">64010575</div>
                <div className="text-md">Phatcharaphon Kaewriporn</div>
            </div>
        </div>
        <div className="flex flex-row w-full h-[400px] justify-center gap-6 mt-1">
            <div className="flex flex-col h-[350px] w-[250px]  rounded-xl bg-white items-center shadow-xl">
                <img src="/Member/james.jpg" className="w-[195px] h-[260px] rounded-lg mt-5"></img>
                <div className="font-bold text-xl mt-2">64010609</div>
                <div className="text-md">Pisitpong Plongkerd</div>
            </div>
            <div className="flex flex-col h-[350px] w-[250px]  rounded-xl bg-white items-center shadow-xl">
                <img src="/Member/tonfah.jpg" className="w-[195px] h-[260px] rounded-lg mt-5"></img>
                <div className="font-bold text-xl mt-2">64010815</div>
                <div className="text-md">Wiroon Somphaothong</div>
            </div>
            <div className="flex flex-col h-[350px] w-[250px]  rounded-xl bg-white items-center shadow-xl">
                <img src="/Member/two.jpg" className="w-[195px] h-[260px] rounded-lg mt-5"></img>
                <div className="font-bold text-xl mt-2">64010806</div>
                <div className="text-md">Withun Watcharakritwekhin</div>
            </div>
            <div className="flex flex-col h-[350px] w-[250px]  rounded-xl bg-white items-center shadow-xl">
                <img src="/Member/oat.jpg" className="w-[195px] h-[260px] rounded-lg mt-5"></img>
                <div className="font-bold text-xl mt-2">64010860</div>
                <div className="text-md">Suppaphol Areewattanawong</div>
            </div>
            <div className="flex flex-col h-[350px] w-[250px]  rounded-xl bg-white items-center shadow-xl">
                <img src="/Member/mind.jpg" className="w-[195px] h-[260px] rounded-lg mt-5"></img>
                <div className="font-bold text-xl mt-2">64011018</div>
                <div className="text-md">Artitaya Pimsupaporn</div>
            </div>
        </div>
        
        </main>
    )
}