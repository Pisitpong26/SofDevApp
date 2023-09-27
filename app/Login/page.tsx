import Navbar from "@/components/Navbar";

export default function Login(){
    return(

        <main className="h-screen bg-cover bg-center bg-[url(/Login/LoginBG.png)] bg-no-repeat">
                <Navbar/>
                <div className="flex flex-col justify-center items-center " >
                    <div className="flex flex-col items-center border-2 rounded-2xl backdrop-blur-sm w-[478px] h-[495px]">
                        <div className=" text-white text-3xl mt-5">Login</div>
                        <form>
                            <div className="mt-5 relative mb-6 w-[350px] h-[100px]" data-te-input-wrapper-init>
                            
                                    <input
                                    type="text"
                                    className="underline-offset-1absolute peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleFormControlInput2"
                                    placeholder="Username" />
                                    <label
                                    htmlFor="exampleFormControlInput3"
                                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >Username
                                    </label>

                            </div>
                        </form>
                        
                    </div>
                </div>
            
        </main>    
    )
}

//w-full h-50 bg-black bg-opacity-40 text-black