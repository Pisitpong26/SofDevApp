"use client"; // This is a client component
import Navbar from "@/components/Navbar";
import Link from 'next/link';
import React, { useState } from 'react';
import axios from "axios";

const request = axios.create({
  baseURL: "http://34.124.245.31:8000"  // This should be the backend server's IP and port
});


type payload = {username:string,password:string}

export const Login = (data:payload)=>
        	request.post("http://34.124.245.31:8000/login" , data)

export default function UserLogin(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        const payload = {
          username,
          password
        };

        Login(payload)
        .then((response) => {
            // Handle the response
                  console.log('Login successfully:', response.data);
                  const token = response.data.token;
                  console.log(token);
                  localStorage.setItem('token', token);
                  
              })
              .catch((error) => {
            // Handle errors
                  console.error('Error Login:', error);
                  alert("Incorrect Username or Password");
               });
        
    
        console.log('Signing in with:', payload);
      };

    return(

        <main className="h-screen bg-cover bg-center bg-[url(/Login/LoginBG.png)] bg-no-repeat">
                <Navbar/>
                <div className="flex flex-col justify-center items-center " >
                    <div className="mt-20 flex flex-col items-center border-2 rounded-2xl backdrop-blur-sm w-[430px] h-[400px]">
                        <div className=" text-white text-3xl mt-10 font-bold ">Login</div>
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
                                <div className="mb-6">
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
                                <div className="flex items-center justify-between">
                                <button
                                onClick={handleSignIn}
                                className="hover:scale-110 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                                >
                                Sign In
                                </button>
                                <a className="hover:scale-110 inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 text-white px-4" href="#">
                                    Forgot Password?
                                </a>
                                </div>
                                <div className="mt-3 flex items-center justify-center">
                                    <a className="hover:scale-110 inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 text-white" href="#">
                                    <Link href="/Register">Don&apos;t have an account? Sign Up !</Link>
                                    
                                    </a>
                                </div>
                                
                            </form>
                                    <p className="text-center text-white text-xs">
                                    Made with ❤️ by TravelerTale Developer Team
                                    </p>
                            </div>
                    </div>
                </div>
            
        </main>    
    )
}
