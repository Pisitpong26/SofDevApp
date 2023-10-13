"use client"; // This is a client component
import Navbar from "@/components/Navbar";
import Link from 'next/link';
import React, { useState } from 'react';
import axios from "axios";
import { useRouter } from 'next/navigation';

const request = axios.create({
    baseURL: "http://34.124.245.31:8000"  // This should be the backend server's IP and port
  });
  
  
  type payload = {firstname:string,lastname:string,username:string,password:string}
  
  const Register = (data:payload)=>
              request.post("http://34.124.245.31:8000/register" , data)

export default function RegisterUser(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const router = useRouter();

    const handleSignUp = () => {

        const trimmedUser = username.trim();
        const trimmedPassword = password.trim();

        const bannedChar = ['@','%','#','&','\"','\'','=','+','-','(',')','[',']','^','?','<','>'];

        if (username.includes(' ') || password.includes(' '))
        {
            alert("Username or Password cannot contain spaces");
            return;
        }

        

        if (trimmedUser.length == 0 || trimmedPassword.length ==0)
        {
            alert("Your Username or Password cannot be blank")
            return;
        } 
        if (repassword != password)
        {
            alert("Please make sure your re-entered password matches your password")
            return;
        }

        if (trimmedPassword.length < 6)
        {
            alert("Password must be at least 6 characters long")
            return;
        }

        for (const char of bannedChar) {
            if (username.includes(char)) {
              alert(`Username cannot contain special character`);
              return;
            }
          }


        const firstname ="placeholder";
        const lastname ="placeholder";
        const payload = {
          firstname,
          lastname,
          username,
          password
        };

        Register(payload)
        .then((response) => {
            // Handle the response
                  console.log('Register successfully:', response.data);
                  const token = response.data.token;
                  console.log(token);
                  alert("Register Success!")
                  router.push('/Login');
              })
              .catch((error) => {
            // Handle errors
                 alert("Username already taken")
                  console.error('Register Error:', error);
               });
        
    
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
                                    value={repassword}
                                    onChange={(e) => setRepassword(e.target.value)}
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
