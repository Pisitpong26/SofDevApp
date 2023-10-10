"use client"; // This is a client component
import Navbar from "@/components/Navbar";
import Link from 'next/link';
import React, { useState } from 'react';


export default function Register(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        const payload = {
          username,
          password
        };
    
        console.log('Signing up with:', payload);
      };

    return(

        <main className="h-screen bg-cover bg-center bg-[url(/Login/LoginBG.png)] bg-no-repeat">
                <Navbar/>
                <div className="flex flex-col justify-center items-center " >
                    <div className="mt-15 flex flex-col items-center border-2 rounded-2xl backdrop-blur-sm w-[430px] h-[500px]">
                        <div className=" text-white text-3xl mt-8 font-bold ">Register</div>
                        <div className="w-full max-w-xs">
                            <form className="mt-4 rounded px-3 pt-5 pb-2 mb-4">
                                <div className="mb-3">
                                    <label className="block text-white text-sm font-bold mb-2">
                                        Username
                                    </label>
                                    <input
                                        className="bg-white bg-opacity-20 shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline placeholder-white"
                                        id="username"
                                        type="text"
                                        placeholder=""
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        />

                                </div>
                                <div className="mb-3">
                                <label className="block text-white text-sm font-bold mb-2">
                                    Password
                                </label>
                                <input
                                    className="bg-white bg-opacity-20 shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline placeholder-white"
                                    id="password"
                                    type="password"
                                    placeholder=""
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="mb-6">
                                <label className="block text-white text-sm font-bold mb-2">
                                    Re-enter Password
                                </label>
                                <input
                                    className="bg-white bg-opacity-20 shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline placeholder-white"
                                    id="password"
                                    type="password"
                                    placeholder=""
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                <button
                                onClick={handleSignUp}
                                className="hover:scale-110 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                                >
                                Sign Up
                                </button>
                                </div>
                                <div className="mt-3 flex items-center justify-center">
                                    <a className="hover:scale-110 inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 text-white" href="#">
                                    <Link href="/Login">Already have an account? Sign In</Link>
                                    
                                    </a>
                                </div>
                                
                            </form>
                                    <p className="mt-12 text-center text-white text-xs">
                                    Made with ❤️ by TravelerTale Developer Team
                                    </p>
                            </div>
                    </div>
                </div>
            
        </main>    
    )
}
