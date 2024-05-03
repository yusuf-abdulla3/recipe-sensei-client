import homeImg from "../assets/home_page.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import '../styles/home.css'

import { useEffect, useState } from "react";
import axios from 'axios';

export default function Home() {
 
  return (

    <>
    <Navbar />
    <div className="flex flex-col xl:flex-row place-content-center mt-10 mx-auto bg-white dark:bg-gray-900 justify-center items-center pt-10 xl:pt-0 ">
        <img className="home-img rounded" src={homeImg}></img>  
        <div className="paragraph-section me-10 mt-10 my-auto">
      <div className="bg-white dark:bg-gray-900 h-full">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Your Personal Cooking Coach</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-36 dark:text-gray-400">Wanna recreate your favourite dishes? Have a few ingredients you want to use, but don’t know what to make? Let Recipe Sensei help come up with something and focus on making good food 🤤</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="/ingredients" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Get started
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
            {/* <a href="#" className="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Learn more
            </a>   */}
        </div>
    </div>
</div>
      </div>
    </div>
    <Footer />


    </>
  )
}