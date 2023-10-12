"use client"; // This is a client component
import React, { useEffect, useState } from 'react';
import { BsBasket } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import Link from 'next/link';
import Login from '@/app/Login/page';
import getToken from './getToken';
import getUsername from './getUsername';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const request = axios.create({
  baseURL: "http://34.124.245.31:8000"  // This should be the backend server's IP and port
});

export const Logout = (authToken: string)=>
        	request.get("http://34.124.245.31:8000/logout",{
            headers: {
              'Authorization': `${authToken}`, // Replace 'Bearer' with the appropriate authentication scheme if needed
            },
          });

const Navbar = () => {
  const [token, setToken] = useState('');
  const [username, setUsername] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchedToken = getToken() || '';
    const fetchedUsername = getUsername() || '';
    setToken(fetchedToken);
    setUsername(fetchedUsername);
  }, []); // Run this effect only once on mount

  const handleLogout = () => {
    localStorage.removeItem("token");
    console.log("successfully logout and clear token")
    router.push('/Login');

    Logout(token)
        .then((response) => {
            // Handle the response
                  console.log('Logout successfully:', response.data);
                  router.push('/Login');;
                  
              })
              .catch((error) => {
            // Handle errors
                  console.error('Error Logout:', error);
               });
  };

  return <div className="w-full h-20 lg:h-28 text-white opacity-100" >
      <div className="max-w-screen-2xl h-full mx-auto px-4 flex items-center justify-between">
      <h1 className="text-3xl font-extrabold ">TravelerTale</h1>
        <ul className="hidden lg:inline-flex items- gap-8 uppercase text-sm font-semibold">
          <li className="hover:text-hoverColor cursor-pointer duration-300  hover:text-yellow-300"><Link href="/">Home</Link></li>
          <li className="hover:text-hoverColor cursor-pointer duration-300  hover:text-yellow-300"><Link href="/About">About</Link></li>
          <li className="hover:text-hoverColor cursor-pointer duration-300  hover:text-yellow-300"><Link href="/Attraction">Attraction</Link></li>
          <li className="hover:text-hoverColor cursor-pointer duration-300  hover:text-yellow-300"><Link href="/Products">Products</Link></li>
          <li className="hover:text-hoverColor cursor-pointer duration-300  hover:text-yellow-300"><Link href="/Contact">Contact</Link></li>
        </ul>
        <div className="hidden lg:inline-flex gap-5 items-center">
          <BsBasket className="text-xl hover:text-hoverColor" />
          <h1>|</h1>
          {token ? (
            <button
            suppressHydrationWarning={true}
            onClick={handleLogout}
            className="w-[107px] h-[48px] bg-blue-500 text-white uppercase text-sm font-semibold rounded-3xl hover:bg-darkRed hover:text-yellow-300 duration-300">
              {username} : Logout
            </button>
          ) : (
            <button
            suppressHydrationWarning={true}
            className="w-[107px] h-[48px] bg-blue-500 text-white uppercase text-sm font-semibold rounded-3xl hover:bg-darkRed hover:text-yellow-300 duration-300">
              <Link href="/Login">Login</Link>
            </button>
          )}
        </div>
        <div className="inline-flex lg:hidden">
          <AiOutlineMenu className="text-3xl" />
        </div>
      </div>
    </div>
};
export default Navbar;
