import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <main>
      <div className = "w-full h-100 bg-banner-bg bg-center rounded-b-[150px]">
        <div className="w-full h-100 bg-black bg-opacity-40 text-white rounded-b-[150px]">
          <Navbar/>
          <Banner/>
        </div>
      </div>
    </main> 
  )
}
